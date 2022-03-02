Unsplash.configure do |config|
  # Disable unsplash.com API calls
  # config.application_access_key = Rails.application.credentials.unsplash[:access_key]
  # config.application_secret = Rails.application.credentials.unsplash[:secret]
  config.utm_source = 'thumblr'
end