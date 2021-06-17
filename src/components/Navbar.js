import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link,NavLink} from 'react-router-dom';
import logo from '../assests/y18.gif';
import './Navbar.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#ff6600',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 0.02,
    },
    linkWraper:{
        flexGrow:1,
    },
    links:{
        marginLeft:3,
        marginRight:3

    },
}));

function Navbar() {

    const classes = useStyles();
 

    return (
        // <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                    <img src={logo} alt="" className='logo' />
                <Typography variant="h6" className={classes.title}>
                    <Link className={classes.links} to="/" >
                        Hacker News
                    </Link>
                </Typography>
                <Typography className={classes.linkWraper}>
                    <NavLink exact className={classes.links} to="/newest" 
                        activeStyle={{
                        color: "white"
                      }}>
                        new
                    </NavLink>
                    |
                    <NavLink className={classes.links} exact to="/past" 
                    activeStyle={{
                        color: "white"
                      }}>
                        past
                    </NavLink>
                    |
                    <NavLink className={classes.links} exact to="/comments" 
                    activeStyle={{
                        color: "white"
                      }}>
                        comments
                    </NavLink>|
                    <NavLink exact className={classes.links} to="/ask" 
                    activeStyle={{
                        color: "white"
                      }}>
                        ask
                    </NavLink>|
                    <NavLink exact className={classes.links} to="/show" 
                    activeStyle={{
                        color: "white"
                      }}>
                        show
                    </NavLink>|
                    <NavLink exact className={classes.links} to="/jobs" 
                    activeStyle={{
                        color: "white"
                      }}>
                        jobs
                    </NavLink>|
                    <NavLink exact className={classes.links} to="/login" 
                    activeStyle={{
                        color: "white"
                      }}>
                        submit
                    </NavLink>
                </Typography>
                <NavLink to="/login" exact 
                activeStyle={{
                        color: "white"
                      }}>
                Login</NavLink>
            </Toolbar>
        </AppBar>
        // </div>
    )
}

export default Navbar
