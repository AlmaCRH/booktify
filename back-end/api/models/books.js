const mongoose = require("mongoose");

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

//Let's create a mongoose schema based on the properties of ours books
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genres: {
    type: [String],
    enum: allGenres,
    required: true,
    lowercase: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  number_of_pages: {
    type: Number,
    required: true,
  },
  ISBN10: {
    type: String,
    required: true,
    maxLength: 10,
    unique: true,
  },
  cover_image: {
    type: String,

  }
});

//Now, we create a Book model based on our schema and export it
const Book = mongoose.model("Book", BookSchema);

module.exports = { Book };
