class Book {
  constructor(title, author, quantity) {
    this.title = title;
    this.author = author;
    this.quantity = quantity;
  }

  
  addStock(n){
    if(n >= 0){
      this.quantity += n
    }
  }

removeStock(n){
  if(n>0){
    this.quantity = this.quantity - n;
  }
  if(this.quantity<=0){
    this.quantity = 0;
  }
 
const book = new Book("oryx and Crake","Margaret Atwood",10)

book.addStock();
book.removeStock();


module.exports = Book;
