USE [BuyThemAll]
GO

INSERT INTO [dbo].[Product] ([Name], [Description], [Price], [IsDiscounted], [DiscountPercent], [ManufacturerId], [AvalibilityId], [CategoryId], [GraphicId])
     VALUES ('koszulka Happy Piglet',
	 'Niesamowita {0} z najlepszej jako�ci bawe�ny. Polecana przez miliony zadowolonych klient�w. Nie mo�na przegapi� takiej okazji. Edycja limitowana. Tak, nied�ugo mo�e by� niedost�pna. Zegar tyka a koszulka czeka na w�a�ciciela.',
	 250,
	 1,
	 30,
	 2,
	 1,
	 1,
	 1)
GO
