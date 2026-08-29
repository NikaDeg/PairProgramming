function BoxColor (props){
    const boxColor = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    };

    function toHex(color) {
        const hex = color.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }
    function rgbToHex(r, g, b) {
        return '#' + toHex(r) + toHex(g) + toHex(b);
    }

    return(
        <div className = "colorBox" style={boxColor}>
            rgb({props.r}, {props.g}, {props.b})
            <br />
            {rgbToHex(props.r, props.g, props.b)}    
        </div>

    );
}

export default BoxColor;