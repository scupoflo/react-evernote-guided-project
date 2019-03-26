import React, { Component } from 'react';
import GoalEditor from './GoalEditor';
import GoalViewer from './GoalViewer';
import Instructions from './Instructions';
import CreateNewGoal from './CreateNewGoal';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = () => {

    if (Object.getOwnPropertyNames(this.props.editGoal).length >= 1) {
      return <GoalEditor
        clickedToView={this.props.clickedToView}
        clickedGoal={this.props.clickedGoal}
        handleCancelEdit={this.props.handleCancelEdit} />;
    } else if (this.props.clickedToView === true) {
      return (<GoalViewer
        clickedToView={this.props.clickedToView}
        editHandler={this.props.editHandler}
        clickedGoal={this.props.clickedGoal} />)
    } else if (this.props.createNewGoal === true){
      return (
        <CreateNewGoal  
          selectedUser={this.props.selectedUser}
          allGoals={this.props.allGoals} 
          handleAddNewGoal={this.props.handleAddNewGoal}/>)
    } else{
      return <Instructions />;
    }
  }


  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
