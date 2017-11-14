USE [BuyThemAll]
GO

INSERT INTO [dbo].[Avalibility] ([Name], [Description])
     VALUES ('Dostêpny 24h', 'Wysy³ka do 24 godzin'),
			('Dostêpny 48h', 'Wysy³ka do 48 godzin'),
			('Niedostêpny', 'Brak produktu w magazynie')
GO

INSERT INTO [dbo].[Category] ([Name])
     VALUES ('Koszulki'),
			('Kubki'),
			('Plakaty')
GO

INSERT INTO [dbo].[Manufacturer] ([Name])
     VALUES ('Fogliolia'),
			('Zacruibos'),
			('Ruchadus'),
			('Iostone'),
			('Kiunus'),
			('Payama'),
			('Strodarus'),
			('Grofuruta')
GO

