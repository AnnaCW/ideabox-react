require 'rails_helper'

feature "user views ideas" do
  scenario "user sees all ideas", js: true do
    create_list(:idea, 2)

    visit '/'

    expect(page).to have_content "Title1"
    expect(page).to have_content "Title2"
  end
end
