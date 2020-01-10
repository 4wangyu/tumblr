json.extract! post, :id, :title, :description
json.asset_url post.asset.attached? ? url_for(post.asset) : nil