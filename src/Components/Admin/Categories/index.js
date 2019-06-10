import React from 'react';
import { Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AdminMain = () => {
    return (
        <Segment.Group>
            
            <Link to='/addCategory'>
                <Segment>
                    Add Category
                </Segment>
            </Link>

            <br />
            <Link to='/addProduct'>
                <Segment>
                    Add Product
                </Segment>
            </Link>
        
        </Segment.Group>

    )
}


export default AdminMain;