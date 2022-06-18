import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return <li className="element">
    <img
      className="element__image"
      src={props.card.link}
      alt={props.card.name}
      onClick={_ => props.onCardClick(props.card)}
    />
    <button className="button button_variant_delete" type="button" aria-label="Удалить карточку"/>
    <div className="element__box">
      <h2 className="element__town">{props.card.name}</h2>
      <div className="element__like-box">
        <button className="button button_variant_like" type="button" aria-label="Поставить лайк"/>
        <span className="element__like-count">0</span>
      </div>
    </div>
  </li>
}
export default Card;
