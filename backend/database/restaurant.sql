CREATE TABLE restaurant (
  uuid UUID NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  reviews VARCHAR(50),
  address VARCHAR(150) NOT NULL,
  price_range INT NOT NULL CHECK(price_range >= 1 AND price_range <= 5)
);

INSERT INTO restaurant (uuid, name, address, price_range) VALUES (uuid_generate_v4(), 'Daldongnae', '6034 Yonge St, Toronto, ON M2M 3W5', 3);
INSERT INTO restaurant (uuid, name, address, price_range) VALUES (uuid_generate_v4(), 'Oretta', '633 King St W, Toronto, ON M5V 1M5', 5);
INSERT INTO restaurant (uuid, name, address, price_range) VALUES (uuid_generate_v4(), 'Gusto 501', '501 King St E, Toronto, ON M5A 1L9', 4);
INSERT INTO restaurant (uuid, name, address, price_range) VALUES (uuid_generate_v4(), 'Seoul Shakers', '1241 Bloor St W, Toronto, ON M6H 1N6', 3);
INSERT INTO restaurant (uuid, name, address, price_range) VALUES (uuid_generate_v4(), 'Liuyishaou Hotpot', '4188 Finch Avenue East, Toronto, ON M1S 3V1', 4);
INSERT INTO restaurant (uuid, name, address, price_range) VALUES (uuid_generate_v4(), 'Pizza Pizza', '208 Queens Quay W Unit #9, Toronto, ON M5J 2Y5', 1);
