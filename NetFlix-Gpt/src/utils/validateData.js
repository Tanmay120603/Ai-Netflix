export function checkValidData(name,email,password,isSignUp){
    const validEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const validPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const validName=isSignUp ? /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name) : true

    if(!validName) return "Please enter a valid name"
    if(!validEmail) return "Please enter a valid email address"
    if(!validPassword) return "Please enter a valid password"
}