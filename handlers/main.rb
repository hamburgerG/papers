get '/' do
  erb :menu
end

get '/:script' do
  @script = params[:script]
  erb :script
end