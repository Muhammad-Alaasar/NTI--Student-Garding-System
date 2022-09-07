const fs = require('fs')

const loadStudents = () => {
    try {
        const students = fs.readFileSync('students.json').toString()
        const studentsObject = JSON.parse(students)
        return studentsObject
    } catch (e) {
        return []
    }
}

const saveStudents = (students) => {
    const jsonStudents = JSON.stringify(students)
    fs.writeFileSync('students.json', jsonStudents)
}

const addStudent = (id, name, degrees, comment = "") => {
    const students = loadStudents()
    const existingStudent = students.find(s => s.id === id)
    if (!existingStudent) {
        let degreesTotal = 0
        degrees.forEach(i => degreesTotal += i)
        students.push({
            id,
            name,
            degrees,
            comment,
            total: degreesTotal
        })
        saveStudents(students)
        console.log('Student information was saved')
    } else {
        console.log('There is a student who has this id')
    }
}

const deleteStudent = (id) => {
    const students = loadStudents()
    const existingStudent = students.find(s => s.id === id)
    if (existingStudent) {
        const newStudents = students.filter(s => s.id !== id)
        saveStudents(newStudents)
        console.log("This student has been deleted", existingStudent)
    } else {
        console.log("There is no student for this id")
    }
}

const readStudent = (id) => {
    const students = loadStudents()
    const existingStudent = students.find(s => s.id === id)
    existingStudent ? console.log(existingStudent) : console.log("There is no student for this id")
}

const listStudents = () => {
    const students = loadStudents()
    if (students.length) {
        students.forEach(s => console.log(s))
    } else {
        console.log('List is empty!')
    }
}

const updateStudent = (id, name) => {
    const students = loadStudents()
    const existingStudent = students.find(s => s.id === id)
    if (existingStudent) {
        const newStudents = students.map(s => {
            if (s.id === id) s.name = existingStudent.name = name
            return s
        })
        saveStudents(newStudents)
        console.log('Student updated to', existingStudent)
    } else {
        console.log("There is no student for this id")
    }
    /**
     * Another Logic
     */
    // const students = loadStudents()
    // const existingStudent = students.find(s => s.id === id)
    // if (existingStudent) {
    //     existingStudent.name = name
    //     const newStudents = students.filter(s => s.id !== id)
    //     newStudents.push(existingStudent)
    //     saveStudents(newStudents)
    //     console.log('Student updated to', existingStudent)
    // } else {
    //     console.log("There is no student for this id")
    // }
}

module.exports = {
    addStudent,
    deleteStudent,
    readStudent,
    listStudents,
    updateStudent
}