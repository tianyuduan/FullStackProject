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

- `GET /api/photos` Can take tagId
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Tags

- `GET /api/tags` can take photoId
- `GET /api/tags/:id`
- `POST /api/tags` user can make tags

### Likes
- `GET /api/photos/:id/likes` -Gets all the likes for a specific photo
- `POST /api/photos/:id/likes` - causes current_user to like the photo
- `DELETE /api/photos/:id/likes` -delete a like from a photo

### Follows *Bonus*

- `POST /api/follows`
- `GET /api/follows`
- `DELETE /api/follows/:id`
