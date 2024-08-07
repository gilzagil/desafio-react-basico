export default function texto(props) {
    return (
        <div style={{color:props.cor}}>
            <p>{props.texto.toUpperCase()}</p>
        </div>
    )
}