class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year =  year;
    }

    getSummary () {
        return `${this.title} was written by ${this.author} in ${this.year};`
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    // static = you don't need to instantiate it.
    static topBookStore() {
        return 'Barnes & Nobile';
    }
}

// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 =  new Magazine('Mag One', 'John Doe', '2018', 'Jan');
console.log(mag1.getSummary());