# Schema Information

## bios
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
first_name  | string    | not null
last_name   | string    | not null

## comments
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
commentable_id    | integer   | not null, foreign key (references commentable), indexed
author_id         | integer   | not null, foreign key (references users), indexed
commentable_type  | string    | not null
body              | string    | not null

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
requester_id| integer   | not null, foreign key (references users), indexed
requested_id| integer   | not null, foreign key (references users), indexed
status      | string    | not null

## followables
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
followable_id  | integer   | not null, foreign key (references followable), indexed
user_id        | integer   | not null, foreign key (references users), indexed
followable_type| string    | not null

## likes
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
likeable_id    | integer   | not null, foreign key (references likeable), indexed
user_id        | integer   | not null, foreign key (references users), indexed
likeable_type  | string    | not null
body           | string    | not null

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
timeline_id | integer   | not null, foreign key (references users), indexed

<!--
Statuses should just be posts on your own timeline.
## statuses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed -->

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
