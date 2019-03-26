import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class GoalsContainers extends Component {
  constructor(){
    super()
    this.state={
      clickedGoal: null,
      clickedToView: false,
      editGoal:{},
      searchTerm: "",
      matchingSearchArray: [],
      clickedToCreate: false
      // priorityLevel:"",
      // filteredPriority:[],
      // filteredDeadline:[],
      // deadlineLevel: ""
    }
  }


//Create New Goal Functions

createNewGoal= () => {
  console.log('attempting to make new goal')
  return this.setState({clickedToCreate: !this.state.clickedToCreate})
}



//Search Container Functions
  handleSearch = (e) => {
    e.persist()
    this.setState({
      searchTerm: e.currentTarget.value
    })
    this.displayMatchingSearchArray()
  }

  displayMatchingSearchArray = () => {
    let newArr = this.props.allGoals.filter(goal => goal.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    if(this.state.searchTerm.length < 1){
      this.setState({matchingSearchArray:this.props.allGoals})
    } else {
      this.setState({
        matchingSearchArray: newArr
      })
    }   
  }

// GoalViewer Functions

  handleClick = (e) => {
    // console.log(e.target.name)
    let newArr= this.props.allGoals.filter(goal =>
      goal.title === e.target.name)
      this.setState({
        clickedGoal: newArr[0],
        clickedToView: true
      })
      // console.log(this.state.clickedGoal)
  }

//Edit Container Functions
  editHandler = (goalObj) => {
    this.setState({editGoal:goalObj})
  }

  handleCancelEdit = (editGoalObj) => {
    this.setState({
      editGoal: {},
      clickedToView: false
    })
  }

 

  render() {
    return (
      <Fragment>
          <Search
            searchTerm={this.state.searchTerm}
            handleSearch={this.handleSearch}
          />
        <div className='container'>
          <Sidebar
            displayMatchingSearchArray={this.displayMatchingSearchArray}
            allGoals={this.props.allGoals}
            handleClick={this.handleClick}
            handleRemoveGoal={this.props.handleRemoveGoal}
            filteredText= {this.state.searchTerm}
            matchingSearchArray= {this.state.matchingSearchArray}
            handleMakeNewGoalClick={this.createNewGoal}
          />

        <Content
          editHandler={this.editHandler}
          clickedToView={this.state.clickedToView}
          clickedGoal={this.state.clickedGoal}
          editGoal={this.state.editGoal}
          handleCancelEdit={this.handleCancelEdit}
          createNewGoal={this.state.clickedToCreate}
          selectedUser={this.props.selectedUser}
          allGoals={this.props.allGoals}
          handleAddNewGoal={this.props.handleAddNewGoal}
          />
        </div>
      </Fragment>
    );
  }
}

export default GoalsContainers;
