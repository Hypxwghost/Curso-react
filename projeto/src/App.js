import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
    const nome = 'Maria'
  	return (
		<div className="App">
            <HelloWorld/>
            <SayMyName nome='Khalli'/>
            <SayMyName nome={nome}/>
            <Pessoa nome='Khalli'
                    idade='19'
                    profissao='Dev'
                    foto='foto.jpg'
            />
            <List/>
		</div>
  	);
}

export default App;
