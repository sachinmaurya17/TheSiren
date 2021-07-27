// Pending Work
import './Images.css';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
const Images = (props)=>{
    console.log(props.leftImages)
    return(
        <>
            <div className="images">
                <div className="images__left">
                   {props.leftImages.map(element =>(
                        <LeftSide items ={element}/>
                    ))}
                </div>
                <div className="images__right">
                    {props.rightImages.map(element =>(
                         <RightSide items ={element}/>   
                    ))
                    }
                </div>
                
                
            </div>
        </>
    );
}
export default Images;