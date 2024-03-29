source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.6'

# A dependency for ActiveStorage::Analyzer::ImageAnalyzer, which extracts width and height in pixels from an image blob
gem 'mini_magick'
# Validate ActiveStorage attachments
gem 'active_storage_validations'
# Rails templating system
gem 'actionview', '>= 5.2.4.2' # Security patch recommended by Dependabot
# API for seeding free, high-definition photos
gem 'unsplash'
# Structure seed files by environment, tables, and execute in specified order
gem 'seedbank'
# Create seed data files from the existing data in the database
gem 'seed_dump'
# Execute between when your action is completed and the template is rendered
gem 'rails5_before_render', require: 'before_render'
# Fetch and parse OpenGraph properties from an URL or a given string
gem 'open_graph_reader'
# Sync active storage w/ AWS S3
gem 'aws-sdk-s3'
# Make AJAX requests w/ authentication token automatically added to header
gem 'jquery-rails'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.3'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem "puma", ">= 3.12.6" # Security patch
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'mini_racer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false
gem 'pry-rails'
gem 'faker'

group :development, :test do
  gem 'annotate'
  gem 'binding_of_caller'
  gem 'better_errors'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :production do
  # Use to view Heroku logs and will precompile our asset
  gem 'rails_12factor'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]