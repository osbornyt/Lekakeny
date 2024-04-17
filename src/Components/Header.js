import '../main.css';
function Header () {
    // Define the URL of the background image
    const imageUrl = process.env.PUBLIC_URL + '/header-bg.jpg';

  // Style object for the div with background image
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    width: '100%', // Adjust width as needed
    backgroundSize: 'cover', // Ensure the image covers the entire div
    backgroundPosition: 'center', // Center the image within the div
  };

  return (
    <div style={divStyle} className="header">
        <div className="header-container">
            <div className="header-title">
                <h1>It's 2024, and we can't find your brand online, then there
                    is a huge problem.
                </h1>
        
            </div>
            <div className="header-name">
                <div className="header-box">
                    <h1>LEKA</h1>
                    <h1>KENY</h1>
                </div>
                
            </div>   
        </div>
            </div>
  )
}

export default Header;