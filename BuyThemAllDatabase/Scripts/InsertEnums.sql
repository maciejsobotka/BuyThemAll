USE [BuyThemAll]
GO

INSERT INTO [dbo].[Avalibility] ([Name], [Description])
     VALUES ('Dost�pny 24h', 'Wysy�ka do 24 godzin'),
			('Dost�pny 48h', 'Wysy�ka do 48 godzin'),
			('Niedost�pny', 'Brak produktu w magazynie')
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

INSERT INTO [dbo].[Graphic] ([Symbol])
     VALUES ('g1'),
			('g2'),
			('g3'),
			('g4'),
			('g5'),
			('g6'),
			('g7'),
			('g8')
GO
