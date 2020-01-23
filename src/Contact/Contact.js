import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './style'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
                 name:'',
                 email:'',
                 subject:'',
                 message:''
        }
    }

    handleChange=(e,params)=>{
        this.setState({[params]:e.target.value})
    }
   
    handleSubmit=(e)=> {
        e.preventDefault()
        const { name, email, subject, message } = this.state
        let templateParams = {
          from_name: email,
          to_name: '<YOUR_EMAIL_ID>',
          subject: subject,
          message_html: message,
         }
         emailjs.send(
          'gmail',
          'template_gQFwtmji',
           templateParams,
          'user_7UwSAilg4P9hXvN4U0IYH'
         )
         this.resetForm()
     }
    resetForm() {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      }
    render() {
        const { classes } = this.props;
        
        return (
            <Card className={classes.card} variant="outlined">
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Contact Us 
          </Typography>
          <TextField
          className={classes.textField}
          required
          id="filled-required"
          label="Name"
          defaultValue="Name"
          variant="outlined"
          value={this.state.name}
          onChange={(e)=>this.handleChange(e,'name')}
        />
         <TextField
         className={classes.textField}
          required
          id="filled-required"
          label="Email"
          defaultValue="Email"
          variant="outlined"
          value={this.state.email}
          onChange={(e)=>this.handleChange(e,'email')}
        />
         <TextField
         className={classes.textField}
          required
          id="filled-required"
          label="Subject"
          defaultValue="Subject"
          variant="outlined"
          value={this.state.subject}
          onChange={(e)=>this.handleChange(e,'subject')}
        />
         <TextField
         className={classes.textField}
          required
          id="filled-required"
          label="Message"
          defaultValue="Message"
          variant="outlined"
          value={this.state.message}
          onChange={(e)=>this.handleChange(e,'message')}
        />
            <CardActions>
              <Button
               disabled={!this.state.email && !this.state.message && !this.state.subject && !this.state.name}
              variant="contained" color="primary" size="large" onClick={(e)=>this.handleSubmit(e)}>Submit</Button>
            </CardActions>
            </CardContent>
          </Card>
        );
    }
}

export default (withStyles(styles)(Contact));