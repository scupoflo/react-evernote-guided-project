import React, { Component } from 'react';
import GoalsList from './GoalsList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <GoalsList
          allGoals={this.props.allGoals}
          matchingSearchArray= {this.props.matchingSearchArray}
          displayMatchingSearchArray={this.props.displayMatchingSearchArray}
          filteredText= {this.props.filteredText}
          handleClick={this.props.handleClick}
          handleRemoveGoal={this.props.handleRemoveGoal}
          />
        <button 
          onClick={this.props.handleMakeNewGoalClick}> New
        </button>
      </div>
    );
  }
}

export default Sidebar;
