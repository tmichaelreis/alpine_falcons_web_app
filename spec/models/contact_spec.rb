require 'rails_helper'

RSpec.describe Contact, type: :model do
  it 'should queue email on create' do
    expect do
      described_class.create!(
        name: 'Jerry Seinfeld',
        email: 'jerry@example.com',
        subject: 'I want you to play',
        body: "Please play for my grandson's bar mitzvah!"
      )
    end.to have_enqueued_job(ActionMailer::DeliveryJob)
  end
end
