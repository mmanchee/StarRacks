import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditCargoForm (props) {
  const { cargo } = props;

  function handleEditCargoFormSubmission(event) {
    event.preventDefault();
    props.onEditCargo({
      Name: event.target.Name.value, 
      Description: event.target.Description.value, 
      Crates: event.target.Crates.value,
      EnergyCredits: event.target.EnergyCredits.value,
      id: cargo.id});
  }
  return (
    <React.Fragment>
      <ReusableForm
        Name={cargo.Name} 
        Description={cargo.Description} 
        Crates={cargo.Crates}
        EnergyCredits={cargo.EnergyCredits}
        formSubmissionHandler = {handleEditCargoFormSubmission}
        buttonText="Update Cargo" />
    </React.Fragment>
  );
}

EditCargoForm.propTypes = {
  onEditCargo: PropTypes.func
};

export default EditCargoForm;