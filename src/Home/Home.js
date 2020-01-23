import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './style'
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Image1 from '../../src/Assests/Images/Image1.jpg'
class Home extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render() {
    const {classes} = this.props
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>A simple app showing react button click navigation</p>
      
          <form className={classes.rootForm}>
         <CardMedia
        className={classes.media}
        image={Image1}
        title="Paella dish"
      />
            <Button variant="btn btn-success" onClick={() => history.push('/Contact')}>Click button to navigate to Contact Page</Button>
          </form>
        </div>
      </div>
    );
  }
}
export default (withStyles(styles)(Home))
