/**
 * Task 3_1
 * Write type guards for the following types and write method which return role and name of the person.
 * Example output:
 * Teacher, Jane Doe
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

//-----------------------------------

function isTeacher(person: SchoolPerson): person is Teacher {
    return ((person as Teacher).teach !== undefined && (person as Teacher).supervisor !== undefined);
}

function isStudent(person: SchoolPerson): person is Student {
    return (person as Student).learn !== undefined;
}

const getPersonData = (person: SchoolPerson): string => {
    if(isStudent(person)) {
        return `Student, ${person.name}`;
    } else if (isTeacher(person)) {
        return  `Teacher, ${person.name}`;
    } else {
        return `School Principal, ${person.name}`
    }
}

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