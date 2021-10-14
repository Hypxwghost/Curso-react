import React from "react";
import { useState } from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        alert(`Usuario ${name} Cadastrado! \nSenha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

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
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite seu nome: " />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                    type="password"
                    name="password"
                    id="password"
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