export function Footer() {
    return (
        <footer className="footer">
            <div className='footer__case'>
                <div className="footer__text-container">
                    <p className="footer__text">Учебный проект Яндекс.Практикум x BeatFilm.</p>
                </div>
                <div className="footer__sourse-container">
                    <p className="footer__author">&copy;&nbsp;2023 Kirill Golovin</p>
                    <div className="footer__links">
                        <a className="footer__link" href="https://practicum.yandex.ru/" target="blank" title='Ссылка на Яндекс.Практикум'>Яндекс.Практикум</a>
                        <a className="footer__link" href="https://github.com/AriunRU?tab=repositories" target="blank" title='Ссылка на Github'>Github</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}