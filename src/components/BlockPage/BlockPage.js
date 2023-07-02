import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export function BlockPage({children, ...props}) {
    return (
        <>
        <Header loggedIn={props.loggedIn} />
        {children}
        <Footer />
        </>
    )
}