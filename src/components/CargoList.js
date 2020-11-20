import React from "react";
import Cargo from './Cargo'
import PropTypes from 'prop-types';


function CargoList(props) {
  return (
    <React.Fragment>
      <table>
        <tr>
          <th class="table-name">Name</th>
          <th class="table-other">Crates</th>
          <th class="table-other">Energy Credits Total</th>
        </tr>
        <tr>
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
        </tr>
        
      </table>
    </React.Fragment>
  );
}

Cargo.propTypes = {
  Cargos: PropTypes.array,
  onCargoSelection: PropTypes.func
};

export default CargoList;