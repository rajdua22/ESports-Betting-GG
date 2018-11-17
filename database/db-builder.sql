USE scope_f18_esports_betting;

CREATE TABLE user(
	user_id INT(11) PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL
);