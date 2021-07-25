import * as yup from "yup";



const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2,"name must be at least 2 characters"),
    special: yup
        .string(),
    size: yup
        .string()
        .oneOf(["s", "m", "l"], "please select a size"),
    sauce: yup
        .string()
        .oneOf(["Original Red",'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], "please select a sauce"),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    'diced tomatos': yup
        .boolean(),
    'black olives': yup
        .boolean(),
    'canadian bacon': yup
        .boolean(),
    'roasted garlic': yup
        .boolean(),
    'spicy italian sausage': yup
        .boolean(),
    'artichoke hearts': yup
        .boolean(),
    'grilled chicken': yup
        .boolean(),
    'three cheese': yup
        .boolean(),
    onions: yup
        .boolean(),
    pineapple: yup
        .boolean(),
    'green pepper': yup
        .boolean(),
    'extra cheese': yup
        .boolean(),
});

export default formSchema