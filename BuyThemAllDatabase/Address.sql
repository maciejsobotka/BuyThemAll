CREATE TABLE [dbo].[Address]
(
	[Id] INT IDENTITY PRIMARY KEY, 
    [Street] NVARCHAR(50) NULL, 
    [HouseNo] INT NOT NULL, 
    [ApartmentNo] INT NOT NULL, 
    [City] NVARCHAR(50) NOT NULL, 
    [VoivodeshipId] INT NULL, 
    CONSTRAINT [FK_Address_Voivodeship] FOREIGN KEY ([VoivodeshipId]) REFERENCES [Voivodeship]([Id]) 
)