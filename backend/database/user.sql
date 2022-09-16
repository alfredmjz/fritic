DROP TABLE IF EXISTS friticuser;

CREATE TABLE friticuser (
  uuid UUID NOT NULL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  passwordHash VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phoneNumber VARCHAR(15),
  lastLogin TIMESTAMPTZ NOT NULL,
  restaurant UUID[],
  review UUID[],
  CHECK (phoneNumber LIKE '%[^0-9]%'),
  CHECK(email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'),
  UNIQUE(email, phoneNumber)
);

