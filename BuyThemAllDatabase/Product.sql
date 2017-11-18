CREATE TABLE [dbo].[Product]
(
	[Id] INT IDENTITY PRIMARY KEY, 
    [Name] NVARCHAR(50) NOT NULL, 
    [Price] FLOAT NOT NULL,
	[Description] NVARCHAR(MAX) NOT NULL,
    [IsDiscounted] BIT NOT NULL, 
    [DiscountPercent] INT NOT NULL, 
    [ManufacturerId] INT NOT NULL, 
    [AvalibilityId] INT NOT NULL, 
    [CategoryId] INT NOT NULL, 
    [GraphicId] INT NOT NULL, 
    CONSTRAINT [FK_Product_Manufacturer] FOREIGN KEY ([ManufacturerId]) REFERENCES [Manufacturer]([Id]), 
    CONSTRAINT [FK_Product_Avalibility] FOREIGN KEY ([AvalibilityId]) REFERENCES [Avalibility]([Id]), 
    CONSTRAINT [FK_Product_Category] FOREIGN KEY ([CategoryId]) REFERENCES [Category]([Id]),
	CONSTRAINT [FK_Product_Graphic] FOREIGN KEY ([GraphicId]) REFERENCES [Graphic]([Id]),
)
