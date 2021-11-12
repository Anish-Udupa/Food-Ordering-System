import React, { Component } from "react";

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onValueChange = e=> {
    const { name,value}=e.target;
    this.setState({
      [name]: value
    });
  };

  formSubmit = e=>  {
    e.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <h2>Feedback Form</h2>
        <div className="R0">
          <p><h3>Dear Customer,<br/>
             Thank you for your visiting our restaurant.<br/>We would like to know how we performed. 
             Please spare some moments to give us your valuable feedback as it will help us in 
             improving our service.<br/>
             Please rate your service experience for the following parameters.</h3>
          </p>
        </div>
        <h3>
        <div className="R1">
          Quality of food
        </div>
        <div className="R1">
          <label>
            <input
              type="radio"
              value="Poor"
              name="Qual"
              onChange={this.onValueChange}
            />
            Poor
          </label>
        </div>
        <div className="R1">
          <label>
            <input
              type="radio"
              value="Fair"
              name="Qual"
              onChange={this.onValueChange}
            />
            Fair
          </label>
        </div>
        <div className="R1">
          <label>
            <input
              type="radio"
              value="Average"
              name="Qual"
              defaultChecked
              onChange={this.onValueChange}
            />
            Average
          </label>
        </div>
        <div className="R1">
          <label>
            <input
              type="radio"
              value="Good"
              name="Qual"
              onChange={this.onValueChange}
            />
            Good
          </label>
        </div>
        <div className="R1">
          <label>
            <input
              type="radio"
              value="Excellent"
              name="Qual"
              onChange={this.onValueChange}
            />
            Excellent
          </label>
        </div>
        </h3>
        
        <div className="R2">
          <h3>Quantity of food</h3>
        </div>
        <h3>
        <div className="R2">
          <label>
            <input
              type="radio"
              value="Poor"
              name="Quan"
              onChange={this.onValueChange}
            />
            Poor
          </label>
        </div>
        <div className="R2">
          <label>
            <input
              type="radio"
              value="Fair"
              name="Quan"
              onChange={this.onValueChange}
            />
            Fair
          </label>
        </div>
        <div className="R2">
          <label>
            <input
              type="radio"
              value="Average"
              name="Quan"
              defaultChecked
              onChange={this.onValueChange}
            />
            Average
          </label>
        </div>
        <div className="R2">
          <label>
            <input
              type="radio"
              value="Good"
              name="Quan"
              onChange={this.onValueChange}
            />
            Good
          </label>
        </div>
        <div className="R2">
          <label>
            <input
              type="radio"
              value="Excellent"
              name="Quan"
              onChange={this.onValueChange}
            />
            Excellent
          </label>
        </div>
        </h3>
        <h3>
        <div className="R3">
          Timeliness of food delivery
        </div>
        <div className="R3">
          <label>
            <input
              type="radio"
              value="Poor"
              name="Time"
              onChange={this.onValueChange}
            />
            Poor
          </label>
        </div>
        <div className="R3">
          <label>
            <input
              type="radio"
              value="Fair"
              name="Time"
              onChange={this.onValueChange}
            />
            Fair
          </label>
        </div>
        <div className="R3">
          <label>
            <input
              type="radio"
              value="Average"
              name="Time"
              defaultChecked
              onChange={this.onValueChange}
            />
            Average
          </label>
        </div>
        <div className="R3">
          <label>
            <input
              type="radio"
              value="Good"
              name="Time"
              onChange={this.onValueChange}
            />
            Good
          </label>
        </div>
        <div className="R3">
          <label>
            <input
              type="radio"
              value="Excellent"
              name="Time"
              onChange={this.onValueChange}
            />
            Excellent
          </label>
        </div>
        </h3>
        <h3>
        <div className="R4">
          Value for money
        </div>
        <div className="R4">
          <label>
            <input
              type="radio"
              value="Poor"
              name="val"
              onChange={this.onValueChange}
            />
            Poor
          </label>
        </div>
        <div className="R4">
          <label>
            <input
              type="radio"
              value="Fair"
              name="val"
              onChange={this.onValueChange}
            />
            Fair
          </label>
        </div>
        <div className="R4">
          <label>
            <input
              type="radio"
              value="Average"
              name="val"
              defaultChecked
              onChange={this.onValueChange}
            />
            Average
          </label>
        </div>
        <div className="R4">
          <label>
            <input
              type="radio"
              value="Good"
              name="val"
              onChange={this.onValueChange}
            />
            Good
          </label>
        </div>
        <div className="R4">
          <label>
            <input
              type="radio"
              value="Excellent"
              name="val"
              onChange={this.onValueChange}
            />
            Excellent
          </label>
        </div>
        </h3>
        <h3>
        <div className="R5">
          COVID-19 precautionary measure taken while serving food
        </div>
        <div className="R5">
          <label>
            <input
              type="radio"
              value="Poor"
              name="COVID"
              onChange={this.onValueChange}
            />
            Poor
          </label>
        </div>
        <div className="R5">
          <label>
            <input
              type="radio"
              value="Fair"
              name="COVID"
              onChange={this.onValueChange}
            />
            Fair
          </label>
        </div>
        <div className="R5">
          <label>
            <input
              type="radio"
              value="Average"
              name="COVID"
              defaultChecked
              onChange={this.onValueChange}
            />
            Average
          </label>
        </div>
        <div className="R5">
          <label>
            <input
              type="radio"
              value="Good"
              name="COVID"
              onChange={this.onValueChange}
            />
            Good
          </label>
        </div>
        <div className="R5">
          <label>
            <input
              type="radio"
              value="Excellent"
              name="COVID"
              onChange={this.onValueChange}
            />
            Excellent
          </label>
        </div>
        </h3>
        <h3>
        <div className="R6">
          Based on your event,what should the Regent Ordinary improve for the future events?:
        </div>
        <div className="R6">
          <textarea
              name="t1"
              onChange={this.onValueChange}
          />
        </div>
        </h3>
        <h3>
        <div className="R7">
          Was this your first event with us?:
        </div>
        <div className="R7">
          <textarea
              name="t2"
              onChange={this.onValueChange}
          />
        </div>
        </h3>
        <h3>
        <div className="R8">
          Additional comments/suggestions:
        </div>
        <div className="R8">
          <textarea
              name="t3"
              onChange={this.onValueChange}
          />
        </div>
        </h3>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default FeedbackForm;