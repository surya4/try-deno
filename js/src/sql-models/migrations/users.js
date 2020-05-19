export const usersSchema = `
  CREATE TABLE IF NOT EXISTS users (
      id int(11) NOT NULL AUTO_INCREMENT,
      name varchar(100),
      email varchar(100) NOT NULL,
      password varchar(100) NOT NULL,
      age int(3) NOT NULL,
      created_at timestamp not null default current_timestamp,
      updated_at timestamp not null default current_timestamp,
      PRIMARY KEY (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`
