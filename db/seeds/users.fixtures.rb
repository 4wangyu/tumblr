class UsersFixtures
  @@fixtures = [
    { 
      username: 'skeletonpixel', 
      title: 'Improvised design for an improvised age', 
      keywords: ['ui', 'ux', 'webdesign', 'design', 'wireframe'] 
    }, # 2
    { 
      username: 'goofballz', 
      title: '(✪ܫ✪)', 
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
      username: 'audition-and-scene', 
      title: 'THE APPLAUSE', 
      keywords: ['actor', 'actress', 'theatre', 'performance'] 
    }, # 7
    { 
      username: 'retro.tech', 
      title: 'Your trusted source for viral and luxurious technology and inventions in the world.', 
      keywords: ['electronic', 'robot', 'drone', 'tech'] 
    }, # 8
    { 
      username: 'archae-heart', 
      title: 'Bringing Architecture, Design and Art to your Dash.', 
      keywords: ['architecture', 'building', 'skyline',] 
    } # 9
    { 
      username: 'rave.nation', 
      title: 'Spreading PLUR', 
      keywords: ['dj', 'concert', 'rave', 'music festival'] 
    }, # 10
    { 
      username: 'national_parks', 
      title: 'adventure is worthwhile', 
      keywords: ['national parks'] 
    }, # 11
    { 
      username: 'wallpaperboss', 
      title: 'Take your phone / desktop to the next level', 
      keywords: ['wallpapers', 'desktop background'] 
    }, # 12
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