import Header from "./Header/Header"
import HeaderItem from './../HeaderComponents.json';
// home page 
const Home = ()=>{
    return(
        <>
            <Header data ={HeaderItem}/>
        </>
    );
}

export default Home;