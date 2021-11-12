import React from 'react'
import { card, cardTitle, btnCards } from './Card.module.scss'

const Card = (props) => {
    return (
        <div className={card}>
            <div className="container">
                <div className={cardTitle}>
                    <img src={props.img} alt="img icon" />
                    <div>
                        <h3>{props.title}</h3>
                    </div>
                    <div>
                    </div>
                </div>
                <p>{props.description}
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className={btnCards} type="button">{props.boton}</button>
                </div>
            </div>
        </div>
    )
}

export default Card
