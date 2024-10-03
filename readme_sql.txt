select * from auditdb.user_details;
ALTER TABLE auditdb.user_details add password VARCHAR(255) NOT NULL;
drop table auditdb.user_details;
CREATE TABLE auditdb.user_details (name VARCHAR(255) NOT NULL, mail_id VARCHAR(255) NOT NULL UNIQUE, das_id VARCHAR(255) PRIMARY KEY, password VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
INSERT INTO auditdb.user_details (name, mail_id, das_id, password) VALUES ('mugi', 'mugeshmac@gmail.com', 'mugi037', '1234');
INSERT INTO auditdb.user_details (name, mail_id, das_id, password) VALUES ('Mugesh Ganesan', 'mugesh.ganesan@eviden.com', 'A849496', 'A849496');
