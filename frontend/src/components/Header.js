import React from 'react';

const Header = (props) => {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-item">
          <h2>
            Welcome to GoalGetter {props.selectedUser.name}! GoGetEmGoals!
          </h2>
        </li>
      </ul>
    </div>
  );
}

export default Header;
