import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {useState} from 'react';
import React from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </div>

      <PopupWithForm name="edit" title="Редактировать профиль" onEditProfile={handleEditProfileClick} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <form className="popup__form" name="popupFormProfile" noValidate>
          <fieldset className="popup__info">
            <input className="popup__input popup__input_name-user" type="text" id="nameUser-input" required
                   size="14" minLength="2" maxLength="40" placeholder="Ваше имя" name="nameUser"/>
            <span className="popup__input-error nameUser-input-error"></span>
            <input className="popup__input popup__input_work-user" type="text" id="workUser-input" required
                   size="14" minLength="2" maxLength="200" placeholder="О себе" name="workUser"/>
            <span className="popup__input-error workUser-input-error"></span>
          </fieldset>
          <button className="button popup__save-button popup__submit" type="submit"
                  aria-label="Сохранить информацию">Сохранить
          </button>
        </form>  
      </PopupWithForm>
      
      <PopupWithForm name="add" title="Новое место" onAddPlace={handleAddPlaceClick} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <form className="popup__form" name="popupNewPlace" noValidate>
          <fieldset className="popup__info">
            <input className="popup__input popup__input_name-place" type="text" id="namePlace-input" required size="14"
                   minLength="2" maxLength="30" placeholder="Название" name="name"/>
            <span className="popup__input-error namePlace-input-error"></span>
            <input className="popup__input popup__input_link" type="url" id="linkPlace-input" required size="14"
                   placeholder="Ссылка на картинку" name="link"/>
            <span className="popup__input-error linkPlace-input-error"></span>
          </fieldset>
          <button className="button popup__save-button popup__submit" type="submit"
                  aria-label="Создать карточку">Создать
          </button>
        </form>
      </PopupWithForm>
      
      <PopupWithForm name="delete-card" title="Вы уверены?" onClose={closeAllPopups}>
        <button className="button popup__save-button">Да</button>
      </PopupWithForm>
      
      <PopupWithForm name="edit-avatar" title="Обновить аватар" onEditAvatar={handleEditAvatarClick} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <form className="popup__form" name="popupEditAvatar" noValidate>
          <fieldset className="popup__info">
            <input className="popup__input popup__input_avatar" type="url" id="avatar-input" required size="14"
                   placeholder="Ссылка на аватар" name="avatar"/>
            <span className="popup__input-error avatar-input-error"></span>
          </fieldset>
          <button className="button popup__save-button popup__submit" type="submit"
                  aria-label="Обновить аватар">Сохранить
          </button>
        </form>
      </PopupWithForm>
      
      <ImagePopup />
      
      <template id="template">
        <li className="element">
          <img
            className="element__image"
            src="#"
            alt="нет фотографии"
          />
          <button className="button button_variant_delete" type="button"
                  aria-label="Удалить карточку"></button>
          <div className="element__box">
            <h2 className="element__town">Карачаевск</h2>
            <div className="element__like-box">
              <button className="button button_variant_like" type="button"
                      aria-label="Поставить лайк"></button>
              <span className="element__like-count">0</span>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
