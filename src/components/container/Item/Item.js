// import React from 'react'

// export default function Item ({ item }) {
//     return (
//         <div>
//             <div className="card-header">
//                 {prod.name}
//             </div>
//             <div className="card-body">
//                 <img className="img-fluid w-25" src={prod.img} alt="foto" />
//                 <div>
//                     {'Talle: ' + prod.size}
//                 </div>
//                 <div>
//                     {'$' + prod.price}
//                 </div>
//             </div>
//             <div className="card-footer">

//                 <button className="btn btn-outline-primary btn-block">
//                     Comprar
//                 </button>

//             </div>
//         </div>
//     )
// };


import React from 'react';
import ItemCount from '../../ItemCount';

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
            <div style={{display: 'flex', justifyContent: 'center'}} className="card-footer">
                <ItemCount stock={item.stock} />
            </div>

        </div>

    )

}