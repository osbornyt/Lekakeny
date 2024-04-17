import '../main.css';

function Start ({msg}) {
    return (
        <div className="start">
            <div className="quote-wrap">
                <div className='quote-content'>
                <   h1>{msg}</h1>
                </div>
            </div>
            <div className="quote-wrap">
                <div className='quote-content'>
                <button className='start-btn'>Get Started</button>
                </div>
            </div>
            
            
        </div>
    )
}

export default Start;