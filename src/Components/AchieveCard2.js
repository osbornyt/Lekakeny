import '../main.css';

function AchieveCard2 () {
    const imageUrl = process.env.PUBLIC_URL + '/understand.jpg';

    const divStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover', // Ensure the image covers the entire div
        backgroundPosition: 'center', // Center the image within the div
      };

    return (
        <div className='achieve-card'>
            <div style={divStyle} className="achieve-img-sec">
            </div>
            <div className="achieve_text achieve-text-sec">
                <h3>Understand Your Market</h3>
                <ul>
                    <li>Utilize digital analytics to make informed decisions based on real time data.</li>
                    <li>Identify and target specific demographics, tailoring your messaging to resonate with different audience segments.</li>
                    <li>Analyze online behavior to forecast market trends and stay ahead of the curve.</li>
                    <li>Engage with your audience directly, gathering feedback to refine and optimize your offerings.</li>
                </ul>
            </div>
            
        </div>
    )
}

export default AchieveCard2;