import React, {useState, useEffect} from "react";
import "./Form.css"
import axios from "axios";
import Styled from 'styled-components'
// import * as yup from "yup";



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

// this let's our code know what key's to expect - what we will 'name' our inputs
const initialValues = { size: "", sauce: "", toppings: "", substitute: '', gfree: false, special: '', name: '' }
const toppings = [
    {id: 1, name: 'toppings', value: 'pepperoni'},
    {id: 2, name: 'toppings', value: 'sausage'},
    {id: 3, name: 'toppings', value: 'canadian bacon'},
    {id: 4, name: 'toppings', value: 'spicy italian sausage'},
    {id: 5, name: 'toppings', value: 'grilled chicken'},
    {id: 6, name: 'toppings', value: 'onions'},
    {id: 7, name: 'toppings', value: 'green pepper'},
    {id: 8, name: 'toppings', value: 'diced tomatos'},
    {id: 9, name: 'toppings', value: 'black olives'},
    {id: 10, name: 'toppings', value: 'roasted garlic'},
    {id: 11, name: 'toppings', value: 'artichoke hearts'},
    {id: 12, name: 'toppings', value: 'three cheese'},
    {id: 13, name: 'toppings', value: 'pineapple'},
    {id: 14, name: 'toppings', value: 'extra cheese'}
]

const Form = ()  => {
    const [form, setForm] = useState(initialValues);
    const [submitButtonState, setSubmitButtonState] = useState(false);

    // const [isChecked, setIsChecked] = useState({});
    // const [toppingData, setToppingData] = useState(toppings)

    //Declare error state variables, init to values
    // const [errors, setErrors] = useState
    // ({
    //     //Declare values init to string/bool
    //     name: " ",
    //     size: " ",
    //     special: " ",
    //     meat: false,
    //     veggies: false,
    //     poultry: false,
    //     fruit: false,
    // });





    //Define form schema
    // const formSchema = yup.object().shape
    // ({
    //     //Name value: string, min params
    //     name: yup.string().min(2,"name must be at least 2 characters"),
        
    //     //Size value: string, oneOf params
    //     size: yup.string().oneOf(["s", "m", "l"], "please select a size"),
        
    //     //Toppings: string
    //     special: yup.string(),
    //     meat: yup.string(),
    //     veggies: yup.string(),
    //     poultry: yup.string(),
    //     fruit: yup.string(),
    // });


    // HANDLER FUNCTIONS
    // const handleSingleCheck = (event) => {
    //     setIsChecked({ ...isChecked, [event.target.name]: event.target.checked})
    // }
    // const onDelete = () => {
    //     console.log(isChecked);
    //     const newData = toppingData.filter(
    //         item => !Object.keys(isChecked).includes(item.name)
    //     );
    //     console.log(newData);
    //     setToppingData(newData);
    // }


    // const changeValidator = (event) => 
    // {
    //   yup
    //     //Reach formSchema and event
    //     .reach(formSchema, event.target.name)
        
    //     //Validate checkbox
    //     .validate(
    //       event.target.type === "checkbox" ? event.target.checked : event.target.value
    //     )
        
    //     //.then setErrors
    //     .then(() => 
    //     {
    //       setErrors({ ...errors, [event.target.name]: "" });
    //     })
        
    //     //.catch, log the error, set the error
    //     .catch((error) => 
    //     {
    //       setErrors({ ...errors, [event.target.name]: error.errors[0] });
    //     });
    // };

     
    //formSchema useEffect
    // useEffect(() => 
    // {
    //     formSchema.isValid(form).then((isFormValid) => 
    //     {
    //       setSubmitButtonState(isFormValid);
    //     });

    //     //Dependency arrays
    // }, [form]);



    //Change event handler
    const changeHandler = (event) =>
    {
        //Event.persist 
        event.persist();

        //Call change validator, pass in event
        // changeValidator(event);

        //Set form
        setForm
        ({
            //Spread operator, target
            ...form, [event.target.name]: 
            event.target.type ===  "checkbox" ? event.target.checked : event.target.value
        });

    };

    //Submit handler
    const submitHandler = (event) =>
    {
        //Prevent default behavior on submit
        event.preventDefault();

        //Axios
        axios
        //Post to api with form payload
        .post("https://reqres.in/api/orders", form)
        //then get response, log changes
        .then((response) => console.log("submit changes", response));
    };
   

    //Return function
    return(
        <div className='pizza-container'>
            <form id="pizza-form" onSubmit={submitHandler} >
                <h4>Build Your Own Pizza</h4>
                <div className='pizza-image'>{/*Empty for pizza banner*/}</div>
                <div className='form-title'>Build Your Own Pizza</div>

                <Headings>
                    <h5>Choice of Size</h5>
                    <p>Required.</p>
                </Headings>
                <select id="size-dropdown" name="size" value={form.size} onChange={changeHandler}>
                    <option value=''>Select</option>
                    <option value='s'>Small</option>
                    <option value='m'>Medium</option>
                    <option value=';'>Large</option>
                </select>
                {/* Error reporting */}
                {/* <p>{errors.size}</p>  */}
                

                <Headings>
                    <h5>Choice of Sauce</h5>
                    <p>Required.</p>
                </Headings>
                <>
                    <RadioInput
                    type='radio'
                    id='top-radio'
                    name='sauce'
                    value='Original Red'
                    checked={form.sauce === "Original Red"}
                    /><label>Original Red</label><br/>
                    <RadioInput
                    type='radio'
                    name='sauce'
                    value='Garlic Ranch'
                    checked={form.sauce === "Garlic Ranch"}
                    /><label>Garlic Ranch</label><br/>
                    <RadioInput
                    type='radio'
                    name='sauce'
                    value='BBQ Sauce'
                    checked={form.sauce === "BBQ Sauce"}
                    /><label>BBQ Sauce</label><br/>
                    <RadioInput
                    type='radio'
                    id='bottom-radio'
                    name='sauce'
                    value='Spinach Alfredo'
                    checked={form.sauce === "Spinach Alfredo"}
                    /><label>Spinach Alfredo</label><br/>
                </>

                <Headings>
                    <h5>Add Toppings</h5>
                    <p>Choose up to 10.</p>
                </Headings>
                {/* {toppingData.map((topping,index) => (
                    <div key={index}>
                        <label>{toppings.name}</label>
                        <input
                        type='checkbox'
                        name={toppings.name}
                        checked={isChecked[topping.name]}
                        onChange={handleSingleCheck}
                        />
                    </div>
                ))} */}


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
                    value={form.value}
                    onChange={changeHandler}
                    placeholder="Anything else you'd like to add?">
                </TextInput>

                <TextInput
                    className='text-input'
                    type='text'
                    id='name-input'
                    name='name'
                    value={form.value}
                    onChange={changeHandler}
                    placeholder="Name for the order.">
                </TextInput>
                <div>
                    <button id = "order-button" disabled = {!submitButtonState}>Add to Order</button>
                </div>

            </form>
        </div>
    );
};

//Export statement
export default Form;