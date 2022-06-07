function ImagePopup() {
  return(
    <>
      <div className="popup popup_view-card">
        <div className="popup__view-card">
          <img
            className="popup__img"
            src="../images/kirill-pershin-1088404-unsplash.jpg"
            alt="Карачаевск"
          />
          <p className="popup__img-info">Карачевск</p>
          <button className="button popup__close-button" type="button" aria-label="Закрыть попап"></button>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;