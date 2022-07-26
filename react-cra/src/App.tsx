import logo from "./logo.svg";
import "./App.css";
import { useCounter } from "./hooks/useCounter";

function App() {
	const { increment, count } = useCounter();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div>
					counter is: <span>{count}</span>
				</div>
				<button onClick={increment}>+</button>
			</header>
		</div>
	);
}

export default App;
