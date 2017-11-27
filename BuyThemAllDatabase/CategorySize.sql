CREATE TABLE [dbo].[CategorySize]
(
	[Id] INT IDENTITY PRIMARY KEY,
	[Code] NVARCHAR(10) NOT NULL,
    [Description] NVARCHAR(50) NOT NULL,
	[CategoryId] INT NOT NULL,
	CONSTRAINT [FK_CategorySize_Cateogry] FOREIGN KEY ([CategoryId]) REFERENCES [Category]([Id])
)
