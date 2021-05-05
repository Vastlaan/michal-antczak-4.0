export function validateName(name: string){
  if (!name) {
        return {
            field: "name",
            message: "First name field must be provided",
        };
    }
    if (name.length > 50) {
        return {
            field: "name",
            message: " First name filed must not be greater than 50 characters",
        };
    }
    return {field: "", message:""}
}
export function validateSurname(surname: string){
  if (!surname) {
        return {
            field: "surname",
            message: "Last name field must be provided",
        };
    }
    if (surname.length > 50) {
        return {
            field: "surname",
            message: "Last name filed must not be greater than 50 characters",
        };
    }
    return {field: "", message:""}
}

export function validateEmail(email: string) {
    const validationRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!validationRegex.test(email)) {
      return {
          field: "email",
          message: "E-mail is not valid",
      };
    }else{
      return {field: "", message:""}
    }
}
export function validatePhone(phone: string) {
    const validationRegex = /^\d+$/;

    if (!validationRegex.test(phone) || phone.length > 15 || phone.length < 6) {
      return {
          field: "phone",
          message: "Phone must contain only digits (between 6 and 15 digits)",
      };
    }else{
      return {field: "", message:""}
    }
}
export function validateStreet(street: string) {

    if ( street.length > 50 || street.length < 3) {
      return {
          field: "street",
          message: "Street field must be valid",
      };
    }else{
      return {field: "", message:""}
    }
}

export function validateNumber(number: string){
  if ( !number || number.length > 10) {
      return {
          field: "number",
          message: "Flat/House number field must be valid",
      };
    }else{
      return {field: "", message:""}
    }
}
export function validateCity(city: string){
  if ( !city || city.length > 50) {
      return {
          field: "city",
          message: "City/town field must be valid",
      };
    }else{
      return {field: "", message:""}
    }
}

export function validatePostcode(postcode: string){
  const validationRegex = /\d{4}[a-zA-Z]{2}/

  if(!validationRegex.test(postcode.split(' ').join(''))){
    return {
          field: "postcode",
          message: "Postcode must be of the format 1234AB (4 digits followed by 2 letters)",
      };
  }
  return {
    field:"",
    message:""
  }
}

export function validatePayment(payment: string){

  if(payment !== 'creditcard' && payment !=='paypal'){
    return {
          field: "payment",
          message: "Please select payment method",
      };
  }
  return {
    field:"",
    message:""
  }
}

interface IValidateAll{
  name: string;
  surname: string;
  email: string;
  phone: string;
  street: string;
  number: string;
  city: string;
  postcode: string;
  payment: string;
}

export function validateCheckoutForm({name, surname, email, phone, street, number, city, postcode, payment}:IValidateAll){
  
  if(validateName(name).field){return validateName(name)}
  if(validateSurname(surname).field){return validateSurname(surname)}
  if(validateEmail(email).field){return validateEmail(email)}
  if(validatePhone(phone).field){return validatePhone(phone)}
  if(validateStreet(street).field){return validateStreet(street)}
  if(validateNumber(number).field){return validateNumber(number)}
  if(validateCity(city).field){return validateCity(city)}
  if(validatePostcode(postcode).field){return validatePostcode(postcode)}
  if(validatePayment(payment).field){return validatePayment(payment)}

  return {field: "", message:""}
}