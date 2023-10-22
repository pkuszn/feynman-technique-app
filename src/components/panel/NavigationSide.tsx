import React, { useState } from "react";
import "./style-panel.css";
import { BsXLg, BsBoxArrowRight } from "react-icons/bs";
import Chatbox from "./Chatbox";
import Board from "./Board";

const NavigationSide = () => {
    const [isSidePanelOpen, setSidePanelOpen] = useState(true);

    const sidePanelHandler = () => {
        setSidePanelOpen(!isSidePanelOpen);
        if (isSidePanelOpen) {
            openSidePanel();
        } else {
            closeSidePanel();
        }
    };

    const openSidePanel = () => {
        let panel = document.getElementsByClassName(
            "panel_navigation"
        )[0] as HTMLDivElement;
        panel.style.width = "250px";
    };

    const closeSidePanel = () => {
        let panel = document.getElementsByClassName(
            "panel_navigation"
        )[0] as HTMLDivElement;
        panel.style.width = "20px";
    };

    return (
        <div>
            {isSidePanelOpen ? (
                <div className="panel_navigation">
                    <div className="panel_navigation__component_exit">
                        <BsXLg
                            size={25}
                            id="panel_navigation__exit"
                            onClick={sidePanelHandler}
                        />
                    </div>
                    <a href="#">Rozpocznij</a>
                    <a href="#">Zapisz jako obraz</a>
                    <a href="#">Zapisz jako plik</a>
                    <a href="#">Cofnij</a>
                </div>
            ) : (
                <BsBoxArrowRight size={25} id="panel_navigation__component_open" onClick={sidePanelHandler}/>
            )}
            <Chatbox/>
            <Board/>
        </div>
    );
};

export default NavigationSide;
