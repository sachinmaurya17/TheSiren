import './Images.css';
import './RightSide.css';
const RightSide = (props)=>{
    console.log(props.items.id)
    return(
        <>
            <div key={props.items.id} className ="right__side">
                <img className="img" src={props.items.imageLink} alt="" />
                <h1 className ="text">{props.items.text}</h1>
            </div>
        </>
    )
}
export default RightSide;