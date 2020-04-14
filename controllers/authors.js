// Require the Author Model.
const Author = require("../models/Author");

// Write the Controller to list all authors
const getAuthors = (req, res) => {
  Author.find({}).then((authors) => {
    res.json(authors);
  });
};
// Write the Controller to get authors by firstname
const getAuthorsByName = (req, res) => {
  Author.find({ firstName: req.params.name }).then((authors) => {
    res.json(authors);
  });
};
// Write the Controller to create an author
const createAuthor = (req, res) => {
  Author.create(req.body).then((author) => {
    res.json(author);
  });
};
// Write the Controller to update an author
const updateAuthor = (req, res) => {
  Author.findOneAndUpdate({firstName: req.params.name}, req.body).then((author) => {
    res.json(author);
  });
};
// Write the controller to delete an author
const deleteAuthor = (req, res) => {
    Author.delete({_id: req.params.id}).then(author => {
        res.json(author)
    })
}
// Research the .populate method to send back an Author and all their cookbooks
const getAuthorsWithCookbooks = (req, res) => {
  Author.find({ _id: req.params.id })
    .populate("cookbooks")
    .then((authors) => {
      res.json(authors);
    });
};
// Export Controller functions
module.exports = {
  getAuthors,
  createAuthor,
  getAuthorsWithCookbooks,
  getAuthorsByName,
  updateAuthor,
  deleteAuthor
};
