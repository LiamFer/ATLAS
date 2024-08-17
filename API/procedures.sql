/* Aqui estão todas as Procedures que eu criei no SQL Server listadas pra conseguir rodar a Aplicação */

/* Procedure para inserir um novo usuário no banco */
CREATE PROCEDURE insertNewReader
    @name varchar(35),
    @email varchar(30),
    @password varchar(30)
AS
BEGIN
    INSERT INTO readers (name, email, password)
    VALUES (@name, @email, @password);
END
GO