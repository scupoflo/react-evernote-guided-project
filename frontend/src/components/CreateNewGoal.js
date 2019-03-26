import React, {Component} from 'react'
class CreateNewGoal extends Component {
  constructor(props){
    super(props)
    this.state = {
        goals: {
              user_id: props.selectedUser.id,
              title: '',
              picture: '',
              body: '',
              deadline: '',
              priority: ''
            }
    }
  }


  handleChange = event => {
    // console.log(this.state.goals)
    // let copyState= Object.assign({}, this.state.goals, {[event.currentTarget.name]: value} )
    // console.log(this.state.goals)
    // console.log(copyState)
    // console.log(event.currentTarget.name)
    
    const target = event.currentTarget
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    
    this.setState({
      goals: (Object.assign({}, this.state.goals, {[event.currentTarget.name]: value} ))
    })
  }
   
  handleSubmit = event => {
   alert('An essay was submitted: ' + this.state.goals);
    event.preventDefault();
    fetch('http://localhost:3000/api/v1/goals', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.goals)
    }).then(resp => resp.json())
    .then(newGoal => this.props.handleAddNewGoal(newGoal))
  }

  // handelChangeImage = (event) => {

  //   console.log(event.currentTarget.name)
  //   console.log(event.currentTarget.defaultValue)
  //   console.log(event.currentTarget.value)
  //   debugger
  //   let image = event.target.files[0];
  //   let form = new FormData();
  //   // form.append('picture', image);
  //   this.setState({
  //       goals: (Object.assign({}, this.state.goals, {picture: event.currentTarget.value } ))
  //   });
  // }
 
  render() {
    return (
      <form 
        className="goal-editor"
        onSubmit={this.handleSubmit}>
         <label> Set a New Goal!</label>
              <input 
              type="text"
              name="title" 
              placeholder= "Name your goal!"
              onChange={event => this.handleChange(event)} 
              value={this.state.goals.title} />

              <label>
                Notes:
                <br/>
                <br/>
                <textarea 
                value={this.state.goals.body} 
                name="body"
                placeholder= "Add any Notes About Attaining Your Goals!"
                onChange={event => this.handleChange(event)} />
              </label>

              <label>
                Pick your Priority Level:
                <select value={this.state.goals.priority} name= "priority" onChange={event => this.handleChange(event)}>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>

              <input 
              type="numbers" 
              id="deadline"
              name="deadline" 
              placeholder= "What is your deadline? Put in 01/01/2019 Format!"
              onChange={event => this.handleChange(event)} 
              value={this.state.goals.deadline} />


              <label>
                Upload a Picture:
                <input 
                  type="text"
                  name="picture" 
                  placeholder= "Paste a URL for your Picture !"
                  onChange={event => this.handleChange(event)} 
                  value={this.state.goals.picture} />
              </label>
              
              

              <input type="submit" value="Submit" />

      </form>
    )
  }
}













// import React, {Component} from 'react';  

// /* Import Components */
// import CheckBox from './createNewGoal/checkBox';  
// import Input from './createNewGoal/input';  
// import TextArea from './createNewGoal/textArea';  
// import Select from './createNewGoal/select';
// import Button from './createNewGoal/button'

// class CreateNewGoal extends Component {  
//   constructor(props) {
//     super(props);

//     this.state = {
//       goals: {
//         title: '',
//         picture: '',
//         body: '',
//         deadline: '',
//         priority: '',
//         about: ''

//       },

//       genderOptions: ['Male', 'Female', 'Others'],
//       skillOptions: ['Programming', 'Development', 'Design', 'Testing']

//     }
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.handleClearForm = this.handleClearForm.bind(this);
//   }

//   /* This life cycle hook gets executed when the component mounts */

//   handleFormSubmit() {
//     // Form submission logic
//   }
//   handleClearForm() {
//     // Logic for resetting the form
//   }
//   render() {
//     return (
//       <form className="container" onSubmit={this.handleFormSubmit}>
        
//         <Input /> 
//         <Input /> 
//         <Select /> 
//         <CheckBox />
//         <TextArea />
//         <Button /> 
//        <Button /> 
      
//       </form>
//     );
//   }
// }

// export default CreateNewGoal;




// import React, { Component } from 'react';

// class CreateNewGoal extends Component {
//   render() {
//     return (
//       <form className="goal-editor">
//         <input type="text" name="title" /> 
//         <img
//           alt= "" 
//           src= "">
//         <textarea name="body" />
//         <div className="button-row">
//           <input className="button" type="submit" value="Save" />
//           <button
//             onClick= {()=>this.props.handleCancelEdit(this.props.editGoal)}
//             type="button">Cancel</button>
//         </div>
//       </form>
//     );
//   }
// }

{/* <label>
                Upload a Picture:
                <input
                name="picture" 
                value={this.state.goals.picture} 
                onChange={event => this.handleChange(event)} 
                accept="image/*"
                type={.files[0].path}/>
              </label> */}

export default CreateNewGoal;