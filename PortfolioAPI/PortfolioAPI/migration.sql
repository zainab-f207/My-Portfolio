IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [ContactMessages] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(max) NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    [Message] nvarchar(max) NOT NULL,
    [SentAt] datetime2 NOT NULL,
    CONSTRAINT [PK_ContactMessages] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [ProjectViews] (
    [Id] int NOT NULL IDENTITY,
    [Slug] nvarchar(450) NOT NULL,
    [Views] int NOT NULL,
    CONSTRAINT [PK_ProjectViews] PRIMARY KEY ([Id])
);
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Slug', N'Views') AND [object_id] = OBJECT_ID(N'[ProjectViews]'))
    SET IDENTITY_INSERT [ProjectViews] ON;
INSERT INTO [ProjectViews] ([Id], [Slug], [Views])
VALUES (1, N'nigehbaan', 0),
(2, N'resumecraft-pro', 0),
(3, N'safevision', 0);
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Slug', N'Views') AND [object_id] = OBJECT_ID(N'[ProjectViews]'))
    SET IDENTITY_INSERT [ProjectViews] OFF;
GO

CREATE UNIQUE INDEX [IX_ProjectViews_Slug] ON [ProjectViews] ([Slug]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20260825083330_InitialCreate', N'8.0.30');
GO

COMMIT;
GO

