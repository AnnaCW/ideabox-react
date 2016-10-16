require 'rails_helper'

feature "user views ideas" do
  scenario "user sees all ideas", js: true do
    idea_1, idea_2 = create_list(:idea, 2)

    visit '/'

    expect(page).to have_content idea_1.title
    expect(page).to have_content idea_2.title
  end

  context "idea body is more than 100 characters" do
    scenario "user sees truncated idea body", js: true do
      create(:idea, body: "This is a longer idea more than 100 characters. This is a longer idea more than 100 characters. This is a longer idea more than 100 characters. This is a longer idea more than 100 characters. It just keeps going and going.")

      visit '/'

      expect(page).to_not have_content "and going."
    end
  end
end
