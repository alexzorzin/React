import React from "react";

const ItemListMenu = (props) => {
    return (
        <>
            <a className="col me-3 container text-decoration-none">{props.item}</a>
        </>
    )
}

export default ItemListMenu
