USE [BuyThemAll]
GO

INSERT INTO [dbo].[Product] ([Name], [Description], [Price], [IsDiscounted], [DiscountPercent], [ManufacturerId], [AvalibilityId], [CategoryId], [GraphicId])
     VALUES ('koszulka Happy Piglet',
	 'Niesamowita {0} z najlepszej jakoœci bawe³ny. Polecana przez miliony zadowolonych klientów. Nie mo¿na przegapiæ takiej okazji. Edycja limitowana. Tak, nied³ugo mo¿e byæ niedostêpna. Zegar tyka a koszulka czeka na w³aœciciela.',
	 250,
	 1,
	 30,
	 2,
	 1,
	 1,
	 1)
GO
