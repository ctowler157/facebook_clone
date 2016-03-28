# #TBD#

[Heroku link]https://evening-headland-97216.herokuapp.com/

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

#TBD# is a web application inspired by facebook built using Ruby on Rails
and React.js. #TBD# allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out

- [ ] Create, read, and edit a profile/bio
- [ ] Upload an image file as a profile picture

- [ ] Create, read, edit, and delete statuses

- [ ] Search for other users by name

- [ ] Request a friendship with another user (creates pending friendship)
- [ ] Approve or reject pending friendship requests (reject deletes friendship)
- [ ] View a friend's bio and a list of that friend's statuses (timeline)
- [ ] Create, read, edit, and delete posts on that friend's timeline

- [ ] View a feed of the most recent updates within their circle of friends

- [ ] Create, read, edit, and delete comments on statuses and profile pictures
- [ ] "Like" statuses, comments, and profile pictures

- [ ] Users receive notifications whenever someone:
      - comments on one of their statuses
      - likes one of their statuses
      - comments on a status that they have commented on
      - likes one of their comments
      - accepts their friend request
      - sends them a friend request

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Status Model, API, and basic APIUtil (1 day)

**Objective:** Statuses can be created, read, edited and destroyed through
the API.  Statuses belong to the user that created them.

- [ ] create `Status` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for statuses (`StatusesController`)
- [ ] jBuilder views for Feed
- [ ] jBuilder views for statuses (reusable partial)
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the APIs
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1 days)

**Objective:** Statuses can be created, read, edited and destroyed with the
user interface.  News feed is an index of the users statuses.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each status component, building out the flux loop as needed.
  - [ ] `StatusIndex`
  - [ ] `StatusIndexItem`
  - [ ] `StatusForm`
- [ ] save Statuses to the DB when the form loses focus or is left idle
  after editing.  ##Ask about this##

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Timeline model and Profile Picture model (1 day)

**Objective:** Timeline displays a users profile picture, biographical info, and
an index of their statuses

- [ ] create `Timeline` model
- [ ] create `ProfilePicture` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for timeline bio information
- [ ] CRUD API for notes (`StatusesController`)
- [ ] jBuilder views for timeline
- [ ] jBuilder views for bio information
- [ ] Build out Flux loops and components for the Timeline, bio, and picture

- [ ] Use CSS to style new views

### Phase 6: Friendships (1.5 days)

**Objective:** Friendships can be created.  When approved, users can view each
others' timelines.  A users' friends' statuses also appear in their News feed.
A users' timeline also includes a friends total and an index of a users friend

- [ ] create `Friendship` model and join table
- build out API, Flux loop, and components for:
  - [ ] requesting friendship
  - [ ] approving friendship
  - [ ] friends index
  - [ ] posting on a friend's wall
  - [ ] searching for friends
- [ ] Update timeline to include friends index
- [ ] Update news feed to include friends' statuses
- [ ] Style new elements

### Phase 7: Likes, Comments, and Notifications (1.5 days)

**objective:** Users can comment on a status, post, or picture.  Users can like
statuses, posts, pictures, and comments.  Users receive notifications whenever one
of their statuses, comments, posts, or pictures receives a comment or new like.
In addition, if a user has commented on another users commentable and someone else
comments on the same commentable, the user receives a notifications as well

- [ ] Create Comment Model and polymorphic join table
- [ ] Create Like Model and polymorphic join table
- [ ] Build out API, Flux loop, and components for:
  - [ ] Comment CRUD functionality
  - [ ] Like CRUD functionality

- [ ] Create FollowedItems model and polymorphic join table
- [ ] Create Notifications model (belongs to a user)
- [ ] Build out API, Flux loop, and components for:
  - [ ] Notifications index
  - [ ] Deleting FollowedItems
- [ ] Update Timeline to include notifications


### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] News feed also contains events (friendships, commented-ons, etc)

- [ ] Upload photos
- [ ] Create, edit, and delete tags on photos
- [ ] Photos a user was tagged in appear on their profile

- [ ] Create and send messages to other users
- [ ] Read, delete, and reply to messages from other users

- [ ] Search bar autocompletes with existing users

- [ ] Suggest friends based on mutual friends
- [ ] Suggest friends based on bio info

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
