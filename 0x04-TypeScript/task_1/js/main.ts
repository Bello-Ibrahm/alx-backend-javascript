// CREATING AN INTERFACE
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
// EXTENDING AN INTERFACE
interface Directors extends Teacher {
  numberOfReports: number;
}
// CREATING A FUNCTION
const printTeacher = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

// CREATING AN INTTERFACE FOR THE FUNCTION
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
// console.log(printTeacher("Bello", "Ibrahim"));

// WRITING A CLASS
interface StudentConstructor {
  new(firstName: string, lastName: string): Student;
}

interface Student {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = (): string => 'Currently working';
  
  displayName = (): string => this.firstName;
}
const student = new StudentClass("Bello", "ibrahim");
// console.log(student.displayName())
// console.log(student.workOnHomework())

// console.log(student);
