﻿CREATE TABLE [dbo].[Avalibility]
(
	[Id] INT IDENTITY PRIMARY KEY, 
    [Name] NVARCHAR(50) NOT NULL UNIQUE, 
    [Description] NVARCHAR(MAX) NOT NULL
)
