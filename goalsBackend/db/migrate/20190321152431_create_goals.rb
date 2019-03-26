class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.integer :user_id
      t.string :title
      t.string :picture
      t.string :body
      t.string :deadline
      t.string :priority
      t.timestamps
    end
  end
end
