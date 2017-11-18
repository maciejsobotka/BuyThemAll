USE [BuyThemAll]
GO

INSERT INTO [dbo].[Avalibility] ([Name], [Description])
     VALUES ('Dostêpny 24h', 'Wysy³ka do 24 godzin'),
			('Dostêpny 48h', 'Wysy³ka do 48 godzin'),
			('Niedostêpny', 'Brak produktu w magazynie')
GO

INSERT INTO [dbo].[Category] ([Code], [Name])
     VALUES ('T-SHIRT', 'Koszulki'),
			('MUG', 'Kubki'),
			('POSTER', 'Plakaty')
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

INSERT INTO [dbo].[Graphic] ([Symbol])
     VALUES ('svg_1'),
			('svg_2'),
			('svg_3'),
			('svg_4'),
			('svg_5'),
			('svg_6'),
			('svg_7'),
			('svg_8'),
			('svg_9'),
			('svg_10'),
			('svg_11'),
			('svg_12'),
			('svg_13'),
			('svg_14'),
			('svg_15'),
			('svg_16'),
			('svg_17'),
			('svg_18'),
			('svg_19'),
			('svg_20')
GO
