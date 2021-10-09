import React from "react";
import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Koennigsegg" ano_lancamento={2000}/>
                <Item marca="Ford" ano_lancamento={1987}/>
                <Item marca="Mclaren" ano_lancamento={1999}/>
                <Item/>
            </ul>
        </>
    )
}

export default List