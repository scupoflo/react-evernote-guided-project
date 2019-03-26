import React, { Fragment } from 'react';

const GoalViewer = (props) => {

  console.log(props)
  return (
    <Fragment>
      <h2>{props.clickedGoal.title}</h2>
      <img className= "image"
        alt= ""
        style={{height: "50%", width: "35%"}}
        src={props.clickedGoal.picture} />
      <p>{props.clickedGoal.body}</p>
      <p>{props.clickedGoal.priority}</p>
      <p>{props.clickedGoal.deadline}</p>


      <button
        onClick= {()=> props.editHandler(props.clickedGoal)}
        >Edit</button>
    </Fragment>
  );
}

export default GoalViewer;
