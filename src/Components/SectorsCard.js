import '../main.css';

function SectorsCard ({title, src}) {
    const imageUrl = process.env.PUBLIC_URL + src;

  // Style object for the div with background image
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover', // Ensure the image covers the entire div
    backgroundPosition: 'center', // Center the image within the div
  };

    return (
        <div className='sectors-card'>
            <div style={divStyle} className="sectors-img">
            </div>
            <h3>{title}</h3>
        </div>
        
    )
}

export default SectorsCard;