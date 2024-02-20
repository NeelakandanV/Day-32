import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import BaseApp from "./BaseApp";
import { Appstate } from "../AppContext/AppProvider";



export default function UserReadComp(){
    const {user,setUser} = Appstate();

    const history = useHistory();

    const DeleteStud = async(UseId)=>{
        try{
            const response = await fetch(`https://65d20b1a987977636bfbddd6.mockapi.io/Users/${UseId}`,{
                method:"Delete",
            })
            let NewList = user.filter((per)=>(per.Id !== UseId))
            setUser(NewList)

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
    let TotalPage = Math.ceil(user.length/DataPerPage);
    const LastIndex = CurrPage*DataPerPage;
    const FirstIndex = LastIndex-DataPerPage;
    const PageData = user.slice(FirstIndex,LastIndex);
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
        <BaseApp title="Users">
            <div className="UserReadCont">
                <div className="UserPagiCont">
                    <p>Page : {CurrPage} of {TotalPage}</p>
                    <nav className="Pagination">
                        <a href="#" onClick={PrevPage}>Prev</a>
                        {PageNumbers.map((num,ind)=>(
                            <a href="#" key={ind}
                            onClick ={()=>PageNav(num)}
                            >
                                {num}
                            </a>
                        ))}
                        <a href="#" onClick={NextPage}> Next</a>
                    </nav>
                </div>

                <div className="StuTableCont">
                    <Table responsive striped bordered hover variant="dark">
                      <thead className="tableHead">
                        <tr>   
                          <th>S.no</th>
                          <th>Name</th>
                          <th>Email Id</th>
                          <th>Mobile.No</th>
                          <th>Membership validity</th>
                          <th>Books Holding</th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>    
                        {PageData.map((us,index)=>(
                            <tr key={index}>
                                <td>{FirstIndex + index +1}</td>
                                <td>{us.Name}</td>
                                <td>{us.MailId}</td>
                                <td>{us.Mobile}</td>
                                <td>{us.Subs_Valid}</td>
                                <td>{us.Books_Holding}</td>
                                <td><button onClick={()=>history.push(`/View-User/${FirstIndex + index}`)} className="view-btn">View</button></td>
                                <td><button onClick={()=>history.push(`/Edit-User/${FirstIndex + index}`)} className="edit-btn">Edit</button></td>
                                <td><button onClick={()=>DeleteStud(us.Id)} className="delete-btn">Delete</button></td>
                            </tr>
                        ))}    
                            <tr>
                                <td colSpan={9}><Button onClick={()=>history.push("/Create-User")}><FontAwesomeIcon icon={faCirclePlus} size="xl" style={{color: "#d6dce6",}} />Create</Button></td>
                            </tr>
                      </tbody>
                    </Table>
                </div>
            </div>
        </BaseApp>
    );
}