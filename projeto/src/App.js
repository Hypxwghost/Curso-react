import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
	const name = 'Khalli'

	function sum(a, b) {
		return a + b
	}

  	const url = 'logo192.png'

  	return (
		<div className="App">
			<h2>Alterando o JSX</h2>
			<p>Olá, {name}</p>
			<p>Soma: {sum(1, 2)}</p>
			<img src={url} alt="Imagem" />
            <HelloWorld/>
		</div>
  	);
}

export default App;
