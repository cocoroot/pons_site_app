require 'rails_helper'

RSpec.describe "creations/new", type: :view do
  before(:each) do
    assign(:creation, Creation.new(
      :title => "MyString",
      :created_by => "MyString"
    ))
  end

  it "renders new creation form" do
    render

    assert_select "form[action=?][method=?]", creations_path, "post" do

      assert_select "input#creation_title[name=?]", "creation[title]"

      assert_select "input#creation_created_by[name=?]", "creation[created_by]"
    end
  end
end
