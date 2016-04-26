require 'rails_helper'

RSpec.describe "images/show", type: :view do
  before(:each) do
    @image = assign(:image, Image.create!(
      :url => "MyText",
      :url_thumbnail => "MyText",
      :sticky => "Sticky",
      :type => "Type"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/Sticky/)
    expect(rendered).to match(/Type/)
  end
end
