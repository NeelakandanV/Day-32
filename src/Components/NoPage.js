import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import BaseApp from "./BaseApp";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


export default function NoPageComp(){
    const history = useHistory();
    return(
        <BaseApp title="Page Not Found">
            <div className="NoPage">
                <img src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/ddbd29e2-fccc-4873-b9f9-78449b1e6ac6/404-opt.png"/>
                <p><b>⬅️Back to Home</b></p>
                <Button onClick={()=>history.push("/Home")}><FontAwesomeIcon icon={faHouse} />{" "}Home</Button>
            </div>
        </BaseApp>
    );
}