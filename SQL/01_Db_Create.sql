CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [FireBaseUserId] nvarchar (28) NOT NULL,
  [DisplayName] nvarchar(255) NOT NULL,
  [Email] nvarchar(255) NOT NULL,
  [CreateDateTime] datetime NOT NULL,
  [IsActive] bit NOT NULL DEFAULT (1)
)
GO

CREATE TABLE [SnipIt] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Title] nvarchar(255) NOT NULL,
  [Caption] nvarchar(255),
  [Snip] nvarchar(255) NOT NULL,
  [LanguageId] int,
  [UserProfileId] int NOT NULL,
  [CreateDateTime] datetime NOT NULL
)
GO

CREATE TABLE [Tag] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [SnipItTag] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [SnipItId] int NOT NULL,
  [TagId] int NOT NULL
)
GO

CREATE TABLE [Language] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Comment] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [SnipItId] int NOT NULL,
  [UserProfileId] int NOT NULL,
  [Content] nvarchar(255) NOT NULL,
  [CreateDateTime] datetime NOT NULL
)
GO

CREATE TABLE [Favorite] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [SnipItId] int NOT NULL,
  [UserProfileId] int NOT NULL
)
GO

ALTER TABLE [SnipIt] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [SnipIt] ADD FOREIGN KEY ([LanguageId]) REFERENCES [Language] ([Id])
GO

ALTER TABLE [SnipItTag] ADD FOREIGN KEY ([SnipItId]) REFERENCES [SnipIt] ([Id]) ON DELETE CASCADE
GO

ALTER TABLE [SnipItTag] ADD FOREIGN KEY ([TagId]) REFERENCES [Tag] ([Id])
GO

ALTER TABLE [Comment] ADD FOREIGN KEY ([SnipItId]) REFERENCES [SnipIt] ([Id]) ON DELETE CASCADE
GO

ALTER TABLE [Comment] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Favorite] ADD FOREIGN KEY ([SnipItId]) REFERENCES [SnipIt] ([Id]) ON DELETE CASCADE
GO

ALTER TABLE [Favorite] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO
