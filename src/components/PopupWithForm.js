function PopupWithForm(props) {
  function handleOverlayClick(evt) {
    if (evt.target===evt.currentTarget) {props.onClose()};
  }

  return(
      <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`} onClick={handleOverlayClick}>
        <div className={`popup__${props.name}`}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="button popup__close-button" onClick={props.onClose} type="button" aria-label="Закрыть попап"></button>
        </div>
      </div>
  );
}

export default PopupWithForm;