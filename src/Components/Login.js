import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import * as yup from 'yup';


const UserSchemaValidation = yup.object({
    UserName : yup.string().required("! Username is required").min(5,"Username should be more than 4 characters"),
    Password : yup.string().required("Password is required").min(8,"Password length should be atleast 8")
})

export default function LoginComp(){
    const history=useHistory();

    const {values,handleChange,handleSubmit,handleBlur,errors,touched}=useFormik({
        initialValues : {
            UserName:"",
            Password:"",
        },
        validationSchema : UserSchemaValidation,
        onSubmit : (newdata)=>{
            //console.log(newdata)
            history.push("/Home")
        }       
        
    });

    return(
        <div className='LoginCont'>
            <div className='LoginImage'>
                <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708214400&semt=sph"/>
            </div>

            <div className='LoginFormCont'>
                <h3>Login‼️</h3>
                <form  className="LoginForm" onSubmit={handleSubmit}>
                    <TextField 
                    label="UserName"
                    color="secondary" focused
                    margin="normal"
                    name="UserName"
                    value={values.UserName}
                    onBlur ={handleBlur}
                    onChange={handleChange} /><br></br>
                    {touched.UserName && errors.UserName ? <p style={{color:"crimson"}}>{errors.UserName}</p>:""}
                    <TextField 
                    label="Password" 
                    color="secondary" focused
                    name="Password"
                    value={values.Password}
                    onBlur ={handleBlur}
                    onChange={handleChange} /><br></br>
                    {touched.Password && errors.Password ? <p style={{color:"crimson"}}>{errors.Password}</p>:""}
                    <Button  type='submit'>Login</Button>
                </form>
            </div>
        </div>
    );
}