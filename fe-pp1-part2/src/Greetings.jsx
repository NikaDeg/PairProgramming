function Greetings (props) {

    let greet_word;

    switch (props.lang){
        case 'fi':
            greet_word = "Moi, ";
            break;
        case 'de':
            greet_word = "Hallo";
            break;
        case 'en':
            greet_word = 'Hello';
            break;
        case 'es':
            greet_word ='Ola';
            break;
        case 'fr':
            greet_word = 'Bonjour';
            break;
       
    }
    return (
        <div className="greetings">
            {greet_word} {props.children}

        </div>
    );
}

export default Greetings