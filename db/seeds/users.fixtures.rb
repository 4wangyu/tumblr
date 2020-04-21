class UsersFixtures
  @@fixtures = [
    { 
      username: 'skeletonpixel', 
      title: 'Improvised design for an improvised age', 
      keywords: ['ui', 'ux', 'webdesign', 'design', 'wireframe'] 
    }, # 2
    { 
      username: 'goofballz', 
      title: '(✪ฺܫ✪ฺ)', 
      keywords: ['funny', 'funny face', 'funny animals'] 
    }, # 3
    { 
      username: 'petwatch', 
      title: '- Your daily dose of cute -', 
      keywords: ['pets', 'dog', 'cat', 'puppy', 'puppies', 'kitten', 'kittens'] 
    }, # 4
    { 
      username: 'gymbunny', 
      title: 'A space where you can find your daily motivation', 
      keywords: ['health', 'fitness', 'skyline', 'workout', 'crossfit', 'health meal'] 
    }, # 5
    { 
      username: 'fashion.facade', 
      title: "It's wintour year-round",  
      keywords: ['fashion', 'fashion runway', 'model', 'high fashion'] 
    }, # 6
    { 
      username: 'rave.nation', 
      title: 'Spreading PLUR', 
      keywords: ['dj', 'concert', 'rave', 'music festival'] 
    }, # 7
    { 
      username: 'audition-and-scene', 
      title: 'Live for the applause', 
      keywords: ['actor', 'actress', 'theatre', 'performance'] 
    }, # 8
    { 
      username: 'retro.tech', 
      title: 'Your trusted source for viral and luxurious technology and inventions in the world.', 
      keywords: ['electronic', 'robot', 'drone', 'tech'] 
    }, # 9
    { 
      username: 'archae-heart', 
      title: 'Bringing Architecture, Design and Art to your Dash.', 
      keywords: ['architecture', 'building', 'skyline',] 
    } # 10
  ]

  def self.demo
    { 
      username: 'demolicious', 
      title: 'മ◡മ', 
      email: 'demo@example.com', 
    } #1
  end

  def self.random
    @@fixtures.sample
  end

  def self.all
    @@fixtures
  end
end