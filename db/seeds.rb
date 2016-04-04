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
  first_name: "Dan", last_name: "Whichdan", birthday: "April 1 2016"
)
patrick = User.create!(
  email: "patrickEmail", password: "123456",
  first_name: "Patrick", last_name: "Kovach-Long", birthday: "April 1 2016"
)


Post.destroy_all

chris.posts.create!(body: "I'm makin a post", timeline_id: chris.id)
gigi.posts.create!(body: "Wow, love this facebook clone", timeline_id: gigi.id)
dan.posts.create!(body: "I should be coding rn LOL", timeline_id: dan.id)
patrick.posts.create!(body: "I put the the STYLE in METHOD STYLE!!", timeline_id: patrick.id)

chris.posts.create!(body: "This is getting too popular", timeline_id: chris.id)
gigi.posts.create!(body: "Let me know if you're trying to find a puppy!", timeline_id: gigi.id)
dan.posts.create!(body: "I smell really bad.  Also, I should really stop leaving my facebook logged in.", timeline_id: dan.id)
patrick.posts.create!(body: "People shouldn't leave their facebook open!", timeline_id: patrick.id)
