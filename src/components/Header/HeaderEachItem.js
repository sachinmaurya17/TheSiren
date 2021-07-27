import './HeaderEachItem.css';
const HeaderEachItem = (props)=>{
    return(
        <>
            <p className ="headerEachItem">{props.eachItem.name}</p>
        </>
    )
}
export default HeaderEachItem;