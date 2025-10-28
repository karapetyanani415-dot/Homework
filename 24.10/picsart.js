class PicsartAcademy {
    constructor() {
        this.classroom = new Classroom();
        this.library = new Library();
        this.kitchen = new Kitchen();
    }
    showInfo() {
        console.log("Picsart Academy has:");
        console.log(this.classroom.roomNumber + "classroom with students: " + this.classroom.students.join(","));
        var bookTitles = [];
        for (var i = 0; i < this.library.books.length; i++) {
            bookTitles.push(this.library.books[i].title);
        }
        console.log("Library with books: " + bookTitles.join(","));
        console.log("Kitchen with workers: " + this.kitchen.staff.join(","));
    }
}

class Classroom {
    constructor(roomNumber) {
        this.roomNumber = roomNumber;
        this.students = [];
    }
    addStudent(name) {
        this.students.push(name);
    }
    listStudents() {
        console.log("Students: " + this.students.join(","));
    }
}

class Kitchen {
    constructor() {
        this.staff = [];
    }
    addWorker(name) {
        this.staff.push(name);
    }
    listWorkers() {
        console.log("Workers: " + this.staff.join(","));
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    addBook(title, author) {
        this.books.push({ title: title, author: author });
    }
    listBooks() {
        for (var i = 0; i < this.books.length; i++) {
            console.log(this.books[i].title + " by " + this.books[i].author);
        }
    }
}
var academy = new PicsartAcademy();
academy.classroom.addStudent("Alice");
academy.classroom.addStudent("James");
academy.library.addBook("Clean Code", "Robert C. Martin");
academy.library.addBook("JavaScript: The Good Parts", "Douglas Crockford");
academy.kitchen.addWorker("Chef Bob");
academy.kitchen.addWorker("Mike");

academy.showInfo();
