'use strict'


	var library = (function () {
		var books = [];
		var sortedBooks = [];
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
			books.push({
                Title: title,
                Author: author,
                ISBN: isbn,
                ID: (books.length + 1)
            });
		}

		function sortBooks() {
            sortedBooks = books.sort((x, y) => {
                let aName = x.Author;
                let bName = y.Author;
                if (aName < bName) {
                    return -1;
                }
                if (aName > bName) {
                    return 1;
                }
                return 0;
            });
            return sortedBooks;
		} 

		return {
            addBook: addBook,
            listBooks: listBooks,
            sortBooks: sortBooks
		};
	} ());
    
    library.addBook('The great war!', 'Mans Raider', '231432512432');
    library.addBook('How to suck dick proprerly?', 'Emma Watson', '123124412232');
    library.addBook('How big is too big?', 'Jenna Jameson', '1323124412232');
    library.addBook('Is anal sex a sin?', 'Pope F', '3333124412232');
    
    let sorted = library.sortBooks();
    console.log(sorted);