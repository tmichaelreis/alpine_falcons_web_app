class Contact < ApplicationRecord
  after_create :send_email

  def send_email
    FalconMailer.contact_email(self).deliver_later
  end
end
