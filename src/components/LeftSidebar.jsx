import React, {  useState } from "react";
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
        id: "1",
        title: "Add",
        buttons: [
            <Button size="small" key="1_1">
                Button 1
            </Button>,
            <Button size="small" key="1_2">
                Button 2
            </Button>,
        ],
    },
    {
        id: "2",
        title: "Structure",
        icons: [
            { icon: mySvgIcon, label: "Section", id: "2_1", status: "element" },
            { icon: Container, label: "Container", id: "2_2", status: "element" },
            { icon: Stack, label: "Stack", id: "2_3", status: "element" },
            { icon: vflex, label: "V Flex", id: "2_4", status: "element" },
            { icon: Hstack, label: "H Flex", id: "2_5", status: "element" },
        ],
    },
    {
        id: "3",
        title: "Basic",
        icons: [
            { icon: Divblock, label: "Div Block", id: "3_1", status: "element" },
            { icon: List, label: "List", id: "3_2", status: "element" },
            { icon: ListItem, label: "List Item", id: "3_3", status: "element" },
            { icon: LinkBlock, label: "Link Block", id: "3_4", status: "element" },
            { icon: BlackButton, label: "Black Button", id: "3_5", status: "element" },
        ],
    },
    {
        id: 4,
        title: "Typography",
        icons: [
            { icon: Heading, label: "Heading", id: 4_1, status: "element" },
            { icon: Paragraph, label: "Paragraph", id: 4_2, status: "element" },
            { icon: TextLink, label: "Text Link", id: 4_3, status: "element" },
            { icon: TextBlock, label: "Text Block", id: 4_4, status: "element" },
            { icon: BlockQuote, label: "Block Quote", id: 4_5, status: "element" },
            { icon: RichText, label: "Rich Text", id: 4_6, status: "element" },
        ],
    },
];

sections.forEach((section) => {
    console.log("Section ID:", section.id);

    if (section.id === "2") {
        section.icons.forEach((icon) => {
            console.log("Nested ID:", icon.id);
        });
    }
});


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
        // console.log("Element dragged over:", evt.currentTarget,);

    };

    const onDragLeave = (evt) => {
        let currentTarget = evt.currentTarget;
        let newTarget = evt.relatedTarget;
        if (newTarget.parentNode === currentTarget || newTarget === currentTarget) return;
        evt.preventDefault();
        let element = evt.currentTarget;
        element.classList.remove("dragged-over");


        console.log("Element dragged away from:", evt.currentTarget);

    };

    const onDragOver = (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
    };

    const onDrop = (evt, value, status) => {
        evt.preventDefault();
        evt.currentTarget.classList.remove("dragged-over");
        let data = evt.dataTransfer.getData("text/plain");
        const updatedSections = elements.map((elements) => {
            if (elements.icons) {
                const updatedIcons = elements.icons.map((icon) => {
                    if (icon.id.toString() === data.toString()) {
                        return { ...icon, status };
                    }
                    return icon;
                });
                return { ...elements, icons: updatedIcons };
            }
            return elements;
        });


        setElements(updatedSections); // Update the state with the new data
        console.log("Dropped data:", data);
        console.log("Updated status:", status);
    };




    // let dragedelement = elements.filter((t) => t.status === "dragedelement");
    // const filteredSections = elements.filter((section) => section.icons && section.icons.some((icon) => icon.status === "dragedelement"));
    const filteredElements = elements.map((section) => {
        if (section.icons) {
            const filteredIcons = section.icons.filter((icon) => icon.status === "dragedelement");

            if (filteredIcons.length > 0) {
                // If there are icons with status "dragedelement", include the section.
                return { ...section, icons: filteredIcons };
            }
        }
        return null; // Exclude sections with no "dragedelement" icons.
    }).filter(Boolean); // Remove null entries.


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

                <div
                    className=" overflow-auto"
                    onDragLeave={(e) => onDragLeave(e)}
                    onDragEnter={(e) => onDragEnter(e)}
                    onDragEnd={(e) => onDragEnd(e)}
                    onDragOver={(e) => onDragOver(e)}
                    onDrop={(e) => onDrop(e, false, "element")}
                >
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
                    )}
                </div>

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
            <div className="flex flex-1 m-5">
                <div className=' flex w-full flex-col '
                    onDragLeave={(e) => onDragLeave(e)}
                    onDragEnter={(e) => onDragEnter(e)}
                    onDragEnd={(e) => onDragEnd(e)}
                    onDragOver={(e) => onDragOver(e)}
                    onDrop={(e) => onDrop(e, false, "dragedelement")}
                >
                    {filteredElements.map((section, index) => (
                        <div   key={index}>
                            {section.icons && section.icons.map((icon, iIndex) => (
                                <div key={iIndex}>
                                    <img
                                        src={icon.icon}
                                        alt="My Icon"
                                        className="h-20 w-20"
                                    />
                                    <p className="text-xs font-[600]">{icon.label}</p>
                                </div>
                            ))}
                        </div>
                    ))}



                    <h1 className="">Drop your components here</h1>
                </div>
            </div>

        </div>
    );
}

export default LeftSidebar;
