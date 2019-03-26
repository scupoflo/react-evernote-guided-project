import React, { Component } from 'react';
import Header from './Header';
import GoalsContainers from './GoalsContainers';

class App extends Component {
  constructor(){
    super()
      this.state= {
      allUsers:[],
      selectedUser:{},
      selectedUserGoals: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/users')
    .then(resp=> resp.json())
    .then(allUsersData => this.setState({
        allUsers: allUsersData,
        selectedUser: allUsersData[0],
        selectedUserGoals: allUsersData[0].goals
    }))
  }

  handleAddNewGoal = (newGoal) => {
    this.setState({
      selectedUserGoals: [...this.state.selectedUserGoals,newGoal]
    })cd
  }

  handleRemoveGoal = (e) => {
    console.log(e)
    console.log('trying to remove')
    let data= this.state.selectedUserGoals.find(goal=> goal.title === e.title)
    console.log(data)
    fetch(`http://localhost:3000/api/v1/goals/${data.id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(data)
    }).then(res=> res.json())
    .then(newArr => {
    this.setState({
      selectedUserGoals: this.state.selectedUserGoals.filter(goal => goal.title !== e.title)
    })})
  }
    
  

  render() {
    return (
      <div className="app">
        <Header selectedUser={this.state.selectedUser}/>
        <GoalsContainers
          selectedUser={this.state.selectedUser}
          allGoals={this.state.selectedUserGoals}
          handleAddNewGoal={this.handleAddNewGoal}
          handleRemoveGoal={this.handleRemoveGoal}/>
      </div>
    );
  }
}

export default App;
