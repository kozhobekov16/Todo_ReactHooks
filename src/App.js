import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

const App = () => {
    const users = {
        firstName: '',
        lastName: '',
        salary: '',
        id: Date.now()
    }
    const getUsers = () => {
        const data = localStorage.getItem('users')
        if (data) {
            return JSON.parse(data)
        } else {
            return []
        }
    }
    const [text, setText] = useState(users)
    const [dataUsers, setDataUsers] = useState([getUsers()])
    const onsubmit = e => {
        e.preventDefault()
    }
    const addContact = () => {
        setDataUsers([...dataUsers, text])
        setText(users)
    }
    const removeContact = (id) => {
        setDataUsers(dataUsers.filter(item => item.id !== id))
    }
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(dataUsers))
    }, [dataUsers])
    return (
        <div className='main'>
            <h1 className="text-white">Contact List</h1>
            <form onSubmit={onsubmit} className='add'>
                <input
                    type="text" placeholder='First name'
                    value={text.firstName}
                    onChange={e => setText(prevState => ({
                        ...prevState,
                        firstName: e.target.value
                    }))}
                />
                <input type="text" placeholder='Last name'
                       value={text.lastName}
                       onChange={e => setText(prevState => ({
                           ...prevState,
                           lastName: e.target.value
                       }))}/>
                <input type="text" placeholder='Salary'
                       value={text.salary}
                       onChange={e => setText(prevState => ({
                           ...prevState,
                           salary: e.target.value
                       }))}
                />
                <button onClick={addContact}>+</button>
            </form>
            <table>
                <thead>
                <p className='count'>Количество контактов: {dataUsers.length}</p>
                <tr>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Salary</th>
                </tr>
                </thead>
                <tbody>
                {dataUsers.map(item => (
                    <tr key={`${item.id}_${item.name}`}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.salary}$</td>
                        <button onClick={() => removeContact(item.id)}>-</button>
                    </tr>
                ))}
                </tbody>
                <button style={{marginTop: '5px'}} onClick={() => setDataUsers([])}>Remove All</button>
            </table>
        </div>
    );
};

export default App;
