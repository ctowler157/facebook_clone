#Fakebook
Fakebook is a web application built with Ruby on Rails, PostgreSQL, and React.js and is modeled on Facebook.com's feel and functionality.

View it live at http://fakebookapp.xyz

###Main Functionality:
* Create/Sign in to user accounts (with fully functional one-click guest sign-in)
* Create/Edit/Delete posts and statuses
* Upload Profile and Cover photos
* Add and remove friends

###Additional Features:
* React.js communicating with a RESTful json API through custom AJAX requests
* Custom authentication via Rails

###Walkthrough

Visiting http://fakebookapp.xyz will take you to the sign-up/sign-in page if you aren't already signed in.
<img src="app/assets/images/00_welcome_page.png" alt="" style="width: 500px; height: auto"/>

You can either log in at the top with an existing account, create an account using the form, or click the guest sign-in button.
<img src="app/assets/images/01_sign_in_as_guest.png" alt="" style="width: 200px; height: auto"/>

Successful login will take you to your main feed, where you can view statuses and posts in reverse-chronological order.
<img src="app/assets/images/03_main_feed.png" alt="" style="width: 500px; height: auto"/>

From here, you can easily use the form to create a new status update.
<img src="app/assets/images/04_write_post.png" alt="" style="width: 500px; height: auto"/>

Your new post will appear without needing to refresh the page!
<img src="app/assets/images/05_posted.png" alt="" style="width: 500px; height: auto"/>

Clicking the arrow in the top-right corner will open your post options menu.
<img src="app/assets/images/06_post_options.png" alt="" style="width: 500px; height: auto"/>

Clicking the "Edit post" option will open a modal editing window.
<img src="app/assets/images/07_edit_post.png" alt="" style="width: 500px; height: auto"/>

To delete the post, you can click the delete option, and it will be removed without needing to refresh.
<img src="app/assets/images/08_delete_post.png" alt="" style="width: 300px; height: auto"/>
<img src="app/assets/images/09_post_deleted.png" alt="" style="width: 300px; height: auto"/>

At the top of the screen, you may notice a notifications bar.
<img src="app/assets/images/10_notifications_bar.png" alt=""/>

If you have notifications, clicking the button will cause a drop-down to appear!
<img src="app/assets/images/11_notifications_dropdown.png" alt="" style="width: 500px; height: auto"/>

After confirming or denying any requests, the number on the button will continue to reflect how many requests you have.
<img src="app/assets/images/12_number_reflects.png" alt=""/>

Clicking your name on a post you made or on the button on your nav bar will take you to your timeline.
<img src="app/assets/images/13_timeline.png" alt="" style="width: 500px; height: auto"/>

You have access to all the same post features here as well!
<img src="app/assets/images/14_timeline_post.png" alt="" style="width: 500px; height: auto"/>

In the left column of your timeline, you will see a "Friends" box.
<img src="app/assets/images/17_friends_box.png" alt="" style="width: 500px; height: auto"/>

This box will automatically update and resize to include any new friends you may accept.
<img src="app/assets/images/18_friends_box_updated.png" alt="" style="width: 500px; height: auto"/>

Hovering over the bottom of your profile photo will reveal the following button:
<img src="app/assets/images/19_update_profile.png" alt="" style="width: 500px; height: auto"/>

Clicking this will open a file upload menu, which will allow you to change your profile picture.
<img src="app/assets/images/20_file_upload_menu.png" alt="" style="width: 500px; height: auto"/>

The same option is available for your cover photo!
<img src="app/assets/images/22_cover_photo_too.png" alt="" style="width: 500px; height: auto"/>
