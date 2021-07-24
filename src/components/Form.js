import React, {useState, useEffect} from "react";
import "./Form.css"
import axios from "axios";
import Styled from 'styled-components'
import Pizza from './Assets/Pizza.jpg'
// import * as yup from "yup";

// Styled Components


const Headings = Styled.div`
    background-color: #FF8F86;
    padding: 0.5rem 1.5rem;
`

//Main function definition, empty () param
const Form = ()  =>
{
    //Declare state variables, init to values
    const [form, setForm] = useState
    ({
        //Declare values, init as string/bool
        name: " ",
        size: " ",
        special: " ",
        meat: false,
        veggies: false,
        poultry: false,
        fruit: false,
    });

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


    //Declare state variables, init to false
    const [submitButtonState, setSubmitButtonState] = useState(false);


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


    //Change handler function definition, pass in event object
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
        
        // Begin form
        <div className='pizza-container'>
            <form id="pizza-form" onSubmit={submitHandler} >
            <h4>Build Your Own Pizza</h4>
            <div className='pizza-image'>{/*Empty for pizza banner*/}</div>
            <div className='form-title'>Build Your Own Pizza</div>

            <Headings>
                <h5>Choice of Size</h5>
                <p>Required.</p>
            </Headings>
            

            <Headings>
                <h5>Choice of Sauce</h5>
                <p>Required.</p>
            </Headings>

            <Headings>
                <h5>Add Toppings</h5>
                <p>Choose up to 10.</p>
            </Headings>

            <Headings>
                <h5>Choice of Substitute</h5>
                <p>Choose up to 1.</p>
            </Headings>

            <Headings>
                <h5>Special Instructions</h5>
            </Headings>
            



                <div className = "choices">
                    <label className="label" htmlFor="name"> Name:
                        <input
                        type = "text"
                        id = "name-input"
                        name = "name"
                        value = {form.name}
                        onChange = {changeHandler}
                        placeholder = "name goes here"
                        />
                    {/* Error reporting */}
                    {/* <p>{errors.name}</p> */}
                    </label>

                </div>

                <div className = "choices">
                    {/* Size label and select for dropdown choices*/}
                    <label className = "label" htmlFor = "size"> Size: 
                        <select 
                        id = "size-dropdown"
                        name = "size"
                        value = {form.size}
                        onChange = {changeHandler} 
                        >
                            <option value = "">***Choose Your Size***!</option>
                            <option value = "s">Small</option>
                            <option value = "m">Medium</option>
                            <option value = "l">Large</option>
                        </select>

                    {/* Error reporting */}
                    {/* <p>{errors.size}</p>  */}
                    </label>

                    {/* Toppings labels and checkbox choices */}
                    {/* Meat Checkbox*/}
                    <label htmlFor = "meat"> Meat
                        <input className = "box"
                        type = "checkbox"
                        name = "meat"
                        checked = {form.meat}
                        onChange = {changeHandler}
                        />
                    </label>

                    {/* Veggies Checkbox */}
                    <label htmlFor = "veggies"> Veggie
                        <input className = "box"
                        type = "checkbox"
                        name = "veggies"
                        checked = {form.veggies}
                        onChange = {changeHandler}
                        />
                    </label>

                    {/* Poultry Checkbox */}
                    <label htmlFor = "poultry"> Poultry
                        <input className = "box"
                        type = "checkbox"
                        name = "poultry"
                        checked = {form.poultry}
                        onChange = {changeHandler}
                        />
                    </label>

                    {/* Fruit Checkbox */}
                    <label htmlFor = "fruit"> Fruit
                        <input className = "box"
                        type = "checkbox"
                        name = "fruit"
                        checked = {form.fruit}
                        onChange = {changeHandler}
                        />
                    </label>

                    {/* Special Instructions */}
                    <label className = "label" htmlFor = "special"> Customize Your Pie:
                        <input 
                        type = "text"
                        id = "special-text"
                        name = "special"
                        value = {form.special}
                        onChange = {changeHandler}
                        placeholder = "Special Instructions"
                        />
                    </label>
                    <button id = "order-button" disabled = {!submitButtonState}>
                        CLICK TO SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
};

//Export statement
export default Form;