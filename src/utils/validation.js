export const  FormValidate = (email,password)  => {



    if(!(email) || !(password)) { return 'Above fields are required'}

    const isEmailValid = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return 'Email ID is not valid';
    if(!isPasswordValid) return 'Password is not valid';
}

export const  NameValidate = (name)  => {
    if(!(name)) { return 'Above fields are required name'}
}

