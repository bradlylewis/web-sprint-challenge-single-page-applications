import React, {useState} from "react";
import "./Form.css"
import Styled from 'styled-components'



// Styled Components
const Headings = Styled.div`
    background-color: #e0e0e0;
    padding: 0.5rem 1rem;
`
const TextInput = Styled.input`
    width: 93%;
    margin: 0.5rem 1rem 0.75rem 1rem;
    padding: 0.15rem 6rem 0.15rem 0.25rem;
`
const RadioInput = Styled.input`
    margin: 0.5rem 0.5rem 0.75rem 1rem;
`


const toppingsData = [
    { name: 'pepperoni' }, { name: 'sausage' }, { name: 'dicedTomatos' }, { name: 'blackOlives' },
    { name: 'canadianBacon' }, { name: 'roastedGarlic' }, { name: 'spicyItalianSasage' },
    { name: 'artichokeHearts' }, { name: 'grilledChicken' }, { name: 'threeCheese' },
    { name: 'onions' }, { name: 'pineapple' }, { name: 'greenPepper' }, { name: ' extraCheese' }
]

export default function Form(props) {
    const [toppings] = useState(toppingsData)
    const { formValues, change, submit, disabled, errors } = props

    const onChange = event => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;

        change(name, valueToUse)
    }
    
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return(
        <div className='pizza-container'>
            <form id="pizza-form" onSubmit={onSubmit} >
                <h4>Build Your Own Pizza</h4>
                <div className='pizza-image'>{/*Empty for pizza banner*/}</div>
                <div className='form-title'>Build Your Own Pizza</div>

                <Headings>
                    <h5>Choice of Size</h5><div className='errors'>{errors.size}</div>
                    <p>Required.</p>
                </Headings>
                <select id="size-dropdown" name="size" value={formValues.size} onChange={onChange}>
                    <option value=''>Select</option>
                    <option value='s'>Small</option>
                    <option value='m'>Medium</option>
                    <option value='l'>Large</option>
                </select>

                <Headings>
                    <h5>Choice of Sauce</h5><div className='errors'>{errors.sauce}</div>
                    <p>Required.</p>
                </Headings>
                <div className="radio-buttons-container">
                    <RadioInput
                        type='radio'
                        id='top-radio'
                        className='choice'
                        name='sauce'
                        value='Original Red'
                        onChange={onChange}
                        checked={formValues.sauce === "Original Red"}
                    /><label className="choice">Original Red</label><br/>
                    <RadioInput
                        type='radio'
                        name='sauce'
                        className='choice'
                        value='Garlic Ranch'
                        onChange={onChange}
                        checked={formValues.sauce === "Garlic Ranch"}
                    /><label className="choice">Garlic Ranch</label><br/>
                    <RadioInput
                        type='radio'
                        name='sauce'
                        className='choice'
                        value='BBQ Sauce'
                        onChange={onChange}
                        checked={formValues.sauce === "BBQ Sauce"}
                    /><label className="choice">BBQ Sauce</label><br/>
                    <RadioInput
                        type='radio'
                        id='bottom-radio'
                        name='sauce'
                        className='choice'
                        value='Spinach Alfredo'
                        onChange={onChange}
                        checked={formValues.sauce === "Spinach Alfredo"}
                    /><label className="choice">Spinach Alfredo</label><br/>
                </div>
                
                <Headings>
                    <h5>Add Toppings</h5>
                    <p>Choose up to 10.</p>
                </Headings>
                <div className="checkbox-wrapper">
                {toppings.map((topping, idx) => {

                    return (
                    <div key={idx} className="checkbox-container">
                        <input
                        type='checkbox'
                        name={topping.name}
                        className='check'
                        onChange={onChange}
                        checked={formValues[`${topping.name}`]}
                    /><div className="choice" style={{textTransform: "capitalize"}} >{topping.name}</div>
                    </div>
                )})}
                </div>

                <Headings>
                    <h5>Choice of Substitute</h5>
                    <p>Choose up to 1.</p>
                </Headings>

                <Headings>
                    <h5>Special Instructions</h5>
                </Headings>
                <TextInput
                    className='text-input'
                    type='text'
                    id='special-text'
                    name='special'
                    value={formValues.value}
                    onChange={onChange}
                    placeholder="Anything else you'd like to add?">
                </TextInput>

                <TextInput
                    className='text-input'
                    type='text'
                    id='name-input'
                    name='name'
                    value={formValues.value}
                    onChange={onChange}
                    placeholder="Name for the order.">
                </TextInput>
                <div className='errors name'>{errors.name}</div>
                <div>
                    <button id="order-button" disabled={disabled}>Add to Order</button>
                </div>
            </form>

        </div>
    );
};
