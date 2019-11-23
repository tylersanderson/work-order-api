BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('Tyler', 'tyler@gmail.com', 5, '2018-01-01');
INSERT into login (hash, email) values ('$2a$10$upz0hE5YgrSIiHOsRKwqeuPNGJ1A3GvPVTEvcK/mOxKay30YK8CRa', 'tyler@gmail.com');

COMMIT;