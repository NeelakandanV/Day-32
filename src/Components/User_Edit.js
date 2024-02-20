import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import BaseApp from "./BaseApp";
import * as yup from 'yup';
import { Appstate } from "../AppContext/AppProvider";
import { useFormik } from "formik";
import { TextField } from "@mui/material";

const UserSchemaValidation = yup.object({
    Name :yup.string().required("!Please mention your Name"),
    MailId :yup.string().email().required("Enter a valid email"),
    Mobile :yup.string().length(10,"Indian Mobile numbers only").required("!Enter your Mobile Number"),
    City :yup.string().required("!Mention your city"),
    Subs_Valid :yup.string().required("Enter your subscription Validity"),
    Books_Holding :yup.number().required("Enter No of Books")
})

export default function UserEditComp(){
    const {user,setUser} = Appstate();
    const history = useHistory();
    const {id} = useParams();
    const LibUser = user[id];
    const{Id,Name,MailId,Mobile,City,Subs_Valid,Books_Holding} = LibUser;
    

    const{values,handleChange,handleBlur,handleSubmit,touched,errors} = useFormik({
        initialValues : {
            Id,
            Name ,
            MailId ,
            Mobile ,
            City,
            Subs_Valid ,
            Books_Holding ,
        },
        validationSchema : UserSchemaValidation,
        onSubmit :(newData)=>{
            EditUser(newData)
        }
    });


    const EditUser = async(newData)=>{

        try{
            const response = await fetch(`https://65d20b1a987977636bfbddd6.mockapi.io/Users/${Id}`,{
                method:"PUT",
                body:JSON.stringify(newData),
                headers:{
                    "Content-Type":"application/json",
                },
            })
            const data = await response.json();
            //console.log("Edited",data)
            user[id] = data;
            setUser([...user])
            history.push(`/View-User/${id}`)
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <BaseApp title="Edit Data">
            <div className="CreateForm">
                <form className="FormCont" onSubmit={handleSubmit}>
                    
                    <TextField fullWidth margin="normal" 
                    id="outlined-helperText"
                    label="Name"
                    helperText="Enter Your Name"
                    name = "Name"
                    value ={values.Name}
                    onChange = {handleChange}
                    onBlur = {handleBlur}/><br/>
                    {errors.Name && touched.Name ? <p style={{color:"crimson"}}>{errors.Name}</p>:""}

                    <TextField fullWidth margin="normal" 
                    id="outlined-helperText"
                    label="Email"
                    helperText="Enter your Email Id" 
                    name = "MailId"
                    value ={values.MailId}
                    onChange = {handleChange}
                    onBlur = {handleBlur}/><br/>
                    {errors.MailId && touched.MailId ? <p style={{color:"crimson"}}>{errors.MailId}</p>:""}

                    <TextField fullWidth margin="normal"  
                    id="outlined-helperText"
                    label="Mobile Number"
                    helperText="Enter your Mobile Number" 
                    name = "Mobile"
                    value ={values.Mobile}
                    onChange = {handleChange}
                    onBlur = {handleBlur}/><br/>
                    {errors.Mobile && touched.Mobile ? <p style={{color:"crimson"}}>{errors.Mobile}</p>:""}

                    <TextField fullWidth margin="normal"
                    id="outlined-helperText"
                    label="Current City"
                    helperText="Enter your City" 
                    name = "City"
                    value ={values.City}
                    onChange = {handleChange}
                    onBlur = {handleBlur}/><br/>
                    {errors.City && touched.City? <p style={{color:"crimson"}}>{errors.City}</p>:""}

                    <TextField fullWidth margin="normal"
                    id="outlined-helperText"
                    label="Membership Validity"
                    helperText="Enter your mambership validity" 
                    name = "Subs_Valid"
                    value ={values.Subs_Valid}
                    onChange = {handleChange}
                    onBlur = {handleBlur}/><br/>
                    {errors.Subs_Valid && touched.Subs_Valid ? <p style={{color:"crimson"}}>{errors.Subs_Valid}</p>:""}

                    <TextField  fullWidth margin="normal" 
                    id="outlined-helperText"
                    label="No of Books"
                    helperText="Enter no of books you have" 
                    name = "Books_Holding"
                    value ={values.Books_Holding}
                    onChange = {handleChange}
                    onBlur = {handleBlur}/><br/>
                    {errors.Books_Holding && touched.Books_Holding ? <p style={{color:"crimson"}}>{errors.Books_Holding}</p>:""}
                    
                    <br/>
                    <Button type="submit"><FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color: "#3228b8",}} />Update</Button>     
                </form>
            </div>
        </BaseApp>
    );
}