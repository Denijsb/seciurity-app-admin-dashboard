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
                <ul>
                    <li><Link to={'./Units'}>units page</Link></li>
                    <li><Link to={'./Clients'}>clients page</Link></li>
                    <li><Link to={'./Incidents'}>incidents page</Link></li>
                </ul>
            </div>
        )
    }
}

export default Dashboard;
