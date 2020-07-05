export default function validate(values, formType="post") {

    const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    let errors = {};
    switch(formType){
        case "login":
            if(!values.email){
                errors.email = "Email is required"
            }
            else if (!emailRegex.test(values.email)){
                errors.email = "Please enter a valid email"
            }
            if (!values.password){
                errors.password = "Password is required"
            }
            break
        case "register":
            if (!values.name){
                errors.name = "Name is required"
            }
            if(!values.email){
                errors.email = "Email is required"
            }
            else if (!emailRegex.test(values.email)){
                errors.email = "Please enter a valid email"
            }
            if (!values.password){
                errors.password = "Password is required"
            }
            break
        default: break
}


    return errors;
};