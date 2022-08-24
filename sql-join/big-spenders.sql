SELECT
  "c"."firstName" as "firstName",
  "c"."lastName" as "lastName",
  "p"."amount" as "amountS"
FROM
  "customers" as "c"
JOIN
  "payments" as "p" USING ("customerId")
ORDER BY
  "amount" DESC
LIMIT 10;
