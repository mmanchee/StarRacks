import React from "react";
import Cargo from './Cargo'
import PropTypes from 'prop-types';


function CargoList(props) {
  if(props.Cargo === undefined) {
    return (
      <React.Fragment>
        <p>There are no cargos currently on the ship</p>
      </React.Fragment>);
  } else {
    return (
      <React.Fragment>
        <table>
          <tr>
            <th class="table-name">Name</th>
            <th class="table-other">Crates</th>
            <th class="table-other">Energy Credits Total</th>
          </tr>
        </table>
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
  
}

Cargo.propTypes = {
  Cargos: PropTypes.array,
  onCargoSelection: PropTypes.func
};

export default CargoList;