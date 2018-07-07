'use strict'


	var library = (function () {
		var books = [];
		var categories = [];
		function listBooks() {
			return books;
		}

		function addBook(title, author, isbn) {
            if (!title.match(/[A-Za-z0-9.!?,]{2,100}/)) {
                throw 'Book title must be between 2 and 100 characters!';
            }

            if (!author.match(/[A-Za-z]+/)){
                throw 'Write author\'s name';
            }

            if (!isbn.match(/[0-9]{10,13}/)) {
                throw 'ISBN must be between 10 and 13 digits!';
            }
            let bookID = books.length + 1;
			books.push({
                Title: title,
                Author: author,
                ISBN: isbn
            });
		}

		function listCategories() {
			return categories;
		}

		return {
            addBook: addBook,
            listBooks: listBooks
		};
	} ());
    
    library.addBook('The great war!', 'Mans Raider', '231432512432');
    let booklist = library.listBooks();
    console.log(booklist);