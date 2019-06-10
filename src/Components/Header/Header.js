import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Segment, Menu } from 'semantic-ui-react'


const Header = () => {
    return (
        <Segment>
            <Menu>
                <Menu.Item as={Link} to='/'>Home</Menu.Item>
                <Menu.Item as={Link} to='/category'>Category</Menu.Item>
                <Menu.Item as={Link} to='/contact_us'>Contact Us</Menu.Item>
                <Menu.Item as={Link} to='/admin'>Admin</Menu.Item>
            </Menu>
        </Segment>
    );
}

export default Header;