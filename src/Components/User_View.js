import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Appstate } from "../AppContext/AppProvider";
import BaseApp from "./BaseApp";


export default function UserViewComp(){
    const {user} = Appstate();
    const history = useHistory();
    const {id} = useParams();
    const Us = user[id];

    return(
        <BaseApp title={user[id].Name}>
            <div className="view-mainCon">
                <div className="view-user">
                    <p>User Id : {Us.Id}</p>
                    <p>Name : {Us.Name}</p>
                    <p>Email-Id : <a href={`mailto:${Us.MailId}`}>{Us.MailId}</a></p>
                    <p>Mobile : {Us.Mobile}</p>
                    <p>Current City : {Us.City}</p>
                    <p>Subscription : {Us.Subs_Valid}</p>
                    <p>No of Books holding : {Us.Books_Holding}</p>
                    <p>Updated at : {Us.CreatedAt}</p>
                    <div className="view-stu-btn">
                        <Button onClick={()=>history.push("/Home")}><FontAwesomeIcon icon={faHouse} />{" "}Home</Button>{' '}
                        <Button onClick={()=>history.push("/Users")}><FontAwesomeIcon icon={faUser} />{" "}Users Data</Button>{' '}
                        <Button onClick={()=>history.push(`/Edit-User/${id}`)}><FontAwesomeIcon icon={faPenToSquare} size="xl" style={{color: "#ededee",}} />{" "}Edit</Button>
                    </div>
                </div>
            </div>
        </BaseApp>
    );
}