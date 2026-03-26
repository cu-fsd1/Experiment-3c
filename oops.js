// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name}, Age: ${this.age}`;
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // call parent constructor
    this.grade = grade;
  }

  getDetails() {
    return `${super.getDetails()}, Grade: ${this.grade}`;
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); // call parent constructor
    this.subject = subject;
  }

  getDetails() {
    return `${super.getDetails()}, Subject: ${this.subject}`;
  }
}

// Creating objects
const student1 = new Student("Rahul", 20, "A");
const teacher1 = new Teacher("Mr. Sharma", 40, "Mathematics");

// Displaying output
console.log("Student Details:");
console.log(student1.getDetails());

console.log("\nTeacher Details:");
console.log(teacher1.getDetails());