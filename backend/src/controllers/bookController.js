const axios = require("axios");
module.exports = {
  async searchBookbyTitle(req, res) {
    const { bookTitle } = req.query;

    searchURL =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      bookTitle +
      "&key=" +
      process.env.SECRET_API_GOOGLE;

    axios.get(searchURL).then(function (books) {
        returnedBooks = books.data.items

        let response = {
            totalBooks: books.data.totalItems,
            items: []
        }

        for(book in returnedBooks) {
            returnedBooks[book].volumeInfo.imageLinks ? 
            response.items.push({
                id: returnedBooks[book].id,
                title: returnedBooks[book].volumeInfo.title,
                authors: returnedBooks[book].volumeInfo.authors,
                description: returnedBooks[book].volumeInfo.description,
                pageCount: returnedBooks[book].volumeInfo.pageCount,
                imageURL: returnedBooks[book].volumeInfo.imageLinks.thumbnail,
                categories: returnedBooks[book].volumeInfo.categories
            }) : ""
        }
      
      res.status(200).send(response);
    });
  },
};
