import '../index.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

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
    setSelectedCard(null);
  }

  function onCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={onCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm name="edit" title="Редактировать профиль" onEditProfile={handleEditProfileClick}
                     isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
        <input className="popup__input popup__input_name-user" type="text" id="nameUser-input" required
               size="14" minLength="2" maxLength="40" placeholder="Ваше имя" name="nameUser"/>
        <span className="popup__input-error nameUser-input-error"/>
        <input className="popup__input popup__input_work-user" type="text" id="workUser-input" required
               size="14" minLength="2" maxLength="200" placeholder="О себе" name="workUser"/>
        <span className="popup__input-error workUser-input-error"/>
      </PopupWithForm>
      
      <PopupWithForm name="add" title="Новое место" onAddPlace={handleAddPlaceClick}
                     isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Создать">
        <input className="popup__input popup__input_name-place" type="text" id="namePlace-input" required size="14"
               minLength="2" maxLength="30" placeholder="Название" name="name"/>
        <span className="popup__input-error namePlace-input-error"/>
        <input className="popup__input popup__input_link" type="url" id="linkPlace-input" required size="14"
               placeholder="Ссылка на картинку" name="link"/>
        <span className="popup__input-error linkPlace-input-error"/>
      </PopupWithForm>
      
      <PopupWithForm name="delete-card" title="Вы уверены?" onClose={closeAllPopups} buttonText="Да">
      </PopupWithForm>
      
      <PopupWithForm name="edit-avatar" title="Обновить аватар" onEditAvatar={handleEditAvatarClick}
                     isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
        <input className="popup__input popup__input_avatar" type="url" id="avatar-input" required size="14"
               placeholder="Ссылка на аватар" name="avatar"/>
        <span className="popup__input-error avatar-input-error"/>
      </PopupWithForm>
      
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </>
  );
}

export default App;
