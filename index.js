// Your code here
function createEmployeeRecord(args) {
    return { firstName: args[0], familyName: args[1], title: args[2], payPerHour: args[3], timeInEvents: [], timeOutEvents: [] }
}

function createEmployeeRecords(employees) {
    return employees.map(employee => {
        return createEmployeeRecord(employee);
    });
}

function timeObj(time, type) {
    return { date: time.split(' ')[0], hour: Number.parseInt(time.split(' ')[1]), type: type }
}

function createTimeInEvent(employee, time) {
    employee.timeInEvents.push(timeObj(time, 'TimeIn'));
    return employee
}

function createTimeOutEvent(employee, time) {
    employee.timeOutEvents.push(timeObj(time, 'TimeOut'));
    return employee
}

function findTime(date) {

}
function hoursWorkedOnDate(employee, date) {
    const timeOut = employee.timeOutEvents.find(event => event.date == date);
    const timeIn = employee.timeInEvents.find(event => event.date == date);
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(employee, date) {
    return employee.payPerHour * hoursWorkedOnDate(employee, date)
}

function allWagesFor(employee) {
    const dates = employee.timeInEvents.map(event => {
        return event.date;
    });
    return dates.reduce((sum, date) => sum + wagesEarnedOnDate(employee, date), 0)
}

function calculatePayroll(employees) {
    return employees.reduce((sum, employee) => sum + allWagesFor(employee), 0)
}

function findEmployeeByFirstName(employees, name) {
    return employees.find(employee => employee.firstName == name)
}