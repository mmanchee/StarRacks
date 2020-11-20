import React from "react";
import PropTypes from 'prop-types';

function Cargo(props) {
  return (
    <React.Fragment>
        <div onClick = {() => props.whenCargoClicked(props.id)}>
          <tr>
            <td class="table-name">{props.Name}</td> 
            <td class="table-other">{props.Crates === 0 ? "Out of Stock" : props.Crates}</td>
            <td class="table-other">{props.EnergyCredits * props.Crates}</td>
          </tr>
        </div>
    </React.Fragment>
  );
}

Cargo.propTypes = {
  Name: PropTypes.string.isRequired,
  Description: PropTypes.string,
  Crates: PropTypes.number.isRequired,
  EnergyCredits: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenCargoClicked: PropTypes.func
};

export default Cargo;