DROP TABLE IF EXISTS review;

CREATE TABLE review (
  uuid UUID NOT NULL PRIMARY KEY,
  restaurant_uuid UUID NOT NULL REFERENCES restaurant(uuid) ,
  name VARCHAR(50) NOT NULL,
  content TEXT NOT NULL,
  ratings INT NOT NULL CHECK(ratings >= 1 AND ratings <= 5)
);

INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), '1de3d303-a98a-40ff-8411-9ff496c49353','Alex', 'Absolutely amazing', 4);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), '1de3d303-a98a-40ff-8411-9ff496c49353','Johan', 'My favourite goto', 5);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), '1de3d303-a98a-40ff-8411-9ff496c49353','Jessica', 'I love the food but service was too slow', 2);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), '52b27b8c-e596-4f5d-bb1d-0f4488547f80', 'Xihong', 'Mediocre', 3);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), '4da9e368-cd09-482c-87b6-9520a56cf234','Brittany', 'Too spicy for my liking', 2);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), 'fc5895e9-1570-4cb3-8441-399834f5c770','Alice',  'I love the food and the vibe', 5);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), 'fc5895e9-1570-4cb3-8441-399834f5c770','Han',  'Hidden gem', 5);
INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES(uuid_generate_v4(), '487b6676-a894-4e85-bee2-06b6bc8045d0','June',  'Celebrated my birthday here but was dissapointed by the food', 2);
