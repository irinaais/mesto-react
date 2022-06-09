import avatar from '../images/jack_iv_custo.jpg';
import React, {useState, useEffect} from 'react';
import api from '../utils/Api';

function Main(props) {
  const [userName, setUserName]=React.useState('');
  const [userDescription, setUserDescription]=React.useState('');
  const [userAvatar, setUserAvatar]=React.useState('');

  React.useEffect(() => {
      api.getUserInfo().then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar)
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
            <button className="button button_variant_avatar" onClick={props.onEditAvatar} type="button" aria-label="Загрузить аватар"></button>
            <div className="profile__info">
              <div className="profile__box">
                <h1 className="profile__title">{userName}</h1>
                <button className="button button_variant_edit" onClick={props.onEditProfile} type="button"
                        aria-label="Редактировать профиль"></button>
              </div>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
          </div>
          <button className="button button_variant_add" onClick={props.onAddPlace} type="button" aria-label="Добавить фотографии"></button>
        </section>

        <section className="cards page__section">
          <ul className="elements">
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;