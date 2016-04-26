require 'rails_helper'

RSpec.describe "pieces/new", type: :view do
  before(:each) do
    assign(:piece, Piece.new(
      :name => "MyString",
      :file_name => "MyString",
      :url => "MyText",
      :image => "",
      :thumbnail => ""
    ))
  end

  it "renders new piece form" do
    render

    assert_select "form[action=?][method=?]", pieces_path, "post" do

      assert_select "input#piece_name[name=?]", "piece[name]"

      assert_select "input#piece_file_name[name=?]", "piece[file_name]"

      assert_select "textarea#piece_url[name=?]", "piece[url]"

      assert_select "input#piece_image[name=?]", "piece[image]"

      assert_select "input#piece_thumbnail[name=?]", "piece[thumbnail]"
    end
  end
end
