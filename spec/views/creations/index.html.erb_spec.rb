require 'rails_helper'

RSpec.describe "creations/index", type: :view do
  before(:each) do
    assign(:creations, [
      Creation.create!(
        :title => "Title",
        :created_by => "Created By"
      ),
      Creation.create!(
        :title => "Title",
        :created_by => "Created By"
      )
    ])
  end

  it "renders a list of creations" do
    render
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "Created By".to_s, :count => 2
  end
end
