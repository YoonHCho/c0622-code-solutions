const express = require('express');
const app = express();

const pg = require('pg');
// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades";
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.use(express.json());

app.post('/api/grades/', (req, res) => {
  const sql = `
    insert into "grades" ("name", "course", "score")
    values               ($1, $2, $3)
    returning *;
  `;

  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);

  if (!name) {
    res.status(400).json({ error: 'name is a required field' });
    return;
  } else if (!course) {
    res.status(400).json({ error: 'course is a required field' });
    return;
  } else if (!Number.isInteger(score) || score <= 0) {
    res.status(400).json({ error: 'score must be a positive integer' });
    return;
  }
  const params = [name, course, score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const sql = `
    update "grades"
    set    "name" = $1,
           "course" =$2,
           "score" = $3
    where  "gradeId" = $4
    returning *;
  `;
  const gradeId = Number(req.params.gradeId);
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  } else if (!name) {
    res.status(400).json({ error: 'name is a required field' });
    return;
  } else if (!course) {
    res.status(400).json({ error: 'course is a required field' });
    return;
  } else if (!Number.isInteger(score) || score <= 0) {
    res.status(400).json({ error: 'score must be a positive integer' });
    return;
  }
  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(404).json({ error: `cannot find grade with id: ${gradeId}` });
      }
      const grade = result.rows[0];
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err.message);
      res.status(404).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const sql = `
    delete from "grades"
     where "gradeId" = $1
  `;
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  }
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      if (result.rowCount === 0) {
        return res.status(404).json({ error: `cannot find grade with id: ${gradeId}` });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen('3000', () => {
  // eslint-disable-next-line no-console
  console.log('Server running on port 3000');
});
