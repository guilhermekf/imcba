import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ContactUsForm from './Components/form';

const App = () => (
    <>
        <div className="col-sm-6 col-sm-offset-3 col-xs-12">
            <div className="page-header">
                <h1>Contact Us</h1>
            </div>
            <Router>
                <ContactUsForm />
            </Router>
        </div>
    </>
);

export default App;