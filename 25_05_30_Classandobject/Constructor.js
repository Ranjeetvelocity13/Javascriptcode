//lib
class Book{

    constructor(title,author,isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
    getDettails(){
     return `${this.title} by ${this.author}, ISBN : ${this.isbn}`       
    }
}

class Library{
    constructor(){
        this.Books = []
    }
    
    addBook(book){
      this.Books.push(book);
      console.log(`Added : ${book.getDettails()}`); //
    }

    removeBook(isbn){
     
         const index = this.Books.findIndex(book =>book.isbn == isbn);
         if(index !== -1){
            const removedBook = this.Books.splice(index,1)[0];
            console.log(`Removed: ${removedBook.getDettails()}`)
         }
         else{
            console.log(`Book with ISBN ${isbn} not found`)
         }
    }
    displayedBooks(){

        if(this.Books.length === 0){
            console.log("No books in the library")
        }
        else{
            console.log("Library collection")
            this.Books.forEach(book =>{
                console.log(book.getDettails())
            });
        }
    }
}

//creating books
// const book1 = new Book("Java","Scott fitz", 34656758)
// const book2 = new Book("Python","fitz", 57464647)
// const book3 = new Book("Javascript","Mackinalnd", 85736363)
// const book4 = new Book("Math","Test", 847726757)
// const book5 = new Book("Englis","Demo",4567890);

const library = new Library();
// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3)
// library.addBook(book4);
// library.addBook(book5);

//Display all book
library.displayedBooks();

console.log("**************")

//remove a book by isbn
library.removeBook(57464);
library.displayedBooks();