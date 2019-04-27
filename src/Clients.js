import React, {Component} from 'react';
import Table from 'reactstrap/es/Table'


class Clients extends Component{
    constructor() {
        super();

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.getItems();
    }

    getItems() {
        fetch('/admin-api/clients/all')
            .then(results => results.json())
            .then(results => this.setState({todos: results}));
    }

    render() {
        const { todos = [] } = this.state;
        return (
            <div>
                <header>
                    <h2>Clients table</h2>
                    <Table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>first name</th>
                            <th>last name</th>
                            <th>email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todos.length ? todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.firstName}</td>
                                    <td>{todo.lastName}</td>
                                    <td>{todo.email}</td>
                                </tr>
                            ))
                            :
                            (<tr>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>)
                        }
                        </tbody>
                    </Table>
                </header>
            </div>
        );
    }

}

export default Clients;
