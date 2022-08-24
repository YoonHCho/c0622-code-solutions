INSERT INTO "actors" ("firstName", "lastName")
VALUES ('Jung-Jae', 'Lee'),
       ('Woo-Sung', 'Jang')
RETURNING *;
