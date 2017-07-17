# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users/:id`
- `GET /api/users`
- `POST /api/users`
- `PATCH /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Photos

- `GET /api/photos`
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Follows --need a little help here

- `POST /api/users/follows`
- `DELETE /api/users/follows/:followingId`

### favorites
- `GET /api/photos/:id/likes` -Gets all the likes for a specific photo
- `PATCH /api/photos/:id/likes` -adds a like to a photo
- `DELETE /api/photos/:id/likes` -delete a like from a photo
