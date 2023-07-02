import magGlass from '../../../images/magnifying-glass.svg';
import { useEffect } from 'react';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { UseFormValidation } from '../../../hooks/UseFormValidation';
import { InfoMessage } from '../../InfoMessage/InfoMessage';


export function SearchForm(props) {
    const { values, handleChange, setValues } = UseFormValidation({});

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleGetMovies(values.film, props.isShorts);
    }

    function handleShorts() {
        props.setShorts(!props.isShorts)
    }

    useEffect(() => {
        if(props.lastSearchFilm) {
            setValues({...values, 'film': props.lastSearchFilm});
        }
    }, [props.lastSearchFilm, setValues]);

    return (
        <>
        <section className="searcher">
            <img className='searcher__glass' src={magGlass} alt='Иконка поисковой лупы' />
            <form className='searcher__form form'>
                <input value={values.film || ''} onChange={handleChange} className='searcher__input' type="text" placeholder="Фильм" name="film" id="film" minLength={1} required/>
                <button disabled={props.isLoading} onClick={handleSubmit} className={'searcher__button'} type="submit" />
            </form>
            <FilterCheckbox isChecked={props.isShorts} handlerCheck={handleShorts} />
        </section>
        <InfoMessage isInfoMessageOpen={props.isInfoMessageOpen} closeInfoMessage={props.closeInfoMessage} textIfnoMessage={props.textIfnoMessage}/>
        </>
    )
}