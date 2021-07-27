import Header from "./Header/Header"
import JsonFile from './../HeaderComponents.json';
import Images from "./Images/Images";
import './Home.css';
import Latest from "./LastestArticle/Latest";
// home page 
const Home = ()=>{
    return(
        <>
            <div className="container">
                <Header data ={JsonFile.Header}/>
                <Images leftImages ={JsonFile.LeftImages} rightImages ={JsonFile.RightImages}/>
                <Latest latest ={JsonFile.LatestCard}/>
            </div>
        </>
    );
}

export default Home;