﻿CREATE TABLE [dbo].[Voivodeship]
(
	[Id] INT IDENTITY PRIMARY KEY,
	[Symbol] NVARCHAR(1) UNIQUE NOT NULL,
    [Name] NVARCHAR(50) UNIQUE NOT NULL
)
