// import React from 'react';
// import {Pizza} from "../../types.ts";
//
// interface Props {
//     item: Pizza;
//     addDish: VoidFunction;
//     deleteDish: (dish: VoidFunction) => void;
// }
//
// const DishesItem:React.FC<Props> = ({item, addDish, deleteDish}) => {
//     return (
//         <div className="card shadow-lg bg-body-tertiary"
//              style={{width: "18rem", height: "23rem", cursor: "pointer"}}
//              key={item.id}
//              onClick={addDish}>
//             <img className="card-img-top" src={item.image} alt="Card image cap" style={{height: "13rem"}}/>
//             <div className="card-body">
//                 <h5 className="card-title text-success">{item.title}</h5>
//                 <p className="card-text">{item.price} KGS</p>
//                 <div className="d-flex justify-content-end mt-auto">
//                     <button className="btn btn-danger me-3" onClick={deleteDish(item.id)}>Delete</button>
//                     <a href="/edit" className="btn btn-primary">Edit</a>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default DishesItem;