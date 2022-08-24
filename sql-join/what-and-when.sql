SELECT
  "f"."releaseYear" as "releaseYear",
  "g"."name" as "genre",
  "f"."title" as "title"
FROM
  "filmGenre" as "fG"
JOIN
  "films" as "f" USING ("filmId")
JOIN
  "genres" as "g" USING ("genreId")
WHERE
  "f"."title" = 'Boogie Amelie';
