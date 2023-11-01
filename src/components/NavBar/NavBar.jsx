import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="nav">
            <h1 className="nav-h1">
                Ecommerce
            </h1>
            <section className="nav-section">
                <button className="nav-button">Celulares</button>
                <button className="nav-button">Tablets</button>
                <button className="nav-button">Notebooks</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar