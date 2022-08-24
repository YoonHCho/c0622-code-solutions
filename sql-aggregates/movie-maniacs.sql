SELECT
  "c"."firstName" AS "firstName",
  "c"."lastName" AS "lastName",
  SUM("p"."amount") AS "totalPayment"

FROM
  "customers" AS "c"
JOIN
  "payments" AS "p" USING ("customerId")
GROUP BY
  "c"."customerId"
ORDER BY
  "totalPayment" DESC;
