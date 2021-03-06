import React from "react";
import { useState } from "react";

function Form() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        alert(`Usuario ${name} Cadastrado! \nSenha: ${password}`)
        setName("")
        setPassword("")
    }

    return (
        <div>
            <h1>Cadastro: </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite seu nome: " />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form