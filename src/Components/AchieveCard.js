import '../main.css';

function AchieveCard () {
    const imageUrl = process.env.PUBLIC_URL + '/attract.jpg';

    const divStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover', // Ensure the image covers the entire div
        backgroundPosition: 'center', // Center the image within the div
      };

    return (
        <div className='achieve-card'>
            <div style={divStyle} className="achieve-img">
            </div>
            <div className="achieve_text achieve-text">
                <h3>Attract Interest</h3>
                <ul>
                    <li>Craft compelling content that not only informs but also entertains and engages.</li>
                    <li>Utilize digital tools to capture leads and nurture them through the sales funnel.</li>
                    <li>Digital marketing offers a higher ROI compared to traditional methods, ensuring you get more bang for your buck.</li>
                    <li>Tailor your messaging based on user behavior, ensuring higher conversion rates.</li>
                </ul>
            </div>
        </div>
    )
}

export default AchieveCard;