class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by email: params[:email]
    if user.present? && user.authenticate( params[:password])# .present? means not nil
    session[:user_id] = user.id #create a cookie to store a session, and keep tracl of the user  ID
    # raise 'success'
    redirect_to root_path
    else
      # bad credentials/unsuccessful login
      flash[:error] = "Invalid username or password"
      redirect_to login_path
    end # ending if-else
  end # ending create


  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
