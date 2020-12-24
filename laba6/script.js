const students = [
    { 'Name': 'Artem', 'Surname': 'Shiroky', 'Age': 18, 'AverageMark': 6.3 },
    { 'Name': 'John', 'Surname': 'Cena', 'Age': 43, 'AverageMark': 10 },
    { 'Name': 'Bill', 'Surname': 'Gates', 'Age': 65, 'AverageMark': 4.0 },
    { 'Name': 'Mark', 'Surname': 'Hamill', 'Age': 69, 'AverageMark': 9.0 }
];

function StudentTable(props) {
    const { students } = props;
    return (
        <table border={1} cellPadding={10}>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Mark</th>
            </tr>
            {students.map((student, i) => <StudentRow student={students[i]} />)}
        </table>
    );
}

function StudentRow(props) {
    const { student } = props;

    return (
        <tr style={{ background: props.color }}>
            <td>{student.Name}</td>
            <td>{student.Surname}</td>
            <td>{student.Age}</td>
            <td>{student.AverageMark}</td>
        </tr>
    );
}

ReactDOM.render(
    <StudentTable students={students} />,
    document.getElementById('app')
)