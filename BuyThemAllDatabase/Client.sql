﻿CREATE TABLE [dbo].[Client]
(
	[Id] INT IDENTITY PRIMARY KEY, 
    [Name] NVARCHAR(50) NOT NULL, 
    [Surname] NVARCHAR(50) NOT NULL, 
    [Email] NVARCHAR(MAX) NOT NULL, 
    [Phone] NCHAR(10) NOT NULL 
)
