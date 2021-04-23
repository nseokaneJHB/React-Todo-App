import { MDBBtn, MDBInput } from 'mdbreact';
import { v4 as id } from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
	const inputChange = (e) => {
		setInput(e.target.value)
	}

	const clearInput = () => {
		setInput("");
	}

	const addTask = (e) => {
		e.preventDefault();
		
		if (!editTodo) {
			setTodos([...todos, { id: id().slice(0, 8), task: input, isComplete: false }])
		}else{
			updateTask({...editTodo, task: input})
			setEditTodo(null)
		}
		clearInput()
	}

	const updateTask = (task) => {
		setTodos(todos.map((todo) => {
			if (todo.id === task.id) {
				return {...todo, task: task.task}
			}
			return todo
		}))

	}

	return (
		<form onSubmit={addTask}>
			<div className="text-white">
				<MDBInput 
					type="text" 
					label="Your task" 
					icon="clipboard-check" 
					className="text-white"
					required
					value={input}
					onChange={inputChange}
				/>
			</div>
			
			<div className="group-btns">
				<MDBBtn outline color="warning" size="sm" onClick={clearInput}>Clear</MDBBtn>
				<MDBBtn type="submit" color="success" size="sm">Submit</MDBBtn>
			</div>
		</form>
	)
}

export default Form
