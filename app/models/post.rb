require 'open-uri'
class Post < ApplicationRecord
  # ----------------------------- Associations
  belongs_to :user

  belongs_to :content, polymorphic: true

  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes

  has_many :taggings, as: :taggable, dependent: :destroy
  has_many :tags, through: :taggings
  # ----------------------------- Scope
  default_scope { order(created_at: :desc) }
  # ----------------------------- Queries
  def all_tags=(names)
    return if names.nil?
    self.tags = names.map do |name|
      Tag.where(name: name.strip).first_or_create
    end
  end
  
  def all_tags
    self.tags.map(&:name)
  end

  def self.approved_first_image_in_galleries
    self.where(content_type: :ImageGallery, approved: true)
  end

  def self.tags_like(query:,content_type: nil)
    return [] if query.nil? || query.empty?
    q = self
      .where("tags.name LIKE ?", "%#{query.downcase}%")
      .left_joins(:tags)
      .group(:id)
    unless content_type.nil? || content_type.empty?
      q = q.where(content_type: content_type)
    end
      q
  end

  def self.from_unsplash(query: '', image_count: 1)
    raise "Invalid query" if query.nil? || query.empty?

    post = Post.new
    image_gallery = ImageGallery.new()
    tags = []
    body = ''

    photos = Unsplash::Photo.search(query, rand(1..3), 20).sample(image_count)
    return if photos.empty?
    photos.each do |photo|
      url = photo.urls.regular
      tags.concat(photo.tags.map { |tag| tag['title']})
      body = photo.description if body.empty? && !photo.description.nil?
      filename = photo.alt_description
      image_gallery.images.attach(io: open(url), filename: filename)
    end

    Post.new({ content: image_gallery, body: body, all_tags: tags.uniq })
  end

end
