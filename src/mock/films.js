const featuredMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

const moviesList = [
  {
    id: 1,
    title: `Macbeth`,
    genre: `Drama`,
    releaseDate: 2015,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/macbeth.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 6.6,
      count: 120,
    },
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    cast: `Michael Fassbender, Marion Cotillard, Jack Madigan`,
    reviews: [
      {
        author: `Kate Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.7,
      },
      {
        author: `Bill Goodykoontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 5.3,
      },
    ],
  },
  {
    id: 2,
    title: `We need to talk about Kevin`,
    genre: `Mystery`,
    releaseDate: 2011,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 7.5,
      count: 134,
    },
    description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things
      he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond
      anything anyone imagined.`,
    director: `Lynne Ramsay`,
    cast: `Tilda Swinton, John C. Reilly, Ezra Miller`,
    reviews: [
      {
        author: `Kate Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.7,
      },
      {
        author: `Bill Goodykoontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 5.3,
      },
    ],
  },
  {
    id: 3,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Fantasy`,
    releaseDate: 2018,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 6.6,
      count: 300,
    },
    description: `The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.`,
    director: `David Yates`,
    cast: `Eddie Redmayne, Katherine Waterston, Dan Fogler`,
    reviews: [
      {
        author: `Kate Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.7,
      },
      {
        author: `Bill Goodykoontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 5.3,
      },
    ],
  },
  {
    id: 4,
    title: `Shutter Island`,
    genre: `Thriller`,
    releaseDate: 2010,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/shutter-island.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 8.1,
      count: 257,
    },
    description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.`,
    director: `Martin Scorsese`,
    cast: `Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo`,
    reviews: [
      {
        author: `Kate Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.7,
      },
      {
        author: `Bill Goodykoontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 5.3,
      },
    ],
  },
  {
    id: 5,
    title: `Snatch`,
    genre: `Comedy`,
    releaseDate: 2000,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/snatch.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 8.3,
      count: 300,
    },
    description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
    director: `Guy Ritchie`,
    cast: `Jason Statham, Brad Pitt, Benicio Del Toro`,
    reviews: [
      {
        author: `Kate Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.7,
      },
      {
        author: `Bill Goodykoontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 5.3,
      },
    ],
  },
  {
    id: 6,
    title: `Pulp Fiction`,
    genre: `Crime`,
    releaseDate: 1994,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/pulp-fiction.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 8.9,
      count: 578,
    },
    description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    director: `Quentin Tarantino`,
    cast: `John Travolta, Uma Thurman, Samuel L. Jackson`,
    reviews: [
      {
        author: `Kate Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.7,
      },
      {
        author: `Bill Goodykoontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 5.3,
      },
    ],
  },
  {
    id: 7,
    title: `Revenant`,
    genre: `Action`,
    releaseDate: 2015,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/revenant.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 8.0,
      count: 1001,
    },
    description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
    director: `Alejandro G. Iñárritu`,
    cast: `Leonardo DiCaprio, Tom Hardy, Will Poulter`,
    reviews: [
      {
        author: `Kate Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.7,
      },
      {
        author: `Bill Goodykoontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 5.3,
      },
    ],
  },
  {
    id: 8,
    title: `Bohemian Rhapsody`,
    genre: `Biography`,
    releaseDate: 2018,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/bohemian-rhapsody.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 10,
      count: 240,
    },
    description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).`,
    director: `Bryan Singer`,
    cast: `Rami Malek, Lucy Boynton, Gwilym Lee`,
    reviews: [
      {
        author: `Kate Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.7,
      },
      {
        author: `Bill Goodykoontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 5.3,
      },
    ],
  },
  {
    id: 9,
    title: `Aviator`,
    genre: `Biography`,
    releaseDate: 2004,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/aviator.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 7.7,
      count: 328,
    },
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    director: `Martin Scorsese`,
    cast: `Leonardo DiCaprio, Cate Blanchett, Kate Beckinsale`,
    reviews: [
      {
        author: `Kate Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.7,
      },
      {
        author: `Bill Goodykoontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 5.3,
      },
    ],
  },
  {
    id: 10,
    title: `What We Do in the Shadows`,
    genre: `Comedy`,
    releaseDate: 2004,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/what-we-do-in-the-shadows.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 7.7,
      count: 151,
    },
    description: `Viago, Deacon and Vladislav are vampires who are finding that modern life has them struggling with the mundane - like paying rent, keeping up with the chore wheel, trying to get into nightclubs and overcoming flatmate conflicts.`,
    director: `Jemaine Clement, Taika Waititi`,
    cast: `Jemaine Clement, Taika Waititi, Cori Gonzalez-Macuer`,
    reviews: [
      {
        author: `Kate Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.7,
      },
      {
        author: `Bill Goodykoontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 5.3,
      },
    ],
  },
  {
    id: 11,
    title: `Johnny English`,
    genre: `Comedy`,
    releaseDate: 2003,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/johnny-english.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 6.2,
      count: 151,
    },
    description: `After a sudden attack on MI5, Johnny English, Britain's most confident, yet unintelligent spy, becomes Britain's only spy.`,
    director: `Peter Howitt`,
    cast: ` Rowan Atkinson, John Malkovich, Natalie Imbruglia`,
    reviews: [
      {
        author: `Kate Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.7,
      },
      {
        author: `Bill Goodykoontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 5.3,
      },
    ],
  },
  {
    id: 12,
    title: `No Country for Old Men`,
    genre: `Drama`,
    releaseDate: 2007,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/no-country-for-old-men.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 8.1,
      count: 835,
    },
    description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
    director: `Ethan Coen, Joel Coen`,
    cast: `Tommy Lee Jones, Javier Bardem, Josh Brolin`,
    reviews: [
      {
        author: `Kate Timuir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 4.7,
      },
      {
        author: `Bill Goodykoon`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 4.4,
      },
    ],
  },
  {
    id: 13,
    title: `Moonrise Kingdom`,
    genre: `Romance`,
    releaseDate: 2012,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/moonrise-kingdom.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 7.8,
      count: 312,
    },
    description: `A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.`,
    director: `Wes Anderson`,
    cast: `Jared Gilman, Kara Hayward, Bruce Willis`,
    reviews: [
      {
        author: `Ka Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 6.2,
      },
      {
        author: `Bill Yooyoo`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 5.0,
      },
    ],
  },
  {
    id: 14,
    title: `Seven Years in Tibet`,
    genre: `Drama`,
    releaseDate: 1997,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/seven-years-in-tibet.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 7.1,
      count: 125,
    },
    description: `True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China's takeover of Tibet.`,
    director: `Jean-Jacques Annaud`,
    cast: `Brad Pitt, David Thewlis, BD Wong`,
    reviews: [
      {
        author: `Katuir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.0,
      },
      {
        author: `Bill Gdkntz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 7.3,
      },
    ],
  },
  {
    id: 15,
    title: `War of the Worlds`,
    genre: `Sci-fi`,
    releaseDate: 2005,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/war-of-the-worlds.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 6.5,
      count: 410,
    },
    description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival in this sci-fi action film.`,
    director: `Steven Spielberg`,
    cast: `Tom Cruise, Dakota Fanning, Tim Robbins`,
    reviews: [
      {
        author: `Ate Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 6.7,
      },
      {
        author: `Bill Goooontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 2.4,
      },
    ],
  },
  {
    id: 16,
    title: `Midnight Special`,
    genre: `Crime`,
    releaseDate: 2016,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/midnight-special.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 6.6,
      count: 73,
    },
    description: `A father and son go on the run, pursued by the government and a cult drawn to the child's special powers.`,
    director: `Jeff Nichols`,
    cast: `Michael Shannon, Joel Edgerton, Kirsten Dunst`,
    reviews: [
      {
        author: `Ka Mu`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 5.4,
      },
      {
        author: `Dill Gootz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 3.4,
      },
    ],
  },
  {
    id: 17,
    title: `Dardjeeling Limited`,
    genre: `Adventure`,
    releaseDate: 2007,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/dardjeeling-limited.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 7.2,
      count: 177,
    },
    description: `A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.`,
    director: `Wes Anderson`,
    cast: `Owen Wilson, Adrien Brody, Jason Schwartzman`,
    reviews: [
      {
        author: `Kate Mu`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 4.7,
      },
      {
        author: `Bill Goody`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 3.3,
      },
    ],
  },
  {
    id: 18,
    title: `Orlando`,
    genre: `Biography`,
    releaseDate: 1992,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/orlando.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 7.2,
      count: 14,
    },
    description: `After Queen Elizabeth I commands him not to grow old, a young nobleman struggles with love and his place in the world.`,
    director: `Sally Potter`,
    cast: `Tilda Swinton, Billy Zane, Quentin Crisp`,
    reviews: [
      {
        author: `Muir`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 1.2,
      },
      {
        author: `Goodykoontz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 6.4,
      },
    ],
  },
  {
    id: 19,
    title: `Mindhunter`,
    genre: `Thriller`,
    releaseDate: 2017,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/mindhunter.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 8.6,
      count: 200,
    },
    description: `Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.`,
    director: `Joe Penhall`,
    cast: `Jonathan Groff, Holt McCallany, Anna Torv`,
    reviews: [
      {
        author: `Kate`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 8.0,
      },
      {
        author: `Bill`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 6.3,
      },
    ],
  },
  {
    id: 20,
    title: `Midnight Special`,
    genre: `Crime`,
    releaseDate: 2016,
    runTime: `2h 15m`,
    cover: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/midnight-special.jpg`,
    previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: {
      score: 6.6,
      count: 73,
    },
    description: `A father and son go on the run, pursued by the government and a cult drawn to the child's special powers.`,
    director: `Jeff Nichols`,
    cast: `Michael Shannon, Joel Edgerton, Kirsten Dunst`,
    reviews: [
      {
        author: `Ka Mu`,
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `2016-12-24`,
        rating: 5.4,
      },
      {
        author: `Dill Gootz`,
        text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
        date: `2015-11-18`,
        rating: 3.4,
      },
    ],
  },
];

export {moviesList, featuredMovie};
