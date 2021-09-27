import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  VerificationCodeForm from './views/verification';
import  SuccessPage from './components/common/SuccessPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={VerificationCodeForm} />
                <Route path='/success' component={SuccessPage} />
            </Switch>
        </Router>
    );
}

export default App;
