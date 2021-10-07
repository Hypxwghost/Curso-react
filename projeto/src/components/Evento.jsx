import Button from "./eventos/Button";

function Evento() {
    function meuEvento(e) {
        alert('Ativado! [1]');
        e.target.style.color = 'red';
    }

    function segundoEvento() {
        alert('Segundo evento !')
    }

    return(
        <div>
            <p>Clique para dispara um Evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo evento"></Button>
        </div>
    )
}

export default Evento