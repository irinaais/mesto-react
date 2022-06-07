import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>

      <div className="popup popup_edit">
        <div className="popup__edit">
          <h2 className="popup__title">Редактировать профиль</h2>
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
          <button className="button popup__close-button" type="button" aria-label="Закрыть попап"></button>
        </div>
      </div>

      <div className="popup popup_add">
        <div className="popup__add">
          <h2 className="popup__title">Новое место</h2>
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
          <button className="button popup__close-button" type="button" aria-label="Закрыть попап"></button>
        </div>
      </div>

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

      <div className="popup popup_delete-card">
        <div className="popup__delete-card">
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="button popup__save-button">Да</button>
          <button className="button popup__close-button" type="button" aria-label="Закрыть попап"></button>
        </div>
      </div>

      <div className="popup popup_edit-avatar">
        <div className="popup__edit-avatar">
          <h2 className="popup__title">Обновить аватар</h2>
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
          <button className="button popup__close-button" type="button" aria-label="Закрыть попап"></button>
        </div>
      </div>

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
