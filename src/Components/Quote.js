import '../main.css';

function Quote () {
    return (
        <div className="quote">
            <div className="quote-wrap">
                <div className='quote-content'>
                    <h2>"Kenya is the 74th largest market for eCommerce
                         with a predicted revenue of US$801.4 million by 2024, placing it 
                         ahead of Latvia."</h2>
                </div>
            </div>
            <div className="quote-wrap">
                <div className='quote-content'>
                    <p>source <a href="https://ecommercedb.com/markets/ke/all" >ecommercedb.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Quote;