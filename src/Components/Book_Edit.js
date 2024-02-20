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
    BookTitle :yup.string().required("!Please mention Book Name"),
    Author :yup.string().required("Author name required"),
    Language :yup.string().required("!Book available language"),
    PublishedYear :yup.number().required("!Mention Published year only"),
    Pages :yup.number().required("Enter number of Pages"),
    Description :yup.string().required("Short Description if available or type NA")
})

export default function BookEditComp(){
    const {Book,setBook} = Appstate();
    const history = useHistory();
    const {id} = useParams();
    const LibBook = Book[id];
    const{Id,BookTitle,Author,Language,PublishedYear,Pages,Description} = LibBook;
    

    const{values,handleChange,handleBlur,handleSubmit,touched,errors} = useFormik({
        initialValues : {
            Id ,
            BookTitle ,
            Author ,
            Language ,
            PublishedYear ,
            Pages ,
            Description ,
        },
        validationSchema : UserSchemaValidation,
        onSubmit :(newData)=>{
            EditUser(newData)
        }
    });


    const EditUser = async(newData)=>{

        try{
            const response = await fetch(`https://65d20b1a987977636bfbddd6.mockapi.io/Books/${Id}`,{
                method:"PUT",
                body:JSON.stringify(newData),
                headers:{
                    "Content-Type":"application/json",
                },
            })
            const data = await response.json();
            //console.log("Edited",data)
            Book[id] = data;
            setBook([...Book])
            history.push(`/View-Book/${id}`)
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
                    id="standard-helperText"
                    variant="standard"
                    label="Book Title"
                    helperText="Enter Book Title"
                    name = "BookTitle"
                    value ={values.BookTitle}
                    onChange = {handleChange}
                    onBlur = {handleBlur}/><br/>
                    {errors.BookTitle && touched.BookTitle ? <p style={{color:"crimson"}}>{errors.BookTitle}</p>:""}

                    <TextField fullWidth margin="normal" 
                    id="standard-helperText"
                    variant="standard"
                    label="Author Name"
                    helperText="Enter Author Name" 
                    name = "Author"
                    value ={values.Author}
                    onChange = {handleChange}
                    onBlur = {handleBlur}/><br/>
                    {errors.Author && touched.Author ? <p style={{color:"crimson"}}>{errors.Author}</p>:""}

                    <TextField fullWidth margin="normal"  
                    id="standard-helperText"
                    variant="standard"
                    label="Book Available Language"
                    helperText="Enter Available Languages" 
                    name = "Language"
                    value ={values.Language}
                    onChange = {handleChange}
                    onBlur = {handleBlur}/><br/>
                    {errors.Language && touched.Language ? <p style={{color:"crimson"}}>{errors.Language}</p>:""}

                    <TextField fullWidth margin="normal"
                    id="standard-helperText"
                    variant="standard"
                    label="Published Year"
                    helperText="Enter Year of Publishing" 
                    name = "PublishedYear"
                    value ={values.PublishedYear}
                    onChange = {handleChange}
                    onBlur = {handleBlur}/><br/>
                    {errors.PublishedYear && touched.PublishedYear ? <p style={{color:"crimson"}}>{errors.PublishedYear}</p>:""}

                    <TextField fullWidth margin="normal"
                    id="standard-helperText"
                    variant="standard"
                    label="No of Pages"
                    helperText="Enter number of Pages" 
                    name = "Pages"
                    value ={values.Pages}
                    onChange = {handleChange}
                    onBlur = {handleBlur}/><br/>
                    {errors.Pages && touched.Pages ? <p style={{color:"crimson"}}>{errors.Pages}</p>:""}

                    <TextField  fullWidth margin="normal" 
                    id="standard-helperText"
                    variant="standard"
                    label="Book Description"
                    helperText="Type a shorDescription" 
                    name = "Description"
                    value ={values.Description}
                    onChange = {handleChange}
                    onBlur = {handleBlur}/><br/>
                    {errors.Description && touched.Description ? <p style={{color:"crimson"}}>{errors.Description}</p>:""}

                    <br/>
                    <Button type="submit"><FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color: "#3228b8",}} />Update</Button>     
                </form>
            </div>
        </BaseApp>
    );
}