export function FilterCheckbox(props) {
    return (
        <label className='checkbox'>
            <input type='checkbox' className='checkbox__input' checked={props.isChecked} onChange={props.handlerCheck} />
            <span className='checkbox__span'></span>
            <span className='checkbox__text'>Короткометражки</span>
        </label>
    )
}