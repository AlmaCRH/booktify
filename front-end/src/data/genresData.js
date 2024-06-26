const genreOptions = {
    fantasy_genres: [
      "Fantasy",
      "Science Fiction",
      "Dystopian",
      "Action & Adventure",
      "Mystery",
      "Horror",
      "Thriller & Suspense",
      "Historical Fiction",
      "Romance",
      "Women's Fiction",
      "LGTBQ+",
      "Contemporary Fiction",
      "Literary Fiction",
      "Magical Realism",
      "Graphic Novel",
      "Short Story",
      "Young Adult",
      "New Adult",
      "Children's",
    ],
    nonfiction_genres: [
      "Memoir & Autobiography",
      "Biography",
      "Food & Drink",
      "Art & Photography",
      "Self-help",
      "History",
      "Travel",
      "True Crime",
      "Humor",
      "Guide/How-to",
      "Religion & Spirituality",
      "Humanities & Social Sciences",
      "Parenting & Families",
      "Science & Technology",
      "Children's",
    ],
  };
  
  const allGenres = [
    ...genreOptions.fantasy_genres,
    ...genreOptions.nonfiction_genres,
  ];

export {genreOptions, allGenres}