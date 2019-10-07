const Book = require("./Book");
// eslint-disable-next-line no-unused-vars
const catalogue = [
    new Book("The Catcher in the Rye", "J.D. Salinger", 10),
    new Book("Dracula", "Bram Stoker", 0),
    new Book("Between the Assassinations", "Aravind Adiga", 9),
    new Book("Wolf Hall", "Hilary Mantel", 33),
    new Book("Bring Up The Bodies", "Hilary Mantel", 31),
    new Book("A Place of Greater Safety", "Hilary Mantel", 11),
    new Book("Giving Up the Ghost", "Hilary Mantel", 8),
    new Book("The Assassination of Margaret Thatcher", "Hilary Mantel", 43),
    new Book("The Yellow Wallpaper", "Charlotte Perkins Gilman", 12),
    new Book("Conversations With Friends", "Sally Rooney", 1),
    new Book("Normal People", "Sally Rooney", 2),
    new Book("Everything I Never Told You", "Celeste Ng", 6),
    new Book("The Origin of Species", "Charles Darwin", 50),
    new Book("Why Be Happy When You Could Be Normal?", "Jeanette Winterson", 19),
    new Book("The Blind Assassin", "Margaret Atwood", 8),
    new Book("Great Expectations" ,"Charles Dickens", 1),
    new Book("Oliver Twist" ,"Charles Dickens", 7),
    new Book("A Tale of Two Cities", "Charles Dickens", 3),
    new Book("By Night In Chile", "Robert Bolaño", 8),
    new Book("2666", "Robert Bolaño", 17)
];

function checkBook(title) {
  if (!title) throw new Error("Please provide a title");
  let result = false;
  for (let i = 0; i < catalogue.length; i++) {
   let ct = catalogue[i].title;
   ct = ct.toLowerCase();
   const t = title.toLowerCase();
   if(ct.includes(t)){
     result = true;
   }
  }
  return result;
}

function countBooksByKeyword(keyword) {
  if (!keyword) throw new Error("Please provide a keyword");
  let cont = 0;
  for (let i = 0; i < catalogue.length; i++) {
    const book = keyword.toLowerCase();
    let cat = catalogue[i].title;
    cat = cat.toLowerCase();
    if (cat.includes(book)) {
      cont++;
    }
  }
  return cont;
}

function getBooksByAuthor(author) {
  if (!author) throw new Error("Please provide an author");
  let count = [];
  for (let i = 0; i < catalogue.length; i++){
    let at = catalogue[i].author;
    at = at.toLowerCase();
    let a = author.toLowerCase();
    if (at.includes(a)){
      count.push(catalogue[i].title);
    }
  }
  return count;
}

function getStockCount(title) {
  if (!title) throw new Error("Please provide a title");
  let result = 0;
  for (let i = 0; i < catalogue.length; i++) {
   let ct = catalogue[i].title;
   ct = ct.toLowerCase();
   const t = title.toLowerCase();
   if(ct.includes(t)){
     result = catalogue[i].quantity;
   }
  }
  return result;
}

function stockReview(title) {
  if (!title) throw new Error("Please provide a title");
  let result = "Book not found";
  for (let i = 0; i < catalogue.length; i++) {
   let ct = catalogue[i].title;
   ct = ct.toLowerCase();
   const t = title.toLowerCase();
   if(ct.includes(t)){
    let quantity = catalogue[i].quantity;
    if(quantity > 10){
      result = "High Stock";
    } else if (quantity <= 10 && quantity > 5){
      result =  "Medium Stock";
    } else if (quantity <= 5 && quantity > 0){
      result = "Low Stock";
    } else {
      result =  "Not in Stock";
    }
   }
  }
  return result;
}

module.exports = {
  checkBook,
  countBooksByKeyword,
  getBooksByAuthor,
  getStockCount,
  stockReview
};