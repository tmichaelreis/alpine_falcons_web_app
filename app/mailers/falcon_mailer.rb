class FalconMailer < ApplicationMailer
  def contact_email(contact)
    @contact = contact
    emails = ['hi@alpinefalcons.com', 'adam@alpinefalcons.com']
    mail(
      to: emails,
      subject: 'New message from website'
    )
  end
end