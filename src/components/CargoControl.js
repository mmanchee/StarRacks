import React from "react";
import CargoList from "./CargoList";
import EditCargoForm from "./EditCargoForm";
import NewCargoForm from "./NewCargoForm";
import CargoDelete from "./CargoDelete";
import CargoDetail from './CargoDetail';

class CargoControl extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      formVisibleOnPage: false,
      cargoManifest: [],
      selectedCargo: null,
      editing: false
    }
  }
  //event handlers
  // Edit
  handleEditingCargoInManifest = (cargoToEdit) => { // editing cargo in actual array
    const editedCargoManifest = this.state.cargoManifest
      .filter(cargo => cargo.id !== this.state.selectedCargo.id)
      .concat(cargoToEdit);
    this.setState({
      cargoManifest: editedCargoManifest,
      editing: false,
      selectedCargo: null
    });
  }
  handleEditClick = () => { // sets cargo to edit
    this.setState({editing: true});
  }
  // Delete
  handleDeletingCargo = (id) => { /// deletes cargo from array
    const newCargoManifest = this.state.cargoManifest
      .filter(cargo => cargo.id !== id);
    this.setState({
      cargoManifest: newCargoManifest,
      selectedCargo: null
    });
  }

  handleClick = () => {  // sets state to normal
    if (this.state.selectedCargo != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCargo: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  // Detail
  handleChangingSelectedCargo = (id) => { // view cargo in Detail
    const selectedCargo = this.state.cargoManifest
      .filter(cargo => cargo.id === id)[0];
    this.setState({selectedCargo});
  }
  //Create
  handleAddingNewCargoToManifest = (newCargo) => { // adds new cargo to Array
    const newCargoManifest = this.state.cargoManifest
      .concat(newCargo);
    this.setState({
      cargoManifest: newCargoManifest,
      formVisibleOnPage: false
    });
  }

  handleChangeCargoCratesClick =  (cargoToEdit) => {
    const editedCargoManifest = this.state.cargoManifest
      .filter(cargo => cargo.id !== this.state.selectedCargo.id)
      .concat(cargoToEdit);
    this.setState({
      cargoManifest: editedCargoManifest,
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) { // edit
      currentlyVisibleState = <EditCargoForm 
        cargo = {this.state.selectedCargo} 
        onEditCargo =  {this.handleEditingCargoInManifest}/>
      buttonText = "Return to Cargo Manifest";
    } else if (this.state.selectedCargo !== null) { // delete and edit
      currentlyVisibleState = <CargoDetail 
        cargo = {this.state.selectedCargo} 
        onClickingDelete = {this.handleDeletingCargo} 
        onClickingEdit = {this.handleEditClick}
        onChangeCargoCratesClick = {this.handleChangeCargoCratesClick} 
        />
      buttonText = "Return to Cargo Manifest";
    } else if (this.state.formVisibleOnPage) { // catch is set
      currentlyVisibleState = <NewCargoForm 
        onNewCargoCreation={this.handleAddingNewCargoToManifest} />
      buttonText = "Return to Cargo Manifest";
    } else {                                // default
      currentlyVisibleState = <CargoList 
        Cargos={this.state.cargoManifest} 
        onCargoSelection={this.handleChangingSelectedCargo} />;
      buttonText = "Add Cargo";
    }
    
    return (
      <React.Fragment>
        {this.state.cargoManifest[0] === undefined && 
          currentlyVisibleState.props.Cargos !== undefined ? "There are no cargos currently in the store" : ""}
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CargoControl;