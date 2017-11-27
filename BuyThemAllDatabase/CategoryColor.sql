CREATE TABLE [dbo].[CategoryColor]
(
	[Id] INT IDENTITY PRIMARY KEY,
	[Code] NVARCHAR(10) NOT NULL,
    [Name] NVARCHAR(50) NOT NULL,
	[CategoryId] INT NOT NULL, 
    CONSTRAINT [FK_CategoryColor_Cateogry] FOREIGN KEY ([CategoryId]) REFERENCES [Category]([Id])
)
