require 'rails_helper'

RSpec.describe "Creations", type: :request do
  describe "GET /creations" do
    it "works! (now write some real specs)" do
      get creations_path
      expect(response).to have_http_status(200)
    end
  end
end
