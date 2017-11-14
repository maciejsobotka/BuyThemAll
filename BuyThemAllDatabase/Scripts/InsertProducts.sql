USE [BuyThemAll]
GO

INSERT INTO [dbo].[Product] ([Name], [Price], [IsDiscounted], [DiscountPercent], [ManufacturerId], [AvalibilityId], [CategoryId])
     VALUES ('Skull T' , 250 , 1 , 30, 2, 1, 1)
GO
