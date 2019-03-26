import React, { Component } from 'react';

class GoalEditor extends Component {
  render() {
    return (
      <form className="goal-editor">
        <input type="text" name="title" /> {this.props.clickedGoal.title}
        <img
          alt= "" src={this.props.clickedGoal.picture} />
        <textarea name="body" />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button
            onClick= {()=>this.props.handleCancelEdit(this.props.editGoal)}
            type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GoalEditor;
