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
    it 'should have listen link to soundcloud', js: true do
      expect(page).to have_css("a[href='https://soundcloud.com/themfalcons']")
    end

    it 'should have watch link to vimeo', js: true do
      expect(page).to have_css("a[href='https://vimeo.com/user61592768']")
    end

    it 'should have go forth link to email', js: true do
      expect(page).to have_css("a[href=#{contacts_url}]")
    end
  end

  describe 'email form completion' do
    before do
      fill_in 'What can we do for you?', with: 'Need band for gig'
      fill_in 'Tell us more', with: 'Band needed for performance on new years. You guys are the best.'
      fill_in 'Your Name', with: 'Holden McGroin'
      fill_in 'How to reach you', with: 'test@example.com'
    end

    it 'should not allow email submission without user email address', js: true do
      fill_in 'How to reach you', with: ''
      click_on '#submit_contact'
      expect(page).to have_content 'Please provide us with your contact information so we can respond to your request'
    end

    it 'should not allow email submission without email body', js: true do
      fill_in 'Tell us more', with: ''
      click_on '#submit_contact'
      expect(page).to have_content 'Please tell us more about your request'
    end

    it 'should allow email submission with required fields with success message', js: true do
      click_on '#submit_contact'
      expect(page).to have_content 'Thanks for reaching out!'
    end
  end
end
