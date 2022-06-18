import React from 'react';
import api from '../utils/Api';
import Card from '../components/Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {
  const [cards, setCards]=React.useState([]);
  const user = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch(err => console.log(err));
  }, []);

  return(
    <>
      <main>
        <section className="profile page__section">
          <div className="profile__column">
            <img
              className="profile__avatar"
              src={user.avatar}
              alt="Аватарка"
            />
            <button className="button button_variant_avatar" onClick={props.onEditAvatar} type="button" aria-label="Загрузить аватар"/>
            <div className="profile__info">
              <div className="profile__box">
                <h1 className="profile__title">{user.name}</h1>
                <button className="button button_variant_edit" onClick={props.onEditProfile} type="button"
                        aria-label="Редактировать профиль"/>
              </div>
              <p className="profile__subtitle">{user.about}</p>
            </div>
          </div>
          <button className="button button_variant_add" onClick={props.onAddPlace} type="button" aria-label="Добавить фотографии"/>
        </section>

        <section className="cards page__section">
          <ul className="elements">
            {cards.map((card) => <Card key={card._id} card={card} onCardClick={props.onCardClick}/>)}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;