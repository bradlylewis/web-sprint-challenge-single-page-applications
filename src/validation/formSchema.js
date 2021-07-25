import * as yup from "yup";



const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2,"name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(["s", "m", "l"], "please select a size"),
    sauce: yup
    .string()
    .oneOf(["Original Red",'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], "please select a sauce"),
});

export default formSchema