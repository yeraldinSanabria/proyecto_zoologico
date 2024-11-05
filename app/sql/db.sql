CREATE TABLE types (
  id bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  state  BOOLEAN NOT NULL DEFAULT true,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE species (
  id bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  state BOOLEAN NOT NULL DEFAULT true,
  type_id bigint(20) NOT NULL,
  habitats_id bigint(20) NOT NULL,
  diet_id bigint(20) NOT NULL,
  extinct BOOLEAN NOT NULL DEFAULT false,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE habitats (
  id bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  state BOOLEAN NOT NULL DEFAULT true,
  description  varchar(255) NOT NULL, 
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE diet (
  id bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  type varchar(255) NOT NULL,
  state BOOLEAN NOT NULL DEFAULT true,
  description  varchar(255) NOT NULL, 
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

	CREATE TABLE animals (
	  id bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	  name  varchar(255) NOT NULL,
	  state BOOLEAN NOT NULL DEFAULT true,
    species_id bigint(20) NOT NULL,
	  created_at datetime DEFAULT CURRENT_TIMESTAMP,
	  updated_at datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
	);
	

ALTER TABLE animals ADD FOREIGN KEY(species_id) REFERENCES species(id) ON DELETE CASCADE ON UPDATE CASCADE;
