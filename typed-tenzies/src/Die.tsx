import type {JSX} from 'react'

export default function Die(props):JSX.Element {

    type stylesProps = {
      backgroundColor: string;
    }
    const styles: stylesProps = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return (
        <button 
            style={styles}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
        >{props.value}</button>
    )
}