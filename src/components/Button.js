import React, { useState } from "react";
export default function Button( { props, children } ) {
    const [ buttonText, setButtonText ] = useState( "Click me, please" );
    function handleClick() {
        return setButtonText( "Thanks, been clicked!" );
    }
    return <button onClick={handleClick}>{buttonText}</button>

}
