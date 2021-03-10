import React from 'react';
import './App.css';

// function Helloworld(props){
//   return (
//     <div id="Hello">
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   )
// }

/* Otras formas de mandar llamar el app
const App = () => <div>This is my component: <Helloworld/></div>

class App extends React.Component{
  render(){
    return <div>This is my component: <Helloworld/></div>
  }
}
*/

class Helloworld extends React.Component {

  state = {
    show: true
  }


  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render(){
    if(this.state.show){
      return (
          <div id="Hello">
            <h3>{this.props.subtitle}</h3>
            {this.props.mytext}
            <button onClick={this.toggleShow}>Toggle show </button>
          </div>
        )
    } else{
      return <h1>
        There are not elements
        <button onClick={this.toggleShow}>
          Toggle Show
        </button>
        </h1>
    }
  }
}

function App() {
  return (
    <div>
      This is my component: 
    <Helloworld mytext="Hello Fazt" subtitle="lorem ispum"/> 
    <Helloworld mytext="Hola mundo" subtitle="componente dos"/> 
    <Helloworld mytext="Hello!" subtitle="component tres"/>
    </div>
  );
}

export default App;
