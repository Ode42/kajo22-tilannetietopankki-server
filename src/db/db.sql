CREATE DATABASE kajo22tilannetietopankki;

CREATE TABLE tilannetiedot(
    tieto_id SERIAL PRIMARY KEY,
    kuvaus VARCHAR(500) NOT NULL,
    tieto_time VARCHAR(100) NOT NULL,
    lahettaja VARCHAR(255),
    label VARCHAR(50)
);