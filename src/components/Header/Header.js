
import './Header.css';
import HeaderComponent from './HeaderComponent';
import Logo from './Logo';

const Header = (props)=>{
    return(
        <>
           
            <div className="header">
            <Logo/>
            <HeaderComponent HeaderComponentItem ={props}/>
           
            </div>
            
        </>
    )
}
export default Header;