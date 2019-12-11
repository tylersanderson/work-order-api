BEGIN TRANSACTION;

CREATE TABLE orders (
	orderNumber serial PRIMARY KEY,
	address VARCHAR(100),
	description VARCHAR(40),
	orderNotes VARCHAR(500),
	isOrderComplete boolean
);

COMMIT;