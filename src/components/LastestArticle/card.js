import './card.css';
const Card = (props)=>{
    return(
        <>
          <div key={props.cardItem.id} className="card">
              <img src={props.cardItem.images} alt="" />
              <h2 className="cardHeading">{props.cardItem.heading}</h2>
              <p className="card__text">{props.cardItem.text}</p>
              <p className="card__text"> <span className="card__text-black"> Travel </span> / {props.cardItem.date}</p>
          </div>
        </>
    )
}
export default Card;