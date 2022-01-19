import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
      super(props);
      this.onValueChange=this.onValueChange.bind(this)
      this.formSubmit=this.formSubmit.bind(this)
      this.state = {
        value: ''
      };
    }
  
    onValueChange = e=> {
       const { name,value}=e.target;
      this.setState({
         [name]: value
      });
    };
  
    formSubmit = e=>  {
      e.preventDefault();
      console.log(this.state.value)
    }
  
    render() {
      return (
        <form onSubmit={this.formSubmit}>
          <h2 className="Header" style={{"text-align":"center"}}>Contact us</h2><br/>
          
          <div  className="Textarea" style={{"background-color":"yellow","max-width":"250px","margin":"auto"}}>
          <h3>
          <div>
            Name:
          </div>
          <div>
            <textarea
                name="t1"
                onChange={this.onValueChange}
            />
          </div>
          </h3>
          <h3>
          <div>
            Email:
          </div>
          <div>
            <textarea
                name="t2"
                onChange={this.onValueChange}
            />
          </div>
          </h3>
          <h3>
          <div>
            Message:
          </div>
          <div>
            <textarea
                name="t3"
                onChange={this.onValueChange}
            />
          </div>
          </h3>
          </div><br/>
          <div className="btn" style={{"max-width":"260px","margin":"auto"}}>
          <button className="btn" type="submit" style={{"background-color":"blue","color":"white","max-width":"250px","margin":"auto"}}>
            Submit
          </button>
          </div>
        </form>
      );
    }
  }

  
  export default Form;