require 'rails_helper'

RSpec.describe "pieces/index", type: :view do
  before(:each) do
    assign(:pieces, [
      Piece.create!(
        :name => "Name",
        :file_name => "File Name",
        :url => "MyText",
        :image => "",
        :thumbnail => ""
      ),
      Piece.create!(
        :name => "Name",
        :file_name => "File Name",
        :url => "MyText",
        :image => "",
        :thumbnail => ""
      )
    ])
  end

  it "renders a list of pieces" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "File Name".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "".to_s, :count => 2
    assert_select "tr>td", :text => "".to_s, :count => 2
  end
end
