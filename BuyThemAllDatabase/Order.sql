CREATE TABLE [dbo].[Order]
(
	[Id] INT IDENTITY PRIMARY KEY, 
    [Value] FLOAT NOT NULL,
	[RegistrationTime] DATE NOT NULL, 
    [RealizationDays] DATE NOT NULL, 
    [ClientId] INT NOT NULL,
	[AddressId] INT NOT NULL,
    [ShipmentTypeId] INT NOT NULL, 
    CONSTRAINT [FK_Order_Client] FOREIGN KEY ([ClientId]) REFERENCES [Client]([Id]), 
    CONSTRAINT [FK_Order_Address] FOREIGN KEY ([AddressId]) REFERENCES [Address]([Id]), 
    CONSTRAINT [FK_Order_ShipmentType] FOREIGN KEY ([ShipmentTypeId]) REFERENCES [ShipmentType]([Id]), 
)
