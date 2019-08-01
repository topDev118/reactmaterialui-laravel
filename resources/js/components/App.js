import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './homepage.css';

export default class App extends Component {
    render() {
        return (
            
            <React.Fragment>
                <NavBar />
                <CssBaseline />
                <Container className="homePage">
                    <Container maxWidth="md">
                     <Typography component="div" className="homeBannerSlogan" >Field Sales<br/>Optimization<br/>Software</Typography>
                    </Container>
                    <Typography component="div"><a href="#section01" className="arrowDown"><img src="/img/down-arrow.png" alt="" /></a></Typography>
                </Container>
            </React.Fragment>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
