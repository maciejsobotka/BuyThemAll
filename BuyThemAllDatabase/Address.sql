CREATE TABLE [dbo].[Address]
(
	[Id] INT IDENTITY PRIMARY KEY, 
    [AddressLine] NVARCHAR(MAX) NOT NULL, 
    [City] NVARCHAR(50) NOT NULL,
	[ZipCode] NVARCHAR(6) NOT NULL,
    [VoivodeshipId] INT NOT NULL, 
    [ClientId] INT NOT NULL, 
    CONSTRAINT [FK_Address_Voivodeship] FOREIGN KEY ([VoivodeshipId]) REFERENCES [Voivodeship]([Id]), 
    CONSTRAINT [FK_Address_Client] FOREIGN KEY ([ClientId]) REFERENCES [Client]([Id]) 
)