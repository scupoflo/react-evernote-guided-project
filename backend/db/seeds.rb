# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u = User.create(name: ENV['USER'])

Note.destroy_all
10.times do
  Note.create(user: u, title: Faker::Lorem.sentence(rand(4) + 1, true), body: Faker::Lorem.paragraphs(3, true).join('\n'))
end

//goal

user
title: Pass Coding Challenge
body
picture:
deadline:
category: Self Development
priority: High Priority

user
title: Build Emergency Savings
body
picture:
deadline: 6 Months
category: Financial
priority: Med Priority

user:
title: Get a Job
body:
picture:
deadline: 3 Months
category: Career
priority: Med Priority

user:
title: Call Mom More Often
body:
picture:
deadline: 3 Months
category: Personal
priority: Low Priority

user:
title: Excercise 4x a week
body:
picture:
deadline: 3 Months
category: Health
priority: High Priority

user:
title: Travel to New Country
body:
picture:
deadline: 2 Months
category: Personal Reward
priority: High Priority

user:
title: Go to All Annual Appts
body:
picture:
deadline: 4 Months
category: Health
priority: High Priority

user:
title: Achieve Higher Enlightment
body:
picture:
deadline: 6 Months
category: Health
priority: High Priority
