import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
    return (
        <div key={item.id} className="card w-50 mt-5 mb-5 container" >
            <div className="card-header center">
                {item.name}
            </div>
            <div className="card-body">
                <img className="img-fluid w-25" src={item.img} alt="foto-del-producto" />
                <div>
                    {'Talle: ' + item.size}
                </div>
                <div>
                    {'AR$' + item.price}
                </div>
            </div>
            <div className='card-footer'>
                <Link className="text-white btn btn-primary" to={`/React/item/${item.id}`}>Ver producto</Link>
            </div>

        </div>

    )

}