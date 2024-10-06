function Validation(values){
    let error = {}
//for email    
    const email_pattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phone_pattern = /^(?=.*[0-9])[0-9]{10}$/

    if(values.email === "") {
        error.email = "Email should not be empty!"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Please enter a valid email address!"
    }
    else {
        error.email = ""
    }
// For validating name
    if(values.name === ""){
        error.name = "Name should not be empty!"
    }
    else{
        error.name = ""
    }
//for phone number
    if(values.phone===""){
        error.phone = "phone number should not be empty!"
    }
    else if(!phone_pattern.test(values.phone)){
        error.phone = "Please enter a valid phone number!"
    }
    else{
        error.phone = ""
    }
//for message
    if(values.message===""){
        error.message = "Message should not be empty!"
    }
    else{
        error.message = ""
    }

    return error;
}

export default Validation;