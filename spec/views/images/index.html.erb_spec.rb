require 'rails_helper'

RSpec.describe "images/index", type: :view do
  before(:each) do
    assign(:images, [
      Image.create!(
        :url => "MyText",
        :url_thumbnail => "MyText",
        :sticky => "Sticky",
        :type => "Type"
      ),
      Image.create!(
        :url => "MyText",
        :url_thumbnail => "MyText",
        :sticky => "Sticky",
        :type => "Type"
      )
    ])
  end

  it "renders a list of images" do
    render
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "Sticky".to_s, :count => 2
    assert_select "tr>td", :text => "Type".to_s, :count => 2
  end
end
