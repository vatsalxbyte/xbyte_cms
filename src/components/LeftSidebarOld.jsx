import React, { useEffect, useState } from "react";
import {
    PlusOutlined,
    FileOutlined,
    UnorderedListOutlined,
    CodeSandboxOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Button, Divider, Tooltip } from "antd";
import mySvgIcon from "../assets/section.svg";
import Container from "../assets/container.svg";
import Stack from "../assets/stack.svg";
import vflex from "../assets/vflex.svg";
import Hstack from "../assets/hstack.svg";
import Divblock from "../assets/divblock.svg";
import List from "../assets/list.svg";
import LinkBlock from "../assets/linkblock.svg";
import ListItem from "../assets/listitem.svg";
import BlackButton from "../assets/button.svg";
import Heading from "../assets/heading.svg";
import Paragraph from "../assets/paragraph.svg";
import TextLink from "../assets/textlink.svg";
import TextBlock from "../assets/text.svg";
import BlockQuote from "../assets/blockquote.svg";
import RichText from "../assets/richtext.svg";

import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar, hideTooltip } from '../store/slice';


const buttons = [
    {
        title: "Add",
        buttons: [
            <Button size="small" key="button1">
                Button 1
            </Button>,
            <Button size="small" key="button2">
                Button 2
            </Button>,
        ],
    }
]

const LeftSidebarButtons = [
    { icon: <PlusOutlined />, action: "plus", title: "Add Elements", classNames: "p-2" },
    { icon: <FileOutlined />, action: "file", title: "Open File" },
    { icon: <UnorderedListOutlined />, action: "navigater", title: "Show Navigator", classNames: "p-2 border-b border-black" },
    { icon: <CodeSandboxOutlined />, action: "components", title: "Components", classNames: "p-2" },
    { icon: <SettingOutlined />, action: "variables", title: "Variables", classNames: "p-2" },
    { icon: <FileOutlined />, action: "styleselectors", title: "Style Selectors", classNames: "p-2" },
];
const sections = [
    {
        id: 1,
        title: "Add",
        buttons: [
            <Button size="small" key={1}>
                Button 1
            </Button>,
            <Button size="small" key={2}>
                Button 2
            </Button>,
        ],
    },
    {
        id: 2,
        title: "Structure",
        icons: [
            { icon: mySvgIcon, label: "Section", id: 1 },
            { icon: Container, label: "Container", id: 2 },
            { icon: Stack, label: "Stack", id: 3 },
            { icon: vflex, label: "V Flex", id: 4 },
            { icon: Hstack, label: "H Flex", id: 5 },
        ],
    },
    {
        id: 3,
        title: "Basic",
        icons: [
            { icon: Divblock, label: "Div Block", id: 1 },
            { icon: List, label: "List", id: 2 },
            { icon: ListItem, label: "List Item", id: 3 },
            { icon: LinkBlock, label: "Link Block", id: 4 },
            { icon: BlackButton, label: "Black Button", id: 5 },
        ],
    },
    {
        id: 4,
        title: "Typography",
        icons: [
            { icon: Heading, label: "Heading", id: 1 },
            { icon: Paragraph, label: "Paragraph", id: 2 },
            { icon: TextLink, label: "Text Link", id: 3 },
            { icon: TextBlock, label: "Text Block", id: 4 },
            { icon: BlockQuote, label: "Block Quote", id: 5 },
            { icon: RichText, label: "Rich Text", id: 6 },
        ],
    },
];


