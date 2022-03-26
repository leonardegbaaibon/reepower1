import React, { Component } from 'react';

// class Counter extends React.Component {
//     constructor(props){
//     super(props);
//     this.highRising = this.highRising.bind(this)
//     this.lowRising = this.lowRising.bind(this)
//     this.state = {picked:false}    
// }

//     highRising = () => {
//         this.setState({
//              picked: true
        
//         })
//     }

//     lowRising = () => {
//         this.setState({
//             picked:false            
//             })
//     }
//     render() { 
//         const picked= this.state.picked
//         let button;
//         if(picked){
//             button = <pickedOdd onClick={this.highRising} />
//         }else{
//             button = <unPickedOdd onClick={this.lowRising} />
//         }
//         return (
//         <div>
//             <span>{this.tamperCount()}</span>
//             {button}
//         </div>
//         );
//     }
//     tamperCount(){
//       return this.state.count === 0 ? "Zero" : this.state.count;  
//     };

// }
// function pickedOdd(props){
//     return(
//         <button onClick={props.onClick}>
//             hfjshdkjfh
//         </button>
//     )
// }
// function unPickedOdd(props){
//     return(
//         <button onClick={props.onClick}>
//             hsdhigiy
//         </button>
//     )
// }
 
// export default Counter;



class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {
          isLoggedIn: false,
         count: 0,
    
    };
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true,count: this.state.count + 1,});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false, count: this.state.count - 1,});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} text={this.state.count} 
         />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} text={this.state.count} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {/* {button} */}
{isLoggedIn ?  <LogoutButton onClick={this.handleLogoutClick} text={this.state.count}/>  : <LogoutButton onClick={this.handleLogoutClick} text={this.state.count} />
    }
        </div>
      );
    }
  } 
  
  function UserGreeting(props) {
    return <h1>Bet slip</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1></h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  function LoginButton(props) {
    return (
        <div>
      <button onClick={props.onClick}  >
        3.56
      </button>
      {props.text}
      </div>
    );
  }
  
  function LogoutButton(props) {
    return (
        <div>
      <button onClick={props.onClick} style={{backgroundColor: "red"}} >
        3.56
      </button>
      {props.text}
      </div>
    );
  }
  // const App = () => {
  //   const [isOn, toggleIsOn] = useToggle();
  //   return (
  //     <>
  //       {isOn ? 'The light is on!' : 'Hey who turned off the lights'}
  //       <button onClick={toggleIsOn}>
  //         Press me
  //       </button>
  //     </>
  //   )
  // }
  

  export default Counter;
  