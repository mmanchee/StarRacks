import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='Name'
          defaultValue={props.Name ? props.Name : ""}
          placeholder='Enter a Name' />
          <br />
        <input
          type='text'
          name='Description'
          defaultValue={props.Description ? props.Description : ""}
          placeholder='Enter a Description' />
          <br />
        <input
          type='number'
          name='Crates'
          defaultValue={props.Crates ? props.Crates : ""}
          placeholder='Enter the Number Crates' /> 
          <br />
        E <input
          type='number'
          name='EnergyCredits'
          defaultValue={props.EnergyCredits ? props.EnergyCredits : ""}
          placeholder='Enter a Price in Energy Credits' />
        <button type ='submit'>Submit</button>
        {/* Add cancel button */}
      </form>
    </React.Fragment>
    );
  }
  
  ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
  };
  
  export default ReusableForm;