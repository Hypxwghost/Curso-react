function Evento() {

    function meuEvento(e) {
        alert('Ativado!');
        e.target.style.color = 'red';
    }
    return(
        <div>
            <p>Clique para dispara um Evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento