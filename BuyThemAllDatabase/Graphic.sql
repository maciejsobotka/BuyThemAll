﻿CREATE TABLE [dbo].[Graphic]
(
	[Id] INT IDENTITY PRIMARY KEY,
	[Symbol] NCHAR(10) NOT NULL UNIQUE, 
    [Name] NVARCHAR(50) NOT NULL
)