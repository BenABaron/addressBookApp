import './App.css';
import ContactList from './components/contactList/ContactList'
import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userList: []
    };
  };

  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
    .then(res => res.json())
    .then(data => this.setState({
      userList: data.results
    }))
    .catch(error => console.error("Error has occured. Error: ", error))
  }

  render() {

    return (
      <div>
        
      </div>
    );
  }

}

/**
 * use axios to get data from api
 * 
 */