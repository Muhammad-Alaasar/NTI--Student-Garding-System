const yargs = require('yargs')
const students = require('./functions')

yargs.command({
    command: 'add',
    desribe: 'Add a Student',
    builder: {
        id: {
            desribe: 'Student ID',
            type: 'number',
            demandOption: true
        },
        name: {
            desribe: 'Student Name',
            type: 'string',
            demandOption: true
        },
        degrees: {
            desribe: 'Student Degrees',
            type: 'array',
            demandOption: true
        },
        comment: {
            desribe: 'Student Comment',
            type: 'string',
            demandOption: false
        }
    },
    handler: () => students.addStudent(yargs.argv.id, yargs.argv.name, yargs.argv.degrees, yargs.argv.comment)
})

yargs.command({
    command: 'delete',
    desribe: 'Delete a Student by ID',
    builder: {
        id: {
            desribe: 'Student ID',
            type: 'number',
            demandOption: true
        }
    },
    handler: () => students.deleteStudent(yargs.argv.id)
})

yargs.command({
    command: 'read',
    desribe: 'Read a Student by ID',
    builder: {
        id: {
            desribe: 'Student ID',
            type: 'number',
            demandOption: true
        }
    },
    handler: () => students.readStudent(yargs.argv.id)
})

yargs.command({
    command: 'list',
    desribe: 'Students List',
    handler: () => students.listStudents()
})

yargs.command({
    command: 'update',
    desribe: 'Update a Student by ID',
    builder: {
        id: {
            desribe: 'Student ID',
            type: 'number',
            demandOption: true
        },
        name: {
            desribe: 'Student name',
            type: 'string',
            demandOption: true
        }
    },
    handler: () => students.updateStudent(yargs.argv.id, yargs.argv.name)
})

// console.log(yargs.argv)
yargs.parse()