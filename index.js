function App() {
	const [todos, setTodos] = React.useState([
		{ text: "learn react", isCompleted: false },
		{
			text: "meet friend for lunch",
			isCompleted: false,
		},
		{
			text: "build todo app",
			isCompleted: false,
		},
		{
			text: "run 4 miles",
			isCompleted: false,
		},
	]);
	const [value, setValue] = React.useState("");
	const handleSubmit = (e) => {
		e.preventDefault(); //default is to reset the page - which we don't want
		if (!value) return; //if no value then return
		const newTodos = [...todos, { text: value, isCompleted: false }];
		setTodos(newTodos);
		setValue("");
	};
	const removeToDo = (e) => {
		const index = Number(e.target.id); //gives us index position of the one we want to remove
		let temp = [...todos];
		temp.splice(index, 1); //removed just one item using splice at the index re: id
		setTodos(temp); //updated the state using setTodos
	};
	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, i) => (
					<div className="todo" key={i} id={i} onClick={removeToDo}>
						{" "}
						{todo.text}
					</div>
				))}
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="input"
						value={value}
						placeholder="Add Todo..."
						onChange={(e) => setValue(e.target.value)}
					/>
				</form>
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
