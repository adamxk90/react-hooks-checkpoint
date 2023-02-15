const movies = [
  {
    id: 1,
    slug: 'he_Pale_Blue_Eye_(2022)',
    title: 'The Pale Blue Eye (2022)',
    description:
      "A world-weary detective is hired to investigate the murder of a West Point cadet. Stymied by the cadets' code of silence, he enlists one of their own to help unravel the case - a young man the world would come to know as Edgar Allan Poe. rating: '6.6'",
    posterurl:
      'https://img.rgstatic.com/content/movie/a2adf56f-fff4-41c1-b04e-5b99e0b75b73/poster-500.webp',
    rating: '6.6',
  },
  {
    id: 2,
    slug: 'Your_Place_or_Mine',
    title: 'Your Place or Mine',
    description:
      "Two long-distance best friends change each other's lives when she decides to pursue a lifelong dream and he volunteers to keep an eye on her teenage son.rating: '6.9' ",
    posterurl:
      'https://img.rgstatic.com/content/movie/77dbea0e-c49a-4cf2-aacb-fb3fd7ebdeee/poster-500.webp',
    rating: '6.9',
  },
  {
    id: 3,
    slug: 'All_Quiet_on_the_Western_Front_(2022)',
    title: 'All Quiet on the Western Front (2022)',
    description:
      "A young German soldier's terrifying experiences and distress on the western front during World War I.All Quiet on the Western Front featuring Daniel Brühl and Albrecht Schuch is streaming with subscription on Netflix, and streaming with subscription on Netflix Basic. It's an action & adventure and drama movie with a high IMDb audience rating of 7.8 (133,888 votes)",
    posterurl:
      'https://img.rgstatic.com/content/movie/7a373597-5f8b-4213-a558-7d6a89c9a83e/poster-500.webp',
    rating: '7.8',
  },
  {
    id: 4,
    slug: 'RRR_(2022)',
    title: 'RRR (2022)',
    description:
      "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s. RRR featuring N.T. Rama Rao Jr. and Ram Charan is streaming with subscription on Netflix, and streaming with subscription on Netflix Basic. It's an action & adventure and drama movie with a high IMDb audience rating of 7.9 (134,318 votes).",
    posterurl:
      'https://img.rgstatic.com/content/movie/ed39519f-304b-4224-8025-7b95e1895fc2/poster-500.webp',
    rating: '7.9',
  },
  {
    id: 5,
    slug: 'Glass_Onion:_A_Knives_Out_Mystery_(2022)',
    title: 'Glass Onion: A Knives Out Mystery (2022)',
    description:
      "Famed Southern detective Benoit Blanc travels to Greece for his latest case. Glass Onion: A Knives Out Mystery featuring Daniel Craig and Janelle Monáe is streaming with subscription on Netflix, and streaming with subscription on Netflix Basic. It's a comedy and crime movie with a better than average IMDb audience rating of 7.2 (325,320 votes).",
    posterurl:
      'https://img.rgstatic.com/content/movie/a509ecc3-4023-463b-80d8-68250e5727ea/poster-500.webp',
    rating: '7.2',
  },
  {
    id: 6,
    slug: 'Bullet_Train_(2022)',
    title: 'Bullet Train (2022)',
    description:
      "Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common. Bullet Train featuring Brad Pitt and Joey King is streaming with subscription on Netflix, available for rent or purchase on Apple TV, available for rent or purchase on Prime Video, and 2 others. It's an action & adventure and comedy movie with a better than average IMDb audience rating of 7.3 (287,945 votes).",
    posterurl:
      'https://img.rgstatic.com/content/movie/d3d302c9-03ca-48f4-81be-b93acdb4d4e7/poster-500.webp',
    rating: '7.3',
  },
  {
    id: 7,
    slug: 'Black_Panther:_Wakanda_Forever',
    title: 'Black Panther: Wakanda Forever',
    description:
      "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa. Black Panther: Wakanda Forever featuring Lupita Nyong'o and Letitia Wright is streaming with subscription on Disney+, available for purchase on Apple TV, available for purchase on Prime Video, and 2 others. It's an action & adventure and drama movie with a better than average IMDb audience rating of 6.9 (188,868 votes).",
    posterurl:
      'https://img.rgstatic.com/content/movie/7217441d-fe26-4313-9b8e-32adc49a6aec/poster-500.webp',
    rating: '6.9',
  },
  {
    id: 8,
    slug: 'Top_Gun:_Maverick',
    title: 'Top Gun: Maverick',
    description:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it. Top Gun: Maverick featuring Tom Cruise and Val Kilmer is streaming on Paramount+, streaming on Epix, streaming with subscription on DIRECTV Stream, and 4 others. It's an action & adventure and drama movie with a high IMDb audience rating of 8.3 (520,383 votes).",
    posterurl:
      'https://img.rgstatic.com/content/movie/67daab14-c08e-4be1-a957-8ba7c2525cef/poster-500.webp',
    rating: '8.3',
  },
  {
    id: 9,
    slug: 'Puss_in_Boots:_The_Last_Wish_(2022)',
    title: 'Puss in Boots: The Last Wish (2022)',
    description:
      "Puss in Boots discovers that his passion for adventure has taken its toll: he has burned through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives. Puss in Boots: The Last Wish featuring Antonio Banderas and Florence Pugh is available for rent or purchase on Apple TV, available for rent or purchase on Prime Video, and available for rent or purchase on Microsoft Store. It's an action & adventure and animation movie with a high IMDb audience rating of 7.9 (67,926 votes).",
    posterurl:
      'https://img.rgstatic.com/content/movie/f3000573-828a-404f-a427-cf234aeb2f80/poster-500.webp',
    rating: '7.9',
  },
  {
    id: 10,
    slug: 'The_Menu_(2022)',
    title: 'The Menu (2022)',
    description:
      "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises. The Menu featuring Ralph Fiennes and Anya Taylor-Joy is streaming on HBO MAX, streaming with subscription on HBO MAX (Via Hulu), streaming with subscription on DIRECTV Stream, and 3 others. It's a comedy and horror movie with a better than average IMDb audience rating of 7.2 (220,907 votes).",
    posterurl:
      'https://img.rgstatic.com/content/movie/d0aca192-7f99-452b-ac3a-f0810f2510a5/poster-500.webp',
    rating: '7.2',
  },
]

export default movies
