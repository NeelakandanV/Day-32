import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Appstate } from "../AppContext/AppProvider";
import BaseApp from "./BaseApp";


export default function BookViewComp(){
    const {Book} = Appstate();
    const history = useHistory();
    const {id} = useParams();
    const Bk = Book[id];

    return(
        <BaseApp title={Book[id].BookTitle}>
            <div className="view-mainCon">
                <div className="view-user">
                    <p>Title : {Bk.BookTitle}</p>
                    <p>Book Id : {Bk.Id}</p>
                    <p>Author : {Bk.Author}</p>
                    <p>Languages : {Bk.Language}</p>
                    <p>Pages : {Bk.Pages}</p>
                    <p>Published Year : {Bk.PublishedYear}</p>
                    <p>Description : {Bk.Description}</p>
                    <p>Updated at : {Bk.CreatedAt}</p>
                    <div className="view-stu-btn">
                        <Button onClick={()=>history.push("/Home")}><FontAwesomeIcon icon={faHouse} />{" "}Home</Button>{' '}
                        <Button onClick={()=>history.push("/Books")}><FontAwesomeIcon icon={faBook} />{" "}Users Data</Button>{' '}
                        <Button onClick={()=>history.push(`/Edit-Book/${id}`)}><FontAwesomeIcon icon={faPenToSquare} size="xl" style={{color: "#ededee",}} />{" "}Edit</Button>
                    </div>
                </div>
            </div>
        </BaseApp>
    );
}