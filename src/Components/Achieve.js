import '../main.css';
import AchieveCard from './AchieveCard';
import AchieveCard2 from './AchieveCard2';
import AchieveCard3 from './AchieveCard3';

function Achieve () {
    

    return (
        <div className="sectors">
            <div className='achieve-title'>
                <h2>WHAT MORE CAN YOU ACHIEVE?</h2>
            </div>
            <div className='achieve-content'>
                <AchieveCard></AchieveCard>
                <AchieveCard2></AchieveCard2>
                <AchieveCard3></AchieveCard3>
            </div>
        </div>
    )
}

export default Achieve;