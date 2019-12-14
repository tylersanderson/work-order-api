BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('Tyler', 'tyler@gmail.com', 5, '2018-01-01');
INSERT into login (hash, email) values ('$2a$10$upz0hE5YgrSIiHOsRKwqeuPNGJ1A3GvPVTEvcK/mOxKay30YK8CRa', 'tyler@gmail.com');
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete) values ('100121', '221A Baker St', 'Tenant above is loud, bad at violin', 'Order Notes for 221A', false);
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete) values ('100122', '221B Baker St', 'Sherlock Holmes wants new neighbors', 'Order Notes for 221B', false);
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete) values ('100123', '221C Baker St', 'Cranky about noisy neighbor', 'Order Notes for 221C', false);
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete) values ('100124', '1001 Main St', 'Repairs needed to the flux capacitor', 'Order Notes for 1001 Main St.', false);
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete) values ('100125', '1002 Main St', 'Customer requests more blinker fluid', 'Order Notes for 1002 Main St.', false);
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete) values ('100126', '1003 Main St', 'Doc Brown having trouble with DeLorean', 'Order Notes for 1003 Main St.', false);
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete) values ('100127', '1004 Main St', 'Voice box repairs needed for Mr. Vader', 'Order Notes for 1004 Main St.', false);
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete) values ('100128', '1005 Main St', 'Mr. Hut requests a new Sarlacc pit', 'Order Notes for 1005 Main St.', false);
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete) values ('100129', '1006 Main St', 'Jetpack requires maintenance for Boba', 'Order Notes for 1006 Main St.', false);
INSERT into orders (orderNumber, address, description, orderNotes, isOrderComplete) values ('100130', '1007 Main St', 'Repairs needed, there are for Mr. Yoda', 'Order Notes for 1007 Main St.', false);


COMMIT;
