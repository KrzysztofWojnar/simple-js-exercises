/**
 * Task 3_1
 * Write type guards for the following types
 */


//------- Data to task -------------

export type SchoolPerson = Teacher | Student | SchoolPrincipal;

export type Teacher = {
    name: string,
    supervisor: string
    teach: boolean
}

export type Student = {
    name: string,
    supervisor: string,
    learn: boolean
}

export type SchoolPrincipal = {
    name: string,
    teach: boolean
}

//-------- Space for your code -----------

const getPersonData = (person: SchoolPerson): string => {


});

//---------- Test ------------

const person1: SchoolPerson = {
    name: "Jane Doe",
    teach: true
}

const person2: SchoolPerson = {
    name: 'Margo Williams',
    supervisor: 'Jane Doe',
    teach: true
}

const person3: SchoolPerson = {
    name: 'Kevin McMillan',
    supervisor: 'Margo Williams',
    learn: true
}

console.log(getPersonData(person1));
console.log(getPersonData(person2));
console.log(getPersonData(person3));
