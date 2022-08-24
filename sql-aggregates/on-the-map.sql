SELECT "countries"."name" AS "country",
       count("c".*) AS "numOfCities"
FROM
  "countries"
JOIN
  "cities" AS "c" USING ("countryId")
GROUP BY "countries"."countryId"
ORDER BY "country";
