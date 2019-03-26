import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const GoalItem = (props) => (
  <Card>
    <Image 
      src={props.goal.picture}
      alt= " "
      name={props.goal.title}
      onClick={(e)=>props.handleClick(e)}
      className="card-img-top" />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);




export default GoalItem;

{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
{/* <div className="card" style={{width: '18rem'}}>
    <img src={props.goal.picture}
      alt= " "
      name={props.goal.title}
      style={{height: "100%", width: "50%"}}
      onClick={(e)=>props.handleClick(e)}
      className="card-img-top"></img> 
    <div className="card-body"
      onDoubleClick={() => props.handleRemoveGoal(props.goal)}>
    <h5 className="card-title">{props.goal.title}</h5>
    <p className="card-text">{props.goal.deadline}</p>
    </div>
  </div> */}