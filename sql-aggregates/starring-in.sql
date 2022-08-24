SELECT
  "g"."name" AS "genre",
COUNT("g".*) AS "totalMovies"
FROM
  "genres" AS "g"
JOIN
  "filmGenre" AS "fG" USING ("genreId")
JOIN
  "castMembers" AS "cM" USING ("filmId")
JOIN
  "actors" AS "a" USING ("actorId")
WHERE "a"."firstName" = 'Lisa'
AND   "a"."lastName" = 'Monroe'
GROUP BY
  "g"."name"
ORDER BY "g"."name";
