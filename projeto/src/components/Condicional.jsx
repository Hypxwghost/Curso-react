import React, { useState } from "react"

function Condicional() {

    function enviarEmail(e) {
        e.preventDefault()
        alert('funciona')
    }
    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input type="email" placeholder="Digite o seu email..." id="" />
                <button type="submit" onClick={enviarEmail}>Enviar-email</button>
            </form>
        </div>
    )
}

export default Condicional