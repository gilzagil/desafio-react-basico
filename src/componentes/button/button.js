export default function button(props) {
    const mostraMsg = () => {
        alert("A label desse botão é : " + props.label)
    }
    return (
        <button className="btn" onClick={() => mostraMsg()}>{props.label}</button>
    )
}