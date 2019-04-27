import React, {Component} from 'react';
// import axios from 'axios';
import Table from 'reactstrap/es/Table'


class Units extends Component {
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
        fetch('/admin-api/units/all')
            .then(results => results.json())
            .then(results => this.setState({todos: results}));
    }

    render() {
        const { todos = [] } = this.state;
        return (
            <div>
                <header>
                    <h2>Units table</h2>
                    <Table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>email</th>
                            <th>latitude</th>
                            <th>longitude</th>
                            <th>available</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todos.length ? todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.email}</td>
                                    <td>{todo.latitude}</td>
                                    <td>{todo.longitude}</td>
                                    <td>{todo.available.toString()}</td>
                                </tr>
                            ))
                            :
                            (<tr>
                                <td>-</td>
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

export default Units;
