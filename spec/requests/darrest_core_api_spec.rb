
require 'rails_helper'

describe 'API User', type: :request do
  before do
  end

  let(:access_token) do
    'ZGlvbC3EmXps7OsgAdq17Tsp6opGZ3-Xn5jUDgjdM_Q' # site_user: 1
    # 'NbDi5FOzBHml_VGMNNvfBt3XQorZSeLoiQmNgQdj7gA' # site_user: 2
  end

  describe 'GET /me' do
    it 'responsds 200' do
      #
      # execute
      #
      get_with_token(me_path, access_token)

      #
      # validate
      #
      expect(response).to be_success
      expect(response.status).to eq 200
      json = JSON.parse(response.body)
      expect(json.key?('user')).to eq true
    end
  end
end
