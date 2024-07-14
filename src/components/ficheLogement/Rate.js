import React from 'react';
import fullStar from "../../assets/images/rate/fullStar.png";
import emptyStar from "../../assets/images/rate/emptyStar.png";

function Rate(props) {
    const score = props.score;
    const notes = [1, 2, 3, 4, 5];
    return (
        <div className="rate-container">
            {notes.map((note) =>
                score >= note ? (
                    <img
                        key={note.toString()}
                        className="etoile"
                        src={fullStar}
                        alt="full star"
                    />
                ) : (
                    <img
                        key={note.toString()}
                        className="etoile"
                        src={emptyStar}
                        alt="empty star"
                    />
                )
            )}
        </div>
    );
}

export default Rate;