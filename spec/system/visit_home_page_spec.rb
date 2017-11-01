require 'rails_helper'

RSpec.describe 'Visit home page' do
  before do
    visit root_path
  end

  describe 'content' do
    it 'should display bio greeting', js: true do
      expect(page).to have_text('OH HI THERE!')
    end

    it 'should display bio subhead', js: true do
      expect(page).to have_text('Thanks for stopping by to check us out. Here’s a little bit about us.')
    end
  end

  describe 'CTA links' do
    it 'should have listen link to soundcloud', js: true do
      expect(page).to have_css("a[href='https://soundcloud.com/alpinefalcons']")
    end

    it 'should have watch link to vimeo', js: true do
      expect(page).to have_css("a[href='https://www.youtube.com/channel/UCGpn5q7VsMUNDaF8uQvlvCg/videos']")
    end
  end

  describe 'form labels', js: true do
    it 'should have subject label' do
      expect(page).to have_text 'What can we do for you?'
    end

    it 'should have body label' do
      expect(page).to have_text 'Tell us more'
    end

    it 'should have name label' do
      expect(page).to have_text 'Your Name'
    end

    it 'should have email label' do
      expect(page).to have_text 'How to reach you'
    end
  end
end
