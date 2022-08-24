SELECT
  "c"."firstName" as "firstName",
  "c"."lastName" as "lastName"
FROM
  "rentals"
JOIN
  "customers" as "c" USING ("customerId")
JOIN
  "inventory" as "i" USING ("inventoryId")
JOIN
  "films" as "f" USING ("filmId")
WHERE
  "f"."title" = 'Magic Mallrats';


-- filmId 547 -> inventoryId, rentalId, customer ID.
-- cusID, FILMID, INVENTORYid, RENTALID
