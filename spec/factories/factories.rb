FactoryGirl.define do
  factory :idea do
    title
    body "this is some text for an idea"
  end

  sequence :title do |n|
    "Title#{n}"
  end
end
