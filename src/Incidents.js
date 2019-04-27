import React, {Component} from 'react';
import Table from 'reactstrap/es/Table'

class Incidents extends Component{
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
        fetch('/admin-api/incidents/all')
            .then(results => results.json())
            .then(results => this.setState({todos: results}));
    }

    render() {
        const { todos = [] } = this.state;
        return (
            <div>
                <header>
                    <h2>Incidents table</h2>
                    <Table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>unit ID</th>
                            <th>client ID</th>
                            <th>latitude</th>
                            <th>longitude</th>
                            <th>incident time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todos.length ? todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.unit.id}</td>
                                    <td>{todo.client.id}</td>
                                    <td>{todo.latitude}</td>
                                    <td>{todo.longitude}</td>
                                    <td>{todo.createTime}</td>
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

export default Incidents;
