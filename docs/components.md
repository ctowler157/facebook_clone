## Component Hierarchy

* `App`
  * `Header`
    * `Nav`
      * `Search`
        * `SearchIndex`
          * `SearchIndexItem`
    * `Nav-ul`
      * `FriendRequestButton`
        * `FriendRequestIndex`
          * `FriendRequestIndexItem`
      * `MessageButton`
        * `ConversationIndex`
          * `ConversationIndexItem`
      * `NotificationButton`
        * `NotificationIndex`
          * `NotificationIndexItem`
  * `Main`
    * `Home`
      * `LeftSidebarNavigation`
        * Empty div, filling will be bonus
      * `Feed`
        * `FeedIndex`
          * `FeedForm`
          * `FeedIndexItem`
            * `LikeButton`
            * `Comment`
              * `CommentForm`
              * `CommentIndex`
                * `CommentIndexItem`
                  * `LikeButton`
                  * `Reply` - bonus
                    * `CommentForm`
    * `Timeline`
      * `TimelineHeader`
        * `ProfilePicture`
        * `Profile-header-nav`
          * `FriendshipButton`
          * `Button`
          * `Button`
      * `TimelineSidebar`
        * `BioPreview`
        * `FriendsPreview`
      * `TimelineDisplay`
        * `TimelineTabs`
          * `AboutTab`
            * `About`
          * `PhotosTab` -Bonus
          * `FeedTab`
            * `Feed`
          * `FriendsTab`
            * `FriendsIndex`
              * `FriendsIndexItem`
          * `MoreTab`
            * `MoreIndex`
              * `MoreIndexItem`
