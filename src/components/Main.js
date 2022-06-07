import avatar from '../images/jack_iv_custo.jpg';

function Main() {
  return(
    <>
      <main>
        <section className="profile page__section">
          <div className="profile__column">
            <img
              className="profile__avatar"
              src={avatar}
              alt="Аватарка"
            />
            <button className="button button_variant_avatar" type="button" aria-label="Загрузить аватар"></button>
            <div className="profile__info">
              <div className="profile__box">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button className="button button_variant_edit" type="button"
                        aria-label="Редактировать профиль"></button>
              </div>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
          </div>
          <button className="button button_variant_add" type="button" aria-label="Добавить фотографии"></button>
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