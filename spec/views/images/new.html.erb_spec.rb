require 'rails_helper'

RSpec.describe "images/new", type: :view do
  before(:each) do
    assign(:image, Image.new(
      :url => "MyText",
      :url_thumbnail => "MyText",
      :sticky => "MyString",
      :type => ""
    ))
  end

  it "renders new image form" do
    render

    assert_select "form[action=?][method=?]", images_path, "post" do

      assert_select "textarea#image_url[name=?]", "image[url]"

      assert_select "textarea#image_url_thumbnail[name=?]", "image[url_thumbnail]"

      assert_select "input#image_sticky[name=?]", "image[sticky]"

      assert_select "input#image_type[name=?]", "image[type]"
    end
  end
end
