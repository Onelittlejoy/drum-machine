import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  buttonStyle={
    fontSize: '30px', 
    width: '60px'
  }

  buttonDescriptions = {
    'Q': 'Heater 1',
    'W': 'Heater 2',
    'E': 'Heater 3',
    'A': 'Heater 4',
    'S': 'Clap',
    'D': 'Open HH',
    'Z': 'Kick Hat',
    'X': 'Kick',
    'C': 'Close HH'
  };

  playAudio(id) {
  const audio = document.getElementById(id);
  const display = document.getElementById('display');
  const description = this.buttonDescriptions[id];
  if (audio && display && description) {
    audio.play();
    display.innerText = description;
  }
  }
  

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown',this.handleKeyDown)
  }

  handleKeyDown=(event)=>{
    const keyToButton ={
      'Q':'heater1',
      'W':'heater2',
      'E':'heater3',
      'A':'heater4',
      'S':'clap',
      'D':'open-hh',
      'Z':'kick-hat',
      'X':'kick',
      'C':'close-hh'
    }
    const buttonId = keyToButton[event.key.toUpperCase()];

    if (buttonId) {
      const button = document.getElementById(buttonId);
      if (button) {
        button.click();
      }
    }
  }

  

  render() {
  return (
    <div id="drum-machine" className='container'>
      <div className="row justify-content-center" style={{margin:'100px'}}>
          <div id="drum-pads" className='col-md-5 border border-primary' 
          style={{ height: '300px', padding:'50px 50px', width:"300px"}}>
            <div className="d-flex justify-content-between">
           
            <button id='heater1' onClick={()=>this.playAudio('Q')} 
            className='drum-pad btn btn-primary btn-lg' style={this.buttonStyle}>Q
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q"></audio></button>
            
            <button id='heater2' onClick={()=>this.playAudio('W')} 
            className='drum-pad btn btn-primary btn-lg' style={this.buttonStyle}>W
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W"></audio></button>
      
            <button id='heater3' onClick={()=>this.playAudio('E')} 
            className='drum-pad btn btn-primary btn-lg' style={this.buttonStyle}>E
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E"></audio></button>
            </div>
            <div className="d-flex justify-content-between">
            
            <button id='heater4' onClick={()=>this.playAudio('A')} 
            className='drum-pad btn btn-primary btn-lg' style={this.buttonStyle}>A
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A"></audio></button>
           
            <button id='clap' onClick={()=>this.playAudio('S')} 
            className='drum-pad btn btn-primary btn-lg' style={this.buttonStyle}>S
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="S"></audio></button>
            
            <button id='open-hh' onClick={()=>this.playAudio('D')} 
            className='drum-pad btn btn-primary btn-lg' style={this.buttonStyle}>D
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D"></audio></button>
            </div>
            <div className="d-flex justify-content-between">
            <button id='kick-hat' onClick={()=>this.playAudio('Z')} 
            className='drum-pad btn btn-primary btn-lg' style={this.buttonStyle}>Z
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z"></audio></button>
            
            <button id='kick' onClick={()=>this.playAudio('X')} 
            className='drum-pad btn btn-primary btn-lg' style={this.buttonStyle}>X
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X"></audio></button>
            
            <button id='close-hh' onClick={()=>this.playAudio('C')} 
            className='drum-pad btn btn-primary btn-lg' style={this.buttonStyle}>C
            <audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C"></audio></button>
            </div>
          </div>
          <div id="display" className='col-md-5 border border-secondary' style={{ height: '300px' , padding:'100px', width:"300px" }}>
          
          </div> 
          </div></div>
    
  );
}}

export default App;
