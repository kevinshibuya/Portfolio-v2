import React, { useState, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import api from './services/api';

import './App.css';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import Admin from './components/Admin/Admin';

function App() {

    async function handleAddProject(data) {
        const response = await api.post()
    }

    return (
        <Router>
            <Scrollbars
                style={{ height: '100vh' }}
            >
                <Switch>
                    <Route exact path="/">
                        <div className="wrapper">
                            <Landing/>
                            <Projects/>
                        </div>
                    </Route>
                    <Route exact path="/admin">
                        <Admin/>
                    </Route>
                </Switch>
            </Scrollbars>
        </Router>
    );
}

export default App;
