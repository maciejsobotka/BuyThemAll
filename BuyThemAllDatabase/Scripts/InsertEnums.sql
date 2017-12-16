USE [BuyThemAll]
GO

INSERT INTO [dbo].[Avalibility] ([Name], [Description], [Color])
     VALUES ('Dost�pny 24h', 'Wysy�ka do 24 godzin', 'GREEN'),
			('Dost�pny 48h', 'Wysy�ka do 48 godzin', 'YELLOW'),
			('Dost�pny 72h', 'Wysy�ka do 72 godzin', 'ORANGE')
GO

INSERT INTO [dbo].[Category] ([Code], [Name])
     VALUES ('T-SHIRT', 'Koszulki'),
			('MUG', 'Kubki'),
			('POSTER', 'Plakaty')
GO

INSERT INTO [dbo].[CategoryColor] ([Code] ,[Name] ,[CategoryId])
     VALUES ('W','WHITE',(SELECT Id FROM [dbo].[Category] WHERE Code = 'T-SHIRT')),
			('B','BLACK',(SELECT Id FROM [dbo].[Category] WHERE Code = 'T-SHIRT')),
			('P','PINK',(SELECT Id FROM [dbo].[Category] WHERE Code = 'T-SHIRT')),
			('W','WHITE',(SELECT Id FROM [dbo].[Category] WHERE Code = 'MUG')),
			('B','BLACK',(SELECT Id FROM [dbo].[Category] WHERE Code = 'MUG')),
			('R','RED',(SELECT Id FROM [dbo].[Category] WHERE Code = 'MUG')),
			('W','WHITE',(SELECT Id FROM [dbo].[Category] WHERE Code = 'POSTER')),
			('B','BLACK',(SELECT Id FROM [dbo].[Category] WHERE Code = 'POSTER'))
GO

INSERT INTO [dbo].[CategorySize] ([Code], [Description], [CategoryId])
     VALUES ('S','34-36',(SELECT Id FROM [dbo].[Category] WHERE Code = 'T-SHIRT')),
			('M','38-40',(SELECT Id FROM [dbo].[Category] WHERE Code = 'T-SHIRT')),
			('L','42-44',(SELECT Id FROM [dbo].[Category] WHERE Code = 'T-SHIRT')),
			('XL','46-48',(SELECT Id FROM [dbo].[Category] WHERE Code = 'T-SHIRT')),
			('M','330 ml',(SELECT Id FROM [dbo].[Category] WHERE Code = 'MUG')),
			('L','440 ml',(SELECT Id FROM [dbo].[Category] WHERE Code = 'MUG')),
			('XL','550 ml',(SELECT Id FROM [dbo].[Category] WHERE Code = 'MUG')),
			('A4','210�297 mm',(SELECT Id FROM [dbo].[Category] WHERE Code = 'POSTER')),
			('A3','297x420 mm',(SELECT Id FROM [dbo].[Category] WHERE Code = 'POSTER')),
			('A2','420x594 mm',(SELECT Id FROM [dbo].[Category] WHERE Code = 'POSTER'))
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

INSERT INTO [dbo].[Voivodeship] ([Symbol], [Name])
     VALUES ('D', 'dolno�l�skie'),
			('C', 'kujawsko-pomorskie'),
			('L', 'lubelskie'),
			('F', 'lubuskie'),
			('E', '��dzkie'),
			('K', 'ma�opolskie'),
			('W', 'mazowieckie'),
			('O', 'opolskie'),
			('R', 'podkarpackie'),
			('B', 'podlaskie'),
			('G', 'pomorskie'),
			('S', '�l�skie'),
			('T', '�wi�tokrzyskie'),
			('N', 'warmi�sko-mazurskie'),
			('P', 'wielkopolskie'),
			('Z', 'zachodniopomorskie')
GO

INSERT INTO [dbo].[ShipmentType] ([Code], [Name], [Price], [Description])
     VALUES ('P-PL', 'Poczta Polska', 9.99, 'Od 2 - 5 dni roboczych'),
			('CR', 'Kurier', 13.99, 'Od 1 - 2 dni roboczych'),
			('P-LOCK', 'Paczkomat', 7.99, 'Od 1 - 2 dni roboczych')
GO
