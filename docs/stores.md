# Flux Stores

### PostStore

Holds all persisted post data.

##### Actions:
<!--
  Statuses should just be posts on your own timeline
- `receiveAllStatuses`
- `receiveSingleStatus`
- `removeStatus` -->
- `receiveAllPosts`
- `receiveSinglePost`
- `removePost`
- `receiveAllComments`
- `receiveSingleComment`
- `removeComment`
- `receiveAllLikes`
- `receiveSingleLike`
- `removeLike`

##### Listeners:
- `FeedIndex`

### FriendStore

Holds Friend information for a given timeline

##### Actions:
- `receiveAllFriendships`
- `receiveSingleFriendship`
- `removeFriendship`

##### Listeners:
- `FriendIndex`
- `FriendRequestButton

### NotificationStore

Holds all notification information

##### Actions:
- `receiveAllNotifications`
- `receiveSingleNotification`
- `editNotification`

##### Listeners:
- `NotificationButton`
- `NotificationIndex`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
