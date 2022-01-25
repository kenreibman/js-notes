// Constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Prototype method (getSummary)
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// get the title of the book by doing...
console.log(book1.title);
// get the summary of the book by doing...
console.log(book2.getSummary);

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

console.log(book2.getAge());

// Revise / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Revised and manipulate the data
console.log(book2);
book2.revise('2018');
console.log(book2);

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');