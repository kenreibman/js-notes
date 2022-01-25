// object literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`; 
        //this refers to the specific object
    }
};

console.log(book1.getSummary);

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`; 
        //this refers to the specific object
    }
};

console.log(book2.getSummary);

// console.log(Object.values(book2)); --> gives array of values inside the object
// console.log(Object.keys(book2)); --> gives keys inside object.