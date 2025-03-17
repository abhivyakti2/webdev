// User Constructor 
function User(name, email, joinDate) {
    this.name = name;
    this.email = email;
    this.joinDate = joinDate;
}

// Common method for all users
User.prototype.formatJoinDate = function() {
    this.joinDate= new Date(this.joinDate).toDateString(); // Converts date to readable format
    return this.joinDate;
};

// Student Constructor
function Student(name, email, joinDate, course, batchId) {
    User.call(this, name, email, joinDate); 
    this.course = course;
    this.batchId = batchId;
}

// Inherit from User
Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

// Method to calculate progress (Dummy)
Student.prototype.calculateProgress = function() {
    return `${this.name} is 60% done with the ${this.course} course.`;
};

// Teacher Constructor
function Teacher(name, email, joinDate, specialization, coursesTeaching) {
    User.call(this, name, email, joinDate); 
    this.specialization = specialization;
    this.coursesTeaching = coursesTeaching; // Array 
}

// Inherit from User
Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;

// Method to calculate teaching load 
Teacher.prototype.calculateTeachingLoad = function() {
    return `${this.name} is teaching ${this.coursesTeaching.length} courses.`;
};

// Example Usage
const student1 = new Student("Aashish", "aashish@example.com", "2024-01-10", "Web Development", "Batch-101");
const teacher1 = new Teacher("Briana", "briana@example.com", "2022-09-15", "JavaScript", ["JS Basics", "React"]);

console.log(student1.formatJoinDate()); 
console.log(student1.calculateProgress()); 

console.log(teacher1.formatJoinDate()); 
console.log(teacher1.calculateTeachingLoad()); 
