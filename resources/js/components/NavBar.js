import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';


const NavBar = () => {
    return (
        <div className="container">
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
                <div>
                    <img style={{width:'209px',height:'100px'}} src="/img/logo.png" alt="Logo" />
                    <div className="loginBtn">
                        <Button variant="outlined" color="primary">
                            Login
                        </Button>
                        <Button variant="contained" color="primary" className="requestDemoBtn">
                            Request Demo
                        </Button>
                        
                    </div>
                </div>
            </AppBar>
        </div>
    )
}
export default NavBar;