class CreatePrices < ActiveRecord::Migration[6.0]
  def change
    create_table :prices do |t|
      t.string :name
      t.integer :number
      t.references :group, foreign_key: true
      t.timestamps
    end
  end
end
