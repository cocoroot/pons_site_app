require 'rails_helper'

RSpec.describe "creations/edit", type: :view do
  before(:each) do
    @creation = assign(:creation, Creation.create!(
      :title => "MyString",
      :created_by => "MyString"
    ))
  end

  it "renders the edit creation form" do
    render

    assert_select "form[action=?][method=?]", creation_path(@creation), "post" do

      assert_select "input#creation_title[name=?]", "creation[title]"

      assert_select "input#creation_created_by[name=?]", "creation[created_by]"
    end
  end
end
