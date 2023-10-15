import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {

constructor() {
  super()
  this.state = {
    robots: [],
    searchField: ''
  }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots: users}));
}

onSearchChange = (event)=>{
  this.setState({ searchField: event.target.value})
}

  render (){

    const filterRobots = this.state.robots.filter(robot =>{
    return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
  })

    return (
     <div className='tc'>
      <h1 className='f1'>ROBOFRIENDS</h1>
      <SearchBox searchChange={this.onSearchChange} />
     
       <ErrorBoundry>
         <CardList robots={filterRobots}/>
       </ErrorBoundry>

     </div>
    );
  }
}
export default App;