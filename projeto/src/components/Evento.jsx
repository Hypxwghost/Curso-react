import React from "react";
import Button from "./eventos/Button";

function Evento() {
    const [evento, mudaEvento] = React.useState();

    function meuEvento(e) {
        alert('Ativado! [1]');
        e.target.style.color = 'red';
        mudaEvento(1)
    }

    function segundoEvento(e) {
        alert('Segundo evento !');
        e.target.style.color = 'purple';
    }

    return(
        <div>
            <p>Clique para dispara um Evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            { evento && (
                <Button event={segundoEvento} text="Segundo evento"></Button>
            )}
        </div>
    )
}

export default Evento