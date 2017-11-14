CREATE TABLE [dbo].[ClientAddress]
(
	[Id] INT IDENTITY PRIMARY KEY, 
    [ClientId] INT NOT NULL, 
    [AddressId] INT NOT NULL, 
    CONSTRAINT [FK_ClientAddress_Clinet] FOREIGN KEY ([ClientId]) REFERENCES [Client]([Id]), 
    CONSTRAINT [FK_ClientAddress_Address] FOREIGN KEY ([AddressId]) REFERENCES [Address]([Id])
)
