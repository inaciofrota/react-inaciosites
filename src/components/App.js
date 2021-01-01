import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Layout from './Layout';
import ScrollEvents from './ScrollEvents'

export default function App() {
    return (
        <Router>
            <ScrollEvents />
            <Layout />
        </Router>
    )
}