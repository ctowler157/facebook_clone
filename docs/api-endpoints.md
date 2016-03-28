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

### Statuses

- `GET /api/statuses`
- `POST /api/statuses`
- `GET /api/statuses/:id`
- `PATCH /api/statuses/:id`
- `DELETE /api/statuses/:id`

### Friends

- `GET /api/friends`
- `GET /api/friends/:id`
- `DELETE /api/friends/:id`
- `GET /api/notebooks/:id/notes`
  - index of all friends for a user
