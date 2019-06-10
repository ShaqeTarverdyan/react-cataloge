import React from 'react';
import { Segment  } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import AdminMain from '../Admin/Categories/index';
import AddCategory from './Categories/AddCategory';
import AddProduct from './Categories/AddProduct';

const Admin = () => {
    return (
        <Router>
            <Segment>
                 <AdminMain />
            </Segment>

            <Route  path='/addCategory' exact component={AddCategory}/>
            <Route  path='/addProduct' exact component={AddProduct}/>
        </Router>

    )
}

export default Admin;