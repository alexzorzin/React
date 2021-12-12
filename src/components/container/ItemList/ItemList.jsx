
import Item from "../Item/Item"


const ItemList = ({loading, products}) => {
    return (
        <div>
            {loading ? <h1 className="loading">Loading...</h1> :
                <div className="tours">
                    {products.map((item) => (
                        <Item item={item} key={item.id} />
                    ))}
                </div>
            }
            
        </div>
    )
}

export default ItemList