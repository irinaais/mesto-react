import PopupWithForm from "./PopupWithForm";
import React from 'react';

function AddPlacePopup(props) {
  const inputNameRef = React.useRef();
  const inputLinkRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      name: inputNameRef.current.value,
      link: inputLinkRef.current.value,
    });
  }
  return(
    <PopupWithForm name="add" title="Новое место" buttonText="Создать"
                   isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input className="popup__input popup__input_name-place" type="text" id="namePlace-input" required size="14"
             minLength="2" maxLength="30" placeholder="Название" name="name" ref={inputNameRef}/>
      <span className="popup__input-error namePlace-input-error"/>
      <input className="popup__input popup__input_link" type="url" id="linkPlace-input" required size="14"
             placeholder="Ссылка на картинку" name="link" ref={inputLinkRef}/>
      <span className="popup__input-error linkPlace-input-error"/>
    </PopupWithForm>
  )
}

export default AddPlacePopup;