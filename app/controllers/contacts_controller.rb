class ContactsController < ApplicationController
  def create
    @contact = Contact.create!(contact_params)

    respond_to do |format|
      format.json { render json: @contact }
    end
  end

  private

    def contact_params
      params.require(:contact).permit(:subject, :body, :name, :email)
    end
end