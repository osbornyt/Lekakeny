import '../main.css';

function Whysection () {
    return (
        <div className="why">
            <div className="why-title">
                <h1>WHY GO DIGITAL IN KENYA?</h1>
            </div>
            <div className='why-content'>
                <div className='why-card'>
                    <div className='why-card-icon'>
                        <img className='why-card-img' src={process.env.PUBLIC_URL + '/money-bill-up.png'} alt="Image" />
                    </div>
                    <div className='why-card-text'>
                        <h3>Test market viability and adoption</h3>
                        <p>Before investing heavily, gauge the receptiveness of your product or 
                            service in diverse Kenyan markets.</p>
                    </div>
                </div>
                <div className='why-card'>
                    <div className='why-card-icon'>
                        <img className='why-card-img' src={process.env.PUBLIC_URL + '/acumen.png'} alt="Image" />
                    </div>
                    <div className='why-card-text'>
                        <h3>Build insightful business acumen</h3>
                        <p>Understand the unique business dynamics, cultural nuances,
                             and consumer behavior of the Kenyan market.</p>
                    </div>
                </div>
                <div className='why-card'>
                    <div className='why-card-icon'>
                        <img className='why-card-img' src={process.env.PUBLIC_URL + '/globe.png'} alt="Image" />
                    </div>
                    <div className='why-card-text'>
                        <h3>Expand your territorial demand</h3>
                        <p>Don't limit your reach. Kenya is vast, and digital marketing can 
                            help you tap into multiple regions simultaneously.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Whysection;