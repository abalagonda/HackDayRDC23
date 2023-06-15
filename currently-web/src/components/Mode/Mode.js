import React, {useState} from "react"
import './Mode.css'
import {Button} from 'reactstrap'
import { useNavigate } from "react-router-dom";

const Mode = ({mode_name}) => {
    const [toggle, setToggle] = useState(true);

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/remote';
        navigate(path);
    }

    return (
        <div className="mode-container">
             <h1 className="title">Welcome to Currently</h1>
             <h2 className="sub-title">A place to connect with your peers across {"\n"} every mode of work</h2>
             <div className="mode-stage">
                <Button id="mode-ip" className="mode-block">
                    <p className="mode-text">In-person</p>
                </Button>
                <Button id="mode-rem" className="mode-block" onClick={routeChange}>
                    <p className="mode-text">Remote</p>
                </Button>
                <Button id="mode-col" className="mode-block">
                    <p className="mode-text">Collab</p>
                </Button>
             </div>
        </div>
        

    );

}
export default Mode;