import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <>
            <header>HEADER</header>

            <main>
                <Outlet />
            </main>

            <footer>FOOTER</footer>
        </>
    )
}

export default AppLayout
