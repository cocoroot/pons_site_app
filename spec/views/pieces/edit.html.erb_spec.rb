require 'rails_helper'

RSpec.describe "pieces/edit", type: :view do
  before(:each) do
    @piece = assign(:piece, Piece.create!(
      :name => "MyString",
      :file_name => "MyString",
      :url => "MyText",
      :image => "",
      :thumbnail => ""
    ))
  end

  it "renders the edit piece form" do
    render

    assert_select "form[action=?][method=?]", piece_path(@piece), "post" do

      assert_select "input#piece_name[name=?]", "piece[name]"

      assert_select "input#piece_file_name[name=?]", "piece[file_name]"

      assert_select "textarea#piece_url[name=?]", "piece[url]"

      assert_select "input#piece_image[name=?]", "piece[image]"

      assert_select "input#piece_thumbnail[name=?]", "piece[thumbnail]"
    end
  end
end
