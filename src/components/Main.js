import React, {useState, useEffect} from 'react';
import api from '../utils/Api';
import Card from '../components/Card';

function Main(props) {
  const [userName, setUserName]=React.useState('');
  const [userDescription, setUserDescription]=React.useState('');
  const [userAvatar, setUserAvatar]=React.useState('');
  const [cards, setCards]=React.useState([]);

  React.useEffect(() => {
      api.getUserInfo().then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
    }, []);

  React.useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
    })
  }, []);

  return(
    <>
      <main>
        <section className="profile page__section">
          <div className="profile__column">
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Аватарка"
            />
            <button className="button button_variant_avatar" onClick={props.onEditAvatar} type="button" aria-label="Загрузить аватар"/>
            <div className="profile__info">
              <div className="profile__box">
                <h1 className="profile__title">{userName}</h1>
                <button className="button button_variant_edit" onClick={props.onEditProfile} type="button"
                        aria-label="Редактировать профиль"/>
              </div>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
          </div>
          <button className="button button_variant_add" onClick={props.onAddPlace} type="button" aria-label="Добавить фотографии"/>
        </section>

        <section className="cards page__section">
          <ul className="elements">
            {cards.map((card) => <Card key={card._id} card={card}/>)}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;