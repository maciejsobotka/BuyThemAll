﻿CREATE TABLE [dbo].[Category]
(
	[Id] INT IDENTITY PRIMARY KEY,
	[Code] NVARCHAR(10) NOT NULL UNIQUE,
    [Name] NVARCHAR(50) NOT NULL UNIQUE
)
