import React from "react";
//import Item from "./Item";

const initialList = [];

function List() {
    const [list, setList] = React.useState(initialList);
    const [name, setName] = React.useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleAdd(e) {
        e.preventDefault()
        if (name !== '') {
            const newList = list.concat({name});
            setList(newList);
            setName('');
        } else {
            alert('Preencha o campo!');
        }
    }

    function limpaLista() {
        setList(initialList);
    }

    return (
        <>
            <h1>Minha Lista</h1>
            <form>
            <div>
                <label htmlFor="name">
                    <input type="text" value={name} placeholder='Valor' onChange={handleChange} />
                </label>
            </div>
            <div>
                <button type="submit" onClick={handleAdd}>Adicionar</button>
            </div>
            </form>
            { list[0] && (
                <div>
                    <button onClick={limpaLista}>Limpar lista</button>
                </div>
            )}
            <ul>
                {list.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default List