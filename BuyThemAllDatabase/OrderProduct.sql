CREATE TABLE [dbo].[OrderProduct]
(
	[Id] INT IDENTITY PRIMARY KEY,
	[Count] INT NOT NULL DEFAULT 1, 
    [OrderId] INT NOT NULL, 
    [ProductId] INT NOT NULL,
	[ProductSizeId] INT NOT NULL,
	[ProductColorId] INT NOT NULL
    CONSTRAINT [FK_OrderProduct_Order] FOREIGN KEY ([OrderId]) REFERENCES [Order]([Id]), 
    CONSTRAINT [FK_OrderProduct_Product] FOREIGN KEY ([ProductId]) REFERENCES [Product]([Id]), 
    CONSTRAINT [FK_OrderProduct_CategorySize] FOREIGN KEY ([ProductSizeId]) REFERENCES [CategorySize]([Id]), 
    CONSTRAINT [FK_OrderProduct_CategoryColor] FOREIGN KEY ([ProductColorId]) REFERENCES [CategoryColor]([Id])
)
