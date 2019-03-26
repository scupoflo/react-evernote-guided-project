# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{ name: 'Bob'}, {name: 'Sue'}])
Goal.create(
  user_id: 1,
  title: "Call Mom More Often",
  picture: "https://katelanalivia.files.wordpress.com/2010/05/call-mom.jpg ",
  body: "Day 1: Need to do!",
  deadline: "April 1, 2019",
  priority: "Low"
)
Goal.create(
  user_id: 2,
  title: "Lose Weight",
  picture: "https://katelanalivia.files.wordpress.com/2010/05/call-mom.jpg ",
  body: "Day 1: Need to do!",
  deadline: "July 1, 2019",
  priority: "Medium"
)
Goal.create(
  user_id: 1,
  title: "Eat Fruit",
  picture: "http://cache.marieclaire.fr/data/photo/w1000_c17/cuisine/4k/fruits.jpg ",
  body: "Buy Groceries",
  deadline: "March 25, 2019",
  priority: "High"
)
Goal.create(
  user_id: 2,
  title: "Pass Coding Challenge",
  picture: "https://katelanalivia.files.wordpress.com/2010/05/call-mom.jpg ",
  body: "Study",
  deadline: "March 28, 2019",
  priority: "High"
)
