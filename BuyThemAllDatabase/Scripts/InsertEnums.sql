USE [BuyThemAll]
GO

INSERT INTO [dbo].[Avalibility] ([Name], [Description], [Color])
     VALUES ('Dostêpny 24h', 'Wysy³ka do 24 godzin', 'GREEN'),
			('Dostêpny 48h', 'Wysy³ka do 48 godzin', 'YELLOW'),
			('Niedostêpny', 'Brak produktu w magazynie', 'RED')
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
     VALUES ('svg_1', 'Lataj¹cy koliber'),
			('svg_2', 'Pe³na wstêga'),
			('svg_3', 'Lewe no¿yczki'),
			('svg_4', 'Têpy nó¿'),
			('svg_5', 'Kozik'),
			('svg_6', 'Dewolucja'),
			('svg_7', 'Super butelka'),
			('svg_8', 'P³on¹ca czacha'),
			('svg_9', 'W¹siasty w¹s'),
			('svg_10', 'Czytam i czytam'),
			('svg_11', 'Kwiatki i ptaszki'),
			('svg_12', 'Wielki kruk'),
			('svg_13', 'Ale smaczne'),
			('svg_14', 'Pe³nia ¿ycia'),
			('svg_15', 'Pusta wstêga'),
			('svg_16', 'Pocztmistrz'),
			('svg_17', 'Nie do œmieci'),
			('svg_18', 'Weso³y prosiak'),
			('svg_19', 'Uwaga szk³o'),
			('svg_20', 'Do utylizacji')
GO
