function PopupWithForm(props) {
  return(
    <>
      <div className={`popup popup_${props.name}`}>
        <div className={`popup__${props.name}`}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="button popup__close-button" type="button" aria-label="Закрыть попап"></button>
        </div>
      </div>

      <div className={`popup popup_${props.name}`}>
        <div className={`popup__${props.name}`}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="button popup__close-button" type="button" aria-label="Закрыть попап"></button>
        </div>
      </div>

      <div className={`popup popup_${props.name}`}>
        <div className={`popup__${props.name}`}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="button popup__close-button" type="button" aria-label="Закрыть попап"></button>
        </div>
      </div>

      <div className={`popup popup_${props.name}`}>
        <div className={`popup__${props.name}`}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="button popup__close-button" type="button" aria-label="Закрыть попап"></button>
        </div>
      </div>

    </>
  );
}

export default PopupWithForm;