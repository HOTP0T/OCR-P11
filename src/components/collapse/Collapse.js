import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  //declaration du state en utilisant le Hook useState()
  const [isOpen, setIsOpen] = useState(false); // je definie le state du toggle (et false donc fermé par défaut)

  //fonction pour gérer l'affichage du contenu des collapses
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    // affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <p onClick={display}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </p>
      </div>
      {/* Si le collapse est à TRUE alors il affichera la description */}
      <div className="collapse__dropdown__content">
        {isOpen && <div>{content}</div>}
      </div>
    </div>
  );
};

export default Collapse;
