select * from auditdb.user_details;
ALTER TABLE auditdb.user_details add password VARCHAR(255) NOT NULL;
drop table auditdb.user_details;
CREATE TABLE auditdb.user_details (name VARCHAR(255) NOT NULL, mail_id VARCHAR(255) NOT NULL UNIQUE, das_id VARCHAR(255) PRIMARY KEY, password VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
INSERT INTO auditdb.user_details (name, mail_id, das_id, password) VALUES ('mugi', 'mugeshmac@gmail.com', 'mugi037', '1234');
INSERT INTO auditdb.user_details (name, mail_id, das_id, password) VALUES ('Mugesh Ganesan', 'mugesh.ganesan@eviden.com', 'A849496', 'A849496');




CREATE TABLE auditdb.sample_data (number INT UNSIGNED PRIMARY KEY, source TEXT, start_time DATETIME, user_dn VARCHAR(255), user_ip CHAR(30), op_name VARCHAR(255), entry_dn VARCHAR(255), aud_attributes VARCHAR(255), INDEX (source(255)), INDEX (start_time), INDEX (user_dn), INDEX (user_ip), INDEX (op_name), INDEX (entry_dn), INDEX (aud_attributes)) ENGINE=InnoDB;
select * from auditdb.sample_data;

INSERT INTO auditdb.sample_data (number, source, start_time, user_dn, user_ip, op_name, entry_dn, aud_attributes) VALUES (3, 'Identity', '2024-10-01 10:03:49', 'cn=Uchiha Itachi,cn=EntitlementAdmins,cn=EN-Entitlement,dxmC=Users,dxmC=DirXmetahub', '192.168.1.2', 'ADD', 'cn=user8101@mitel.com,ou=gaUsers,ou=getaccess,o=siemens', '|add;dxrLockLeaseTime=20241047336009.000Z|add;dxrLockID=uid-92545301--6441');
INSERT INTO auditdb.sample_data (number, source, start_time, user_dn, user_ip, op_name, entry_dn, aud_attributes) VALUES (4, 'Identity', '2024-10-01 16:16:56', 'cn=Genard Didier,cn=EntitlementAdmins,cn=EN-Entitlement,dxmC=Users,dxmC=DirXmetahub', '192.168.1.2', 'ADD', 'cn=user1565@mitel.com,ou=gaUsers,ou=getaccess,o=siemens', '|add;dxrLockLeaseTime=20241092155204.000Z|add;dxrLockID=uid-83778741--2242');
