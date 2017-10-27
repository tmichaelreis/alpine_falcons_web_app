require 'rails_helper'

RSpec.describe 'Visit home page' do
  before do
    visit root_path
  end

  describe 'content' do
    it 'should display bio greeting', js: true do
      expect(page).to have_text('Oh hi there!')
    end

    it 'should display bio subhead', js: true do
      expect(page).to have_text('Thanks for stopping by to check us out. Here’s a little bit about us.')
    end
  end

  describe 'CTA links' do
    it 'should have listen link to soundcloud' do
      skip 'Not Implemented'
    end

    it 'should have watch link to vimeo' do
      skip 'Not Implemented'
    end

    it 'should have go forth link to email' do
      skip 'Not Implemented'
    end
  end

  describe 'email form completion' do
    it 'should not allow email submission without user email address' do
      skip 'Not Implemented'
    end

    it 'should not allow email submission without email body' do
      skip 'Not Implemented'
    end

    it 'should allow email submission with required fields with success message' do
      skip 'Not Implemented'
    end
  end
end