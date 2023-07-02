export function AboutProject() {
    return (
        <section className='about-project' id='project'>
            <h2 className='about-project__header'>О проекте</h2>
            <div className='about-project__text-container'>
                <h3 className='about-project__title about-project__title_stages'>Дипломный проект включал 5 этапов</h3>
                <p className='about-project__subtitle about-project__subtitle_stages'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h3 className='about-project__title about-project__title_time'>На выполнение диплома ушло 5 недель</h3>
                <p className='about-project__subtitle about-project__subtitle_time'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <p className='about-project__graph about-project__graph_backend-time'>1 неделя</p>
            <p className='about-project__graph about-project__graph_frontend-time'>4 недели</p>
            <p className='about-project__graph about-project__graph_backend'>Back-end</p>
            <p className='about-project__graph about-project__graph_frontend'>Front-end</p>
        </section>
    )
}