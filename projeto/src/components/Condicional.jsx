import React, { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
        setEmail("")
    }

    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input 
                type="email"
                value={email}
                placeholder="Digite o seu email..."
                onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar-email</button>
            </form>
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </div>
    )
}

export default Condicional