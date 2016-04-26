require 'rails_helper'

RSpec.describe "creations/show", type: :view do
  before(:each) do
    @creation = assign(:creation, Creation.create!(
      :title => "Title",
      :created_by => "Created By"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/Created By/)
  end
end
