const Item = ({id, name, img, price, stock}) => {
    return (
        
        <article className="carditem">
                <header className='header'>
                    <h2 className='itemheader'>
                        {name}
                    </h2>
                </header>
                <picture className="item-img">
                    <img src={img} alt={name}/>
                </picture>
                <section className="item-p">
                    <p>
                        precio: ${price}
                    </p>
                    <p>
                        stock disponible: {stock}
                    </p>
                </section>
                <footer className='item-footer'>
                    <button>
                        Ver detalle
                    </button>
                </footer>
        </article>
        
    )
}

export default Item