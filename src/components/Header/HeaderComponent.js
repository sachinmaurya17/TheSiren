
import './HeaderCompnent.css';
import HeaderEachItem from './HeaderEachItem';

const HeaderComponent = (props)=>{
    console.log(props.HeaderComponentItem.data[0])
    return(
        <>
          <div className="headerComponents">
           {props.HeaderComponentItem.data.map((item)=>(
               <HeaderEachItem key={item.id} eachItem ={item} />
           ))}
          </div>
        </>
    );
}
export default HeaderComponent;

//  <h1 key={item.id}>{item.name}</h1>