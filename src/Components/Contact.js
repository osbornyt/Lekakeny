import '../main.css';

function Contact () {
    const imageUrl = process.env.PUBLIC_URL + '/address.png';

    const divStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover', // Ensure the image covers the entire div
        backgroundPosition: 'center', // Center the image within the div
      };

    return (
        <div className='contact'>
            <div className='contact-title'>
                <h2>CONTACT</h2>
            </div>
            <div className="contact-content">
            <div className="input-container">
                    <div className="input-field">
                        <span>Name:</span>
                        <input type="text" name="first" value="" className="contact-input" required/>
                    </div>
                    <div className="input-field">
                        <span>Email:</span>
                        <input type="email" name="first" value="" className="contact-input" required/>
                    </div>
                    <div className="input-field">
                        <span>Business Name:</span>
                        <input type="text" name="first" value="" className="contact-input" required/>
                    </div>
                    <div className="input-field">
                        <span>Business Website:</span>
                        <input type="text" name="first" value="" className="contact-input" required/>
                    </div>
                    <div className="input-field">
                        <span>Message:</span>
                        <textarea rows="6" name="message" className="contact-textarea" required></textarea>
                    </div>
                    <div className="input-field-btn">
                        <button type="submit"  className="send-btn" >send</button>
                    </div>
                </div>
                </div>
        </div>
    )   
}

export default Contact;