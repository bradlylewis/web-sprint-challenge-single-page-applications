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
    dicedTomatos: yup
        .boolean(),
    blackOlives: yup
        .boolean(),
    canadianBacon: yup
        .boolean(),
    roastedGarlic: yup
        .boolean(),
    spicyItalianSasage: yup
        .boolean(),
    artichokeHearts: yup
        .boolean(),
    grilledChicken: yup
        .boolean(),
    threeCheese: yup
        .boolean(),
    onions: yup
        .boolean(),
    pineapple: yup
        .boolean(),
    greenPepper: yup
        .boolean(),
    extraCheese: yup
        .boolean(),
});

export default formSchema