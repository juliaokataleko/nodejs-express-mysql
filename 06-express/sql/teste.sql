CREATE TABLE usuarios(
    nome VARCHAR(200),
    email VARCHAR(200),
    idade INT(11)
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "Julião Kataleko",
    "juliofeli78@gmail.com",
    27
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "Teresa Kataleko",
    "teresakataleko@gmail.com",
    24
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "Paula Kataleko",
    "paulakataleko@gmail.com",
    37
);

DELETE FROM usuarios WHERE idade = 27;