import visa from './assets/images/visa.png'
import mastercard from './assets/images/master.png'

function CreditCard(props){
    return(
        <div className= "creditCard"
            style={{
                backgroundColor: props.bgColor,
                color: props.color }}>
          
            
            {props.type === "Visa" ? (<img src={visa} alt="Visa" />) : ( <img src={mastercard} alt="Mastercard" />)}
            <h2><strong>····   ····   ···· </strong>{props.number.slice(-4)} </h2>
            <ul>
                Expires {props.expirationMonth} {props.expirationYear}
                
                 {props.bank}
            </ul>
            <p>
                {props.owner}
            </p>

        </div>)
        

}

export default CreditCard