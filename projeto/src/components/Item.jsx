import React from "react";
import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return (
        <>
            {marca} - {ano_lancamento}
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 'Faltou o ano',
}

export default Item