import Card from './card';
import './LatestCard.css'
const LatestCard = (props)=>{
    return(
        <>
            <div className="latestCard">
                {props.latestCard.map((item)=>(
                    <Card cardItem={item}/>
                ))}
            </div>
        </>
    )
}
export default LatestCard;