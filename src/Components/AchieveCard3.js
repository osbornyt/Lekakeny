import '../main.css';

function AchieveCard3 () {
    const imageUrl = process.env.PUBLIC_URL + '/coverage.jpg';

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
                <h3>Develop Brand Presence</h3>
                <ul>
                    <li> In the digital realm, your brand can make a lasting impression even before a face to face interaction.</li>
                    <li>Ensure that your brand's voice, values, and vision are consistently communicated across all digital platforms.</li>
                    <li>A strong online presence can foster trust and credibility among potential clients and partners.</li>
                    <li>Regular digital engagement ensures your brand remains at the forefront of your audience's mind.</li>
                </ul>
            </div>
        </div>
    )
}

export default AchieveCard3;