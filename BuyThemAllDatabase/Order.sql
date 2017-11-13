CREATE TABLE [dbo].[Order]
(
	[Id] INT IDENTITY PRIMARY KEY, 
    [Value] FLOAT NOT NULL,
	[RegistrationTime] DATE NOT NULL, 
    [RealizationTime] DATE NOT NULL, 
    [NoOfProducts] INT NOT NULL, 
    [AddressId] INT NOT NULL,
    [ClientId] INT NOT NULL, 
    CONSTRAINT [FK_Order_Client] FOREIGN KEY ([ClientId]) REFERENCES [Client]([Id]), 
    CONSTRAINT [FK_Order_Address] FOREIGN KEY ([AddressId]) REFERENCES [Address]([Id]), 
)
