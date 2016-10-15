require 'rails_helper'

describe "Ideas Endpoint" do
  it "posts new idea" do
    post "/api/v1/ideas.json", params: {idea: {title: "new idea 1", body: "this is a new idea"}}

    expect(response).to be_success

    parsed_response = JSON.parse(response.body)

    expect(parsed_response["title"]).to eq("new idea 1")
  end
end
