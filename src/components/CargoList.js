import React from "react";
import Cargo from './Cargo'
import PropTypes from 'prop-types';


function CargoList(props) {
  return (
    <React.Fragment>
      <td class="table-h-name">Name</td>
      <td class="table-h-other">Crates</td>
      <td class="table-h-other">Total E</td>
      <div class="box">
        <div class="inner-box">
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
        </div>
      </div>
    </React.Fragment>
  );
}

Cargo.propTypes = {
  Cargos: PropTypes.array,
  onCargoSelection: PropTypes.func
};

export default CargoList;