function LeftSidebar() {
    const [activeButton, setActiveButton] = useState(null);
    const [elements, setElements] = useState(sections);
    const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
    const dispatch = useDispatch();


    const toggleSidebar1 = (button) => {
        dispatch(toggleSidebar());
        setTimeout(() => {
            dispatch(hideTooltip());
        }, 1000);
        setActiveButton(button);
    };

    const onDragStart = (evt) => {
        let element = evt.currentTarget;
        element.classList.add("dragged");
        evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
        evt.dataTransfer.effectAllowed = "move";

        console.log("Element dragged:", evt.currentTarget.id);

    };

    const onDragEnd = (evt) => {
        evt.currentTarget.classList.remove("dragged");
        console.log("Drag ended");
    };

    const onDragEnter = (evt) => {
        evt.preventDefault();
        let element = evt.currentTarget;
        element.classList.add("dragged-over");
        evt.dataTransfer.dropEffect = "move";
        console.log("Element dragged over:", evt.currentTarget,);

    };

    const onDragLeave = (evt) => {
        let currentTarget = evt.currentTarget;
        let newTarget = evt.relatedTarget;
        if (newTarget.parentNode === currentTarget || newTarget === currentTarget) return;
        evt.preventDefault();
        let element = evt.currentTarget;
        element.classList.remove("dragged-over");


        console.log("Element dragged away from:", evt.currentTarget.id);

    };

    const onDragOver = (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
    };

    const onDrop = (evt, value, status) => {
        evt.preventDefault();
        evt.currentTarget.classList.remove("dragged-over");
        let data = evt.dataTransfer.getData("text/plain");
        let updated = elements.map((task) => {
            if (task.id.toString() === data.toString()) {
                return { ...task, status }; // Create a new object with the updated status property.
            }
            return task;
        });

        setElements(updated);


        console.log("Dropped data:", data);
        console.log("Updated status:", status);

    };

    useEffect(() => {
        console.log("state123", elements)
    },[elements])

    return (


        <div className="fixed w-full flex">
            <div className={`h-screen ${isSidebarOpen ? "w-72" : "w-10"} overflow-hidden bg-[#CED4DA] flex transition-all duration-300 ease-in-out`}
            >
                <div className="flex flex-col m-1">
                    {LeftSidebarButtons.map((button, index) => (
                        <Tooltip key={index} placement="right" title={button.title}>
                            <button className={button.classNames} onClick={() => toggleSidebar1(button.action)}>
                                {button.icon}
                            </button>
                        </Tooltip>
                    ))}
                </div>
                {isSidebarOpen && activeButton === 'plus' && (
                    <div className="open-sidebar-content w-full p-3 overflow-auto ">
                        {buttons.map((section, index) => (
                            <div key={index}>
                                <p className="flex justify-start">{section.title}</p>
                                <div className="flex justify-between pt-2 pb-2 " >
                                    {section.buttons &&
                                        section.buttons.map((button, bIndex) =>
                                            React.cloneElement(button, { key: `btn-${bIndex}` })
                                        )}
                                </div>
                            </div>
                        ))}
                        <div
                            className="order small-box"
                            onDragLeave={(e) => onDragLeave(e)}
                            onDragEnter={(e) => onDragEnter(e)}
                            onDragEnd={(e) => onDragEnd(e)}
                            onDragOver={(e) => onDragOver(e)}
                            onDrop={(e) => onDrop(e, false, "new")}
                        >
                            {sections.map(
                                (section, index) =>
                                    section.icons && (
                                        <div key={index}>
                                            <p className="flex justify-start">{section.title}</p>
                                            <div className="grid grid-cols-3 grid-rows-2 justify-between p-1 m-1" 
                                            >
                                                {section.icons.map((icon, iIndex) => (
                                                    <div
                                                        key={iIndex}
                                                        className="flex flex-col justify-center items-center"
                                                        id={icon.id}

                                                        draggable="true"  // Add this line

                                                        onDragStart={(e) => onDragStart(e)}
                                                        onDragEnd={(e) => onDragEnd(e)}
                                                    >
                                                        <img
                                                            src={icon.icon}
                                                            id={icon.id}
                                                            alt="My Icon"
                                                            className="h-full w-full"

                                                        />
                                                        <p className="text-xs font-[600]">{icon.label}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <Divider className="mb-3" />
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                )}

                {isSidebarOpen && activeButton === 'file' && (

                    <div className="w-full flex justify-center">
                        <h1>Hiii Files show here </h1>
                    </div>
                )}

                {isSidebarOpen && activeButton === 'navigater' && (

                    <div className="w-full flex justify-center">
                        <h1>Navigater show here</h1>
                    </div>
                )}
                {isSidebarOpen && activeButton === 'components' && (

                    <div className="w-full flex justify-center">
                        <h1>Component show here</h1>
                    </div>
                )}
                {isSidebarOpen && activeButton === 'variables' && (

                    <div className="w-full flex justify-center">
                        <h1>Settings show here</h1>
                    </div>
                )}
                {isSidebarOpen && activeButton === 'styleselectors' && (

                    <div className="w-full flex justify-center">
                        <h1>Style selectors show here</h1>
                    </div>
                )}

            </div>
            <div className="flex flex-1 justify-center items-center ">
                <h1> hfgduyfgbn dfsdghcvjhb</h1>
            </div>
        </div>
    );
}

export default LeftSidebar;
