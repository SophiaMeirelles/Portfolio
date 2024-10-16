import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer'
import Container from '../../Components/Container'
import { Outlet } from 'react-router-dom'

function PageBase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default PageBase