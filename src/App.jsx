import { useState } from 'react';
import { MDBCard, MDBCardBody } from "mdbreact";

// Data
import data from './data.json';

// Components
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

const App = () => {

	const [todos, setTodos] = useState(data.tasks)
	const [input, setInput] = useState("")
	const [editTodo, setEditTodo] = useState(null)

	return (
		<div className="app">
			<MDBCard className="card-bg">
				<MDBCardBody>
					<Header />
					<Form
						input={input}
						setInput={setInput}
						todos={todos}
						setTodos={setTodos}
						editTodo={editTodo}
						setEditTodo={setEditTodo}
					/>
				</MDBCardBody>
			</MDBCard>

			<ToDoList
				todos={todos}
				setTodos={setTodos}
				setEditTodo={setEditTodo}
				setInput={setInput}
			/>
		</div>
	)
}

export default App
