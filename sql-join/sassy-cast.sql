SELECT
  "a"."firstName" as "firstName",
  "a"."lastName" as "lastName"
FROM
  "castMembers"
JOIN
  "actors" as "a" USING ("actorId")
JOIN
  "films" as "f" USING ("filmId")
WHERE
  "f"."title" = 'Jersey Sassy';
