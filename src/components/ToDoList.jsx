import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBIcon } from "mdbreact";

function ToDoList({ todos, setTodos, setEditTodo, setInput }) {

	const toggleStatus = (task) => {
		setTodos(todos.map((todo) => {
			if (todo.id === task.id) {
				return {...todo, isComplete: !todo.isComplete}
			}
			return todo
		}))
	}

	const updateTask = (task) => {
		setEditTodo(task)
		setInput(task.task)
	}

	const removingTask = (task) => {
		setTodos(todos.filter((todo) => todo !== task));
	}

	return (
		<>
			{todos.length > 0 && <small className="text-white text-center font-italic text-monospace" style={{padding: "0", margin: "0"}}>NB: Click on the task to mark and unmark complete!</small>}
			{todos.length > 0 ? 
				todos.map((todo) => (
					<MDBCard key={todo.id} className="card-bg small-card">
						<MDBCardBody>
							<MDBRow>
								<MDBCol sm="10" className={ todo.isComplete && "strike"} onClick={() => toggleStatus(todo)}>
									{todo.task}
								</MDBCol>
								<MDBCol sm="2">
									<div className="d-flex justify-content-around" style={{borderLeft: "1px solid white"}}>
										{ !todo.isComplete && 
											<MDBIcon 
												className="cyan-text" 
												far 
												icon="edit"	
												onClick={() => updateTask(todo)} 
											/> 
										}
										<MDBIcon 
											className="red-text" 
											far 
											icon="trash-alt" 
											onClick={() => removingTask(todo)} 
										/>
									</div>
								</MDBCol>
							</MDBRow>
						</MDBCardBody>
					</MDBCard>
				)).reverse()
			: 
				<div className="text-white text-center text-uppercase font-weight-bolder text-monospace">
					<h1>No tasks yet</h1>
					<p>Please add a new task</p>
				</div>
			}
		</>
	)
}

export default ToDoList
