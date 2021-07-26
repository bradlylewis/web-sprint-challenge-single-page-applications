// import React, {useState} from "react"

// export default function Checkbox({ formValues }) {
//     const [toppings] = useState(
//         [
//             { name: 'pepperoni' }, { name: 'diced tomatos' }, { name: 'sausage' }, { name: 'black olives' },
//             { name: 'canadian bacon' }, { name: 'roasted garlic' }, { name: 'spicy italian sausage' },
//             { name: 'artichoke hearts' }, { name: 'grilled chicken' }, { name: 'three cheese' },
//             { name: 'onions' }, { name: 'pineapple' }, { name: 'green pepper' }, { name: 'extra cheese' }
//         ]
//     )

//     return (
//         <div className="checkbox-wrapper">
//             {toppings.map((topping, idx, props) => {
//                 const { change } = props

//                 return (
//                 <div key={idx} className="checkbox-container">
//                     <input
//                         type='checkbox'
//                         name={topping.name}
//                         className='check'
//                         onChange={change}
//                         checked={formValues[`${topping.name}`]}
//                     /><div className="choice" style={{textTransform: "capitalize"}} >{topping.name}</div>
//                     </div>
//                 )})}
//         </div>
//     )
// }