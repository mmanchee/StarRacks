import React from "react";
import PropTypes from 'prop-types';

function Cargo(props) {
  return (
    <React.Fragment>
      <tr>
        <div onClick = {() => props.whenCargoClicked(props.id)}>
          <td>{props.Name}</td> 
          <td>{props.Quantity === 0 ? "Out of Stock" : props.Quantity}</td>
        </div>
      </tr>
    </React.Fragment>
  );
}

Cargo.propTypes = {
  Name: PropTypes.string.isRequired,
  Description: PropTypes.string,
  Quantity: PropTypes.number.isRequired,
  Price: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenCargoClicked: PropTypes.func
};

export default Cargo;