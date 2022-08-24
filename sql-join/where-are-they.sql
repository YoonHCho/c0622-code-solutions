SELECT
  "a"."line1" as "streetName",
  "cities"."name" as "city",
  "a"."district" as "district",
  "c"."name" as "country"
FROM
  "addresses" as "a"
JOIN
  "cities" USING ("cityId")
JOIN
  "countries" as "c" USING ("countryId");
