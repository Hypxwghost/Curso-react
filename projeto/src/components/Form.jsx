import React, { Component } from 'react';

export default class UserForm extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
      };
    }

    onChange = (e) => {
      /*
        Because we named the inputs to match their
        corresponding values in state, it's
        super easy to update the state
      */
      this.setState({ [e.target.name]: e.target.value });
    }

    cadastrarUsuario = (e, name) => {
        e.preventDefault()
        alert('Usuario ' + name + ' cadastrado!')
    }

    render() {
        const {name} = this.state;
        return (
            <>
                <h1>Formulário</h1>
                <form onSubmit={(e) => this.cadastrarUsuario(e, name)}>
                    <div>
                        <input type="text" 
                                name="name" 
                                onChange={this.onChange}
                                placeholder="Digite seu nome" />
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
            </>
        );
    }
}


// export default Form