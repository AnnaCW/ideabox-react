require 'rails_helper'

feature "user changes idea quality" do
  scenario "user sees updated quality", js: true do
    idea_1, idea_2 = create_list(:idea, 2)

    visit '/'

    within "tbody tr:first-child" do
      expect(page).to have_content "swill"

      click_on "Thumbs Up"

      expect(page).to have_content "plausible"
    end

  end
end
