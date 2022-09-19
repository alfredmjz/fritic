DROP TABLE IF EXISTS review;

CREATE TABLE review (
  uuid UUID NOT NULL PRIMARY KEY,
  restaurant_uuid UUID NOT NULL REFERENCES restaurant(uuid) ,
  name VARCHAR(50) NOT NULL,
  content TEXT NOT NULL,
  ratings INT NOT NULL CHECK(ratings >= 1 AND ratings <= 5)
);

INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), '2e1c5f0d-45fb-4f1e-8894-f73a7f8ba83c','Alex', 'Absolutely amazing', 4);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), '2e1c5f0d-45fb-4f1e-8894-f73a7f8ba83c','Johan', 'My favourite goto', 5);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), '2e1c5f0d-45fb-4f1e-8894-f73a7f8ba83c','Jessica', 'I love the food but service was too slow', 2);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), 'f2182d88-518d-4458-a279-b908e0b36597', 'Xihong', 'Mediocre', 3);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), '3824ac76-8e75-410b-ab03-1786bb730fe8','Brittany', 'Too spicy for my liking', 2);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), '5b2a51e5-b6d3-4520-8494-e717be9cc037','Alice',  'I love the food and the vibe', 5);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), '5b2a51e5-b6d3-4520-8494-e717be9cc037','Han',  'Hidden gem', 5);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), 'fade805b-e9c4-46d8-95c3-1f5a0cba5e58','June',  'Celebrated my birthday here but was dissapointed by the food', 2);
