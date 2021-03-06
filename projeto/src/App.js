import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import UserForm from './components/Form.jsx'
import Condicional from './components/Condicional';

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
            <h1>Testando eventos</h1>
            <Evento/>
            <UserForm/>
            <h1>Renderização Condicional</h1>
            <Condicional/>
		</div>
  	);
}

export default App;
