import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom'
import Units from './Units';
import Clients from './Clients';
import Incidents from './Incidents';

class Dashboard extends Component {

    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/Units'/>
        }
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Link to={Units}/>
                <button onClick={this.setRedirect}>unit page</button>
                <Link to={'./Clients'}/>
                <button>Clients page</button>
            </div>
        )
    }
}

export default Dashboard;
