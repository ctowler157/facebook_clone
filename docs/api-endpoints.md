# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`


### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

<!--
Statuses are going to be posts on your own timeline
### Statuses

- `GET /api/statuses`
- `POST /api/statuses`
- `GET /api/statuses/:id`
- `PATCH /api/statuses/:id`
- `DELETE /api/statuses/:id` -->

### Friendships
- `GET /api/users/:id/friendships/`
- `POST /api/friendships/`
- `PATCH /api/friendships/:id`
- `DELETE /api/friendships/:id`

### Posts
- `GET /api/users/:timeline_id/posts`
- `POST /api/users/:timeline_id/posts`
- `DELETE /api/posts/:id`

### Comments
- `GET /api/statuses/:commentable_id/comments`
- `GET /api/posts/:commentable_id/comments`
- `GET /api/comments/:commentable_id/comments`
- `POST /api/comments`
- `DELETE /api/comments/`

### Likes
- `GET /api/statuses/:likeable_id/likes`
- `GET /api/posts/:likeable_id/likes`
- `GET /api/comments/:likeable_id/likes`
- `POST /api/likes`
- `DELETE /api/likes`

### Friends

- `GET /api/:user_id/friends`
- `GET /api/:user_id/friends/:id`
- `DELETE /api/:user_id/friends/:id`


### Notifications
- `GET /api/notifications`
- `PATCH /api/notifications`
