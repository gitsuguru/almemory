class CreateMemos < ActiveRecord::Migration[6.0]
  def change
    create_table :memos do |t|
      t.string :text
      t.references :group, foreign_key: true
      t.timestamps
    end
  end
end