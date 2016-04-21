# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all

chris = User.create!(
  email: "chrisEmail", password: "123456",
  first_name: "Chris", last_name: "Towler", birthday: "April 1 2016"
  )
gigi = User.create!(
  email: "gigiEmail", password: "123456",
  first_name: "Gigi", last_name: "Campo", birthday: "April 1 2016"
)
dan = User.create!(
  email: "danEmail", password: "123456",
  first_name: "Dan", last_name: "Rodriguez", birthday: "April 1 2016"
)
danP = User.create!(
  email: "danPEmail", password: "123456",
  first_name: "Dan", last_name: "Phillips", birthday: "April 1 2016"
)
patrick = User.create!(
  email: "patrickEmail", password: "123456",
  first_name: "Patrick", last_name: "Kovach-Long", birthday: "April 1 2016"
)
dylan = User.create!(
  email: "dylanEmail", password: "123456",
  first_name: "Dylan", last_name: "Meacham", birthday: "April 1 2016"
)
jessica = User.create!(
  email: "jessicaEmail", password: "123456",
  first_name: "Jessica", last_name: "Yao", birthday: "April 1 2016"
)
brian = User.create!(
  email: "brianEmail", password: "123456",
  first_name: "Brian", last_name: "Beverly", birthday: "April 1 2016"
)
kevin = User.create!(
  email: "kevinEmail", password: "123456",
  first_name: "Kevin", last_name: "LaCherra", birthday: "February 2 1991"
)
guest = User.create!(
  email: "guestEmail", password: "123456",
  first_name: "Tulazy", last_name: "Tusynup", birthday: "February 1 1981"
)



Post.destroy_all

chris.posts.create!(body: "I'm makin a post", timeline_id: chris.id)
gigi.posts.create!(body: "Wow, love this facebook clone", timeline_id: gigi.id)
dan.posts.create!(body: "I should be coding rn LOL", timeline_id: dan.id)
patrick.posts.create!(body: "I put the STYLE in METHOD STYLE!!", timeline_id: patrick.id)
danP.posts.create!(body: "Good job, dude!", timeline_id: chris.id)
brian.posts.create!(body: "a suh dude?", timeline_id: chris.id)


chris.posts.create!(body: "This is getting too popular", timeline_id: chris.id)
gigi.posts.create!(body: "Let me know if you're trying to find a puppy!", timeline_id: gigi.id)
dan.posts.create!(body: "I smell really bad.  Also, I should really stop leaving my facebook logged in.", timeline_id: dan.id)
patrick.posts.create!(body: "People shouldn't leave their facebook open!", timeline_id: patrick.id)

Friendship.destroy_all
FriendRequest.destroy_all

patrick.sent_requests.create!(target_id: chris.id)
dan.sent_requests.create!(target_id: chris.id)
gigi.sent_requests.create!(target_id: chris.id)
danP.sent_requests.create!(target_id: chris.id)
dylan.sent_requests.create!(target_id: chris.id)
kevin.sent_requests.create!(target_id: chris.id)
brian.sent_requests.create!(target_id: chris.id)
danP.sent_requests.create!(target_id: guest.id)
dylan.sent_requests.create!(target_id: guest.id)
kevin.sent_requests.create!(target_id: guest.id)
brian.sent_requests.create!(target_id: guest.id)
