import React from "react";
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
const toppings = [
    { name: 'pepperoni', value: 'Pepperoni'}
]



// <div className="checkbox-container">
// <input
//     type='checkbox'
//     name='pepperoni'
//     className='check'
//     value='Pepperoni'
//     onChange={change}
//     checked={formValues.pepperoni === 'Pepperoni'}
// />
// <div className="choice">Pepperoni</div>
// </div>

export default function Form(props) {
    const { formValues, change, submit, disabled, errors } = props

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
                <select id="size-dropdown" name="size" value={formValues.size} onChange={change}>
                    <option value=''>Select</option>
                    <option value='s'>Small</option>
                    <option value='m'>Medium</option>
                    <option value='l'>Large</option>
                </select>

                <Headings>
                    <h5>Choice of Sauce</h5><div className='errors'>{errors.sauce}</div>
                    <p>Required.</p>
                </Headings>
                <>
                    <RadioInput
                        className="choice"
                        type='radio'
                        id='top-radio'
                        name='sauce'
                        value='Original Red'
                        onChange={change}
                        checked={formValues.sauce === "Original Red"}
                    /><label>Original Red</label><br/>
                    <RadioInput
                        className="choice"
                        type='radio'
                        name='sauce'
                        value='Garlic Ranch'
                        onChange={change}
                        checked={formValues.sauce === "Garlic Ranch"}
                    /><label>Garlic Ranch</label><br/>
                    <RadioInput
                        className="choice"
                        type='radio'
                        name='sauce'
                        value='BBQ Sauce'
                        onChange={change}
                        checked={formValues.sauce === "BBQ Sauce"}
                    /><label>BBQ Sauce</label><br/>
                    <RadioInput
                        className="choice"
                        type='radio'
                        id='bottom-radio'
                        name='sauce'
                        value='Spinach Alfredo'
                        onChange={change}
                        checked={formValues.sauce === "Spinach Alfredo"}
                    /><label>Spinach Alfredo</label><br/>
                </>
                
                <Headings>
                    <h5>Add Toppings</h5>
                    <p>Choose up to 10.</p>
                </Headings>
                <div className="checkbox-container">
                    <input
                        type='checkbox'
                        name='pepperoni'
                        className='check'
                        value='Pepperoni'
                        onChange={change}
                        checked={formValues.pepperoni === 'Pepperoni'}
                    />
                    <div className="choice">Pepperoni</div>
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
                    onChange={change}
                    placeholder="Anything else you'd like to add?">
                </TextInput>

                <TextInput
                    className='text-input'
                    type='text'
                    id='name-input'
                    name='name'
                    value={formValues.value}
                    onChange={change}
                    placeholder="Name for the order.">
                </TextInput>
                <div className='errors name'>{errors.name}</div>
                <div>
                    <button id = "order-button" disabled={disabled}>Add to Order</button>
                </div>
            </form>

        </div>
    );
};
