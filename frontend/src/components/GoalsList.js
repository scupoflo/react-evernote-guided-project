import React from 'react';
import GoalItem from './GoalItem';

const GoalsList = (props) => {
  return (
    <ul>
      {(props.filteredText.length === 0) ? 
        props.allGoals.map(goal=>
          <GoalItem
            key={goal.id}
            goal={goal}
            handleClick={props.handleClick}
            handleRemoveGoal={props.handleRemoveGoal}
          />
      )
        : 
        props.matchingSearchArray.map(goal =>
              <GoalItem
                key={goal.id}
                goal={goal}
                handleClick={props.handleClick}
                handleRemoveGoal={props.handleRemoveGoal}
              />
          )
      }
    </ul>
  )
}

export default GoalsList;
