import React from 'react';
import "../css/Deletepopup.css"
const DeletePopup = ({ onDelete, onCancel }) => {
  return (
    <div className="delete-popup">
      <div className="popup-content">
        <p>Are you sure you want to delete?</p>
        <div className="button-container">
          <button onClick={onDelete}>Delete</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;