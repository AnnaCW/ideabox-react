require 'rails_helper'

describe "Ideas Endpoint" do
  it "posts new idea" do
    post "/api/v1/ideas.json", params: {idea: {title: "new idea 1", body: "this is a new idea"} }

    expect(response).to be_success

    parsed_response = JSON.parse(response.body)

    expect(parsed_response["title"]).to eq("new idea 1")
    expect(parsed_response["body"]).to eq("this is a new idea")
  end

  it "updates idea" do
    idea = create(:idea)
    patch "/api/v1/ideas/#{idea.id}", params: {id: idea.id, idea: {title: "new title", body: "updated!", quality: "plausible"} }

    expect(response).to be_success

    parsed_response = JSON.parse(response.body)

    expect(parsed_response["title"]).to eq("new title")
    expect(parsed_response["body"]).to eq("updated!")
    expect(parsed_response["quality"]).to eq("plausible")
  end
end
