import './Images.css';
import './LeftSide.css';
const LeftSide = (props)=>{
    return(
        <>
            <div key={props.items.id} className="leftSide">
                <img className="img" src={props.items.imageLink} alt="" />
                <h1  className ="lefttext">{props.items.text}</h1>
            </div>
        </>
    );

}
export default LeftSide;