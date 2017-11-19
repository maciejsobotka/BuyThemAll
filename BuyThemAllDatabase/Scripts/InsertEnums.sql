USE [BuyThemAll]
GO

INSERT INTO [dbo].[Avalibility] ([Name], [Description], [Color])
     VALUES ('Dost�pny 24h', 'Wysy�ka do 24 godzin', 'GREEN'),
			('Dost�pny 48h', 'Wysy�ka do 48 godzin', 'YELLOW'),
			('Niedost�pny', 'Brak produktu w magazynie', 'RED')
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

INSERT INTO [dbo].[Graphic] ([Symbol], [Name])
     VALUES ('svg_1', 'Lataj�cy koliber'),
			('svg_2', 'Pe�na wst�ga'),
			('svg_3', 'Lewe no�yczki'),
			('svg_4', 'T�py n�'),
			('svg_5', 'Kozik'),
			('svg_6', 'Dewolucja'),
			('svg_7', 'Super butelka'),
			('svg_8', 'P�on�ca czacha'),
			('svg_9', 'W�siasty w�s'),
			('svg_10', 'Czytam i czytam'),
			('svg_11', 'Kwiatki i ptaszki'),
			('svg_12', 'Wielki kruk'),
			('svg_13', 'Ale smaczne'),
			('svg_14', 'Pe�nia �ycia'),
			('svg_15', 'Pusta wst�ga'),
			('svg_16', 'Pocztmistrz'),
			('svg_17', 'Nie do �mieci'),
			('svg_18', 'Weso�y prosiak'),
			('svg_19', 'Uwaga szk�o'),
			('svg_20', 'Do utylizacji')
GO
