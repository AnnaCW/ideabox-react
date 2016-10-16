require 'rails_helper'

feature "user deletes idea" do
  scenario "user sees updated idea list", js: true do
    idea_1, idea_2, idea_3 = create_list(:idea, 3)

    visit '/'

    within("tbody tr:first-child") do
      expect(page).to have_content(idea_3.title)
      expect(page).to have_content(idea_3.body)
      expect(page).to have_content(idea_3.quality)

      click_on "Delete"
    end

    expect(page).to_not have_content(idea_3.title)
    
    expect(page).to have_content(idea_1.title)
    expect(page).to have_content(idea_2.title)
  end
end
