import HorizontalLine from './HorizontalLine';

import './Latest.css';
import LatestCard from './LatestCard';
const Latest = (props)=>{
    return(
        <>
            <div className="latest">
                <h2 className="latest__heading">The Latest</h2>
                <HorizontalLine/>
                <LatestCard latestCard={props.latest}/>
            </div>
            
        </>
    );
}
export default Latest;