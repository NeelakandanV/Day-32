import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import BaseApp from "./BaseApp";
import { Appstate } from "../AppContext/AppProvider";
import { Button, Card } from "react-bootstrap";



export default function BookReadComp(){
    const {Book,setBook} = Appstate();

    const history = useHistory();

    const DeleteBook = async(UseId)=>{
        try{
            const response = await fetch(`https://65d20b1a987977636bfbddd6.mockapi.io/Books/${UseId}`,{
                method:"Delete",
            })
            let NewList = Book.filter((per)=>(per.Id !== UseId))
            setBook(NewList)

            const data = await response.json();
            //console.log("deleted",data)

            if(!data){
                console.log("Unable to fetch")
            }
        }
        catch(error){
            console.log(error)
        }
    }

    // For Pagination

    const [CurrPage,setCurrPage] = useState(1);
    let DataPerPage = 5;
    let TotalPage = Math.ceil(Book.length/DataPerPage);
    const LastIndex = CurrPage*DataPerPage;
    const FirstIndex = LastIndex-DataPerPage;
    const PageData = Book.slice(FirstIndex,LastIndex);
    const PageNumbers = [...Array(TotalPage+1).keys()].slice(1);


    const PrevPage = ()=>{
        if(CurrPage!==1){
            setCurrPage(CurrPage-1);
        }
    }
    
    const NextPage = ()=>{
        if(CurrPage !== TotalPage){
            setCurrPage(CurrPage+1);
        }
    }
    
    const PageNav = (PageNo)=>{
        setCurrPage(PageNo)
    }


  return (
        <BaseApp title="Books">
            <div className="UserReadCont">

                <div className="Crebtn">
                    <Button size="lg" onClick={()=>history.push("/Create-Book")}><FontAwesomeIcon icon={faCirclePlus} size="xl" style={{color: "#d6dce6",}} />Create</Button>
                </div>

                <div className="BookCardCont">
                    {PageData.map((bk,ind)=>(
                        <div className="BookBoxCont" key={ind}>
                            <Card border="primary" bg="dark" text="white" style={{ width: '18rem' }}>
                                <Card.Header className="BookTitle">{bk.BookTitle}</Card.Header>
                                <Card.Body>
                                  <Card.Title>Author : {bk.Author}</Card.Title>
                                  <Card.Text>
                                    Languages : {bk.Language}
                                  </Card.Text>
                                  <Card.Text>Pages : {bk.Pages}</Card.Text>
                                  <Card.Text>Published Year : {bk.PublishedYear}</Card.Text>
                                  <Card.Text>Description : {bk.Description}</Card.Text>
                                  <button onClick={()=>history.push(`/View-Book/${FirstIndex + ind}`)} className="view-btn-Bk">View</button>
                                  <button onClick={()=>history.push(`/Edit-Book/${FirstIndex + ind}`)} className="edit-btn-Bk">Edit</button>
                                  <button onClick={()=>DeleteBook(bk.Id)} className="delete-btn-Bk">Delete</button>
                                </Card.Body>
                            </Card>
                        </div>   
                        ))}
                </div>

                <div className="UserPagiCont">
                    <p>Page : {CurrPage} of {TotalPage}</p>
                    <nav className="Pagination">
                        <a href="#" onClick={PrevPage}>Prev</a>
                        {PageNumbers.map((num,index)=>(
                            <a href="#" key={index}
                            onClick ={()=>PageNav(num)}
                            >
                                {num}
                            </a>
                        ))}
                        <a href="#" onClick={NextPage}> Next</a>
                    </nav>
                </div>
            </div>
        </BaseApp>
    );
}