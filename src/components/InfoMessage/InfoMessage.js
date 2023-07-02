export function InfoMessage(props) {

    return (
        <div className={props.isInfoMessageOpen ? 'info-message': 'info-message_nonedisplay' }>
            <h2 className='info-message__text'>{props.textIfnoMessage}</h2>
            <button onClick={props.closeInfoMessage} className='info-message__button'>Ok</button>
        </div>
    )
}