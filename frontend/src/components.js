// components file, all react components are here.

import {useState} from 'react';

function Todo(props){
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler(){
    setModalIsOpen(true);
  }
  function closeModalHandler(){
    setModalIsOpen(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className="actions">
        <span>terst</span>
        <button className="btn" onClick={deleteHandler}>Papież</button>
      </div>
      {modalIsOpen ? <Modal /> : null}
      {modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className="btn btn--alt">Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
}

function Backdrop(props){
  return (
    <div className='backdrop' onClick={props.onCancel}/>
  );
}

export {Todo, Modal, Backdrop};