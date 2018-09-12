var library = (function () {
        var books = [];
        var categories = [];
        var listedCategories = [];
        var listedBooks = [];

        function listBooks() {
            listedBooks = books.sort((a, b) => a.ID - b.ID);
            return listedBooks;
        }

        function addCategories(name) {
            if(name === 'undefined') {
                return;
            }
            for(let i = 0, len = categories.length; i < len; i += 1) {
                if (categories[i].category === name) {
                    return;
                }
            }
            categories.push({
                category: name,
                ID: categories.length + 1
            });
        }

        function validateBookElements(newBook) {
            if((newBook.title === undefined) || (newBook.author === undefined) || (newBook.isbn === undefined)) {
                throw 'Name, ISBN or author are missing';  
              };
        };

        function validateCategory (newBook) {
            if(newBook.category === undefined) {
                newBook.category = 'Unspecified category';
            };
        };

        function validateBookTitle(newBook) {
            if(newBook.title.length < 2 || newBook.title.length > 100) {
                throw 'Book title too short ot too long';
            }
        }

        function validateISBN(newBook){
            let len = newBook.isbn.length;
            if(len < 10 || len > 13){
                throw 'Invalid ISBN';
            };
        }; 

        function validateAuthor(newBook){
            if(newBook.author === '') {
                throw 'invalid author name';
            }
        }

        function bookAlreadyExists(name, element) {
            for (let i = 0; i < books.length; i += 1) {
                if(name === books[i][element]) {
                    console.log(books[i][element])
                    return true;
                };
            };

            return false;
        }

        function addBook(book) {
            
            validateBookElements(book);

            validateCategory(book);            

            validateBookTitle(book);

            validateISBN(book);

            validateAuthor(book);

            if(bookAlreadyExists(book.title, 'title')) {
                throw new Error();
            }

            if(bookAlreadyExists(book.isbn, 'isbn')) {
                throw new Error;
            }

            addCategories(book.category);

            book.ID = books.length + 1;   
            books.push(book);
            return book;
        }

        function listCategories() {      
            listedCategories = categories.sort((a, b) => a.ID - b.ID);
            return listedCategories;
        }

        return {
            books: {
                list: listBooks,
                add: addBook,
            },
            categories: {
                list: listCategories
            }
        };
        ;

}());

module.exports = library;

