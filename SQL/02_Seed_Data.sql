USE [SnipIt];
GO


set identity_insert [Language] on
insert into [Language] ([Id], [Name]) 
values (1, 'C#'), (2, 'JavaScript'), (3, 'Html'), (4, 'Css')
set identity_insert [Language] off

set identity_insert [Tag] on
insert into [Tag] ([Id], [Name])
values (1, 'Save'), (2, 'Delete'), (3, 'Edit'), (4, 'Routing'), (5, 'importing/Using'), (6, 'Viewing'), (7, 'General Knowledge'), (8, 'Other')  ;
set identity_insert [Tag] off

set identity_insert [UserProfile] on
insert into UserProfile (Id, DisplayName, Email, CreateDateTime, IsActive, FirebaseUserId) values (1, 'Foo', 'foo@bar.com', '2020-04-23', 1, 'Kcq2adpN8zMEsaHiDAj9NWmuiiE2');
insert into UserProfile (Id, DisplayName, Email, CreateDateTime, IsActive, FirebaseUserId) values (2, 'rdo1', 'rdo1@timesonline.co.ukx', '2020-04-20', 2, 'lXkotHqw0oNjdCD2waFEnq51xeT2');
insert into UserProfile (Id, DisplayName, Email, CreateDateTime, IsActive, FirebaseUserId) values (3, 'aotton2', 'aotton2@ow.lyx', '2020-01-13', 1, 'wqhvgdjxjqkqecuridpvjtwpoacc');
insert into UserProfile (Id, DisplayName, Email, CreateDateTime, IsActive, FirebaseUserId) values (4, 'agrzeskowski3', 'agrzeskowski3@fc2.comx', '2020-04-12', 1, 'exsjcqvnhydjofznqmtvecekcgno');
insert into UserProfile (Id, DisplayName, Email, CreateDateTime, IsActive, FirebaseUserId) values (5, 'ryakushkev4', 'ryakushkev4@weibo.comx', '2019-08-16', 1, 'djwoicosfnhexpmmsnukgcsbnqod');
insert into UserProfile (Id, DisplayName, Email, CreateDateTime, IsActive, FirebaseUserId) values (6, 'tfigiovanni5', 'tfigiovanni5@baidu.comx', '2019-10-17', 2, 'xiybslspeizewvkixqubnqjlwamz');
insert into UserProfile (Id, DisplayName, Email, CreateDateTime, IsActive, FirebaseUserId) values (7, 'gteanby6', 'gteanby6@craigslist.orgx', '2019-08-29', 1, 'lzxmysyzqrmcwjzxsyrkbczhspup');
insert into UserProfile (Id, DisplayName, Email, CreateDateTime, IsActive, FirebaseUserId) values (8, 'cvanderweedenburg7', 'cvanderweedenburg7@wikimedia.orgx', '2019-11-02', 1, 'jqqyiksxkocmhphkylikwcehuvky');
insert into UserProfile (Id, DisplayName, Email, CreateDateTime, IsActive, FirebaseUserId) values (9, 'ecornfoot8', 'ecornfoot8@cargocollective.comx', '2020-02-17', 2, 'smzswoscvmfpvugpmgvkflihdmka');
insert into UserProfile (Id, DisplayName, Email, CreateDateTime, IsActive, FirebaseUserId) values (10, 'jmaruska9', 'jmaruska9@netscape.comx', '2020-02-09', 1, 'abcnibyohfhukxngaegjxxzionyt');
insert into UserProfile (Id, DisplayName, Email, CreateDateTime, IsActive, FirebaseUserId) values (11, 'rsandwith0', 'rsandwith0@google.com.brx', '2020-04-23', 1, 'jpuhyzaicsokywncxveknzowfpdu');
set identity_insert [UserProfile] off

set identity_insert [SnipIt] on
insert into Snipit (Id, Title, Caption, SnipIt, CreateDateTime, LanguageId, UserProfileId) values (1, 'morph front-end markets', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',  'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '2019-12-04', 1, 1);
insert into SnipIt (Id, Title, Caption, SnipIt, CreateDateTime, LanguageId, UserProfileId) values (2, 'orchestrate value-added communities',  'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',  'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '2019-08-01', 1, 1);
insert into SnipIt (Id, Title, Caption, SnipIt, CreateDateTime, LanguageId, UserProfileId) values (3, 'orchestrate value-added communities',  'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',  'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '2019-08-01', 1, 1);
insert into SnipIt (Id, Title, Caption, SnipIt, CreateDateTime, LanguageId, UserProfileId) values (3, 'orchestrate value-added communities',  'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',  'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '2019-08-01', 1, 1);
set identity_insert [Post] off

set identity_insert [Comment] on
insert into Comment (Id, SnipItId, UserProfileId, Content, CreateDateTime) values (1, 20, 4, 'Sed sagittis.', '2020-05-19');
insert into Comment (Id, SnipItId, UserProfileId, Content, CreateDateTime) values (2, 11, 8, 'Pellentesque viverra pede ac diam.', '2020-05-11');
insert into Comment (Id, SnipItId, UserProfileId, Content, CreateDateTime) values (3, 15, 8, '2020-07-01');
insert into Comment (Id, SnipItId, UserProfileId, Content, CreateDateTime) values (4, 5, 8, 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.', '2020-05-10');
insert into Comment (Id, SnipItId, UserProfileId, Content, CreateDateTime) values (5, 23, 8, '2020-05-27');
set identity_insert [Comment] off
