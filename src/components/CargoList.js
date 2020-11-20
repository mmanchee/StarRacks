import React from "react";
import Cargo from './Cargo'
import PropTypes from 'prop-types';


function CargoList(props) {
  return (
    <React.Fragment>
      <ul>
        {props.Cargos.map((cargo) => 
        <Cargo
          whenCargoClicked = {props.onCargoSelection}
          Name={cargo.Name}
          Description={cargo.Description}
          Crates={cargo.Crates}
          EnergyCredits={cargo.EnergyCredits}
          id={cargo.id}
          key={cargo.id}/>
        )}
      </ul>
    </React.Fragment>
  );
}

Cargo.propTypes = {
  Cargos: PropTypes.array,
  onCargoSelection: PropTypes.func
};

export default CargoList;