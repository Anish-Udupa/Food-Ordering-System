import React, { Component } from "react";


class LoginPage extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submitForm = this.submitForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submitForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["name"] = "";
          fields["mobileno"] = "";
          fields["address"]="";
          fields["creditcardtype"]="";
          fields["creditcardno"]="";
          fields["cardholdername"]="";
          fields["dateofexpiry"]="";
          fields["CVV"]="";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "*Please enter your name.";
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["address"]) {
        formIsValid = false;
        errors["address"] = "*Please enter your address.";
      }
      if (!fields["creditcardtype"]) {
        formIsValid = false;
        errors["creditcardtype"] = "*Please enter type of credit card";
      }
      if (!fields["creditcardno"]) {
        formIsValid = false;
        errors["creditcardno"] = "*Please enter your credit card no.";
      }

      if (typeof fields["creditcardno"] !== "undefined") {
        if (!fields["creditcardno"].match(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/)) {
          formIsValid = false;
          errors["creditcardno"] = "*Please enter valid credit card no.";
        }
      }
      if (!fields["cardholdername"]) {
        formIsValid = false;
        errors["cardholdername"] = "*Please enter card holder name";
      }
      if (!fields["dateofexpiry"]) {
        formIsValid = false;
        errors["dateofexpiry"] = "*Please enter date of expiry";
      }

      if (typeof fields["dateofexpiry"] !== "undefined") {
        if (!fields["dateofexpiry"].match(/^([0-9]{2}||[10-12]{2})\s([0-9]{2}||[10-99]{2})$/)) {
          formIsValid = false;
          errors["dateofexpiry"] = "*Please enter valid date of expiry";
        }
      }
      if (!fields["CVV"]) {
        formIsValid = false;
        errors["CVV"] = "*Please enter CVV";
      }

     

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="registerpage">
     <div id="register">
        <h3>Registration page:</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submitForm} >
        <label>Name:</label>
        <input type="text" name="name" value={this.state.fields.name} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.name}</div>
        
        <label>Mobile No:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <label>Address:</label>
        <input type="text" name="address" value={this.state.fields.address} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.address}</div>
        <label>Credit card type:</label>
        <input type="text" name="creditcardtype" value={this.state.fields.creditcardtype} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.creditcardtype}</div>
        <label>Credit card number:</label>
        <input type="text" name="creditcardno" value={this.state.fields.creditcardno} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.creditcardno}</div>
        <label>Card holder name:</label>
        <input type="text" name="cardholdername" value={this.state.fields.cardholdername} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.cardholdername}</div>
        <label>Date of expiry:</label>
        <input type="text" name="dateofexpiry" value={this.state.fields.dateofexpiry} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.dateofexpiry}</div>
        <label>CVV:</label>
        <input type="text" name="CVV" value={this.state.fields.CVV} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.CVV}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }


}

export default LoginPage;