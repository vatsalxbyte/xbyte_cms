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
import Xbytesmalllogo from "../assets/xbytesmalllogo.png";


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


const sections = [
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
    },
    {
        title: "Structure",
        icons: [
            { icon: mySvgIcon, label: "Section" },
            { icon: Container, label: "Container" },
            { icon: Stack, label: "Stack" },
            { icon: vflex, label: "V Flex" },
            { icon: Hstack, label: "H Flex" },
        ],
    },
    {
        title: "Basic",
        icons: [
            { icon: Divblock, label: "Div Block" },
            { icon: List, label: "List" },
            { icon: ListItem, label: "List Item" },
            { icon: LinkBlock, label: "Link Block" },
            { icon: BlackButton, label: "Black Button" },
        ],
    },
    {
        title: "Typography",
        icons: [
            { icon: Heading, label: "Heading" },
            { icon: Paragraph, label: "Paragraph" },
            { icon: TextLink, label: "Text Link" },
            { icon: TextBlock, label: "Text Block" },
            { icon: BlockQuote, label: "Block Quote" },
            { icon: RichText, label: "Rich Text" },
        ],
    },
];

function LeftSidebar() {

    const [activeButton, setActiveButton] = useState(null);

    const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
    const allTaskList = useSelector((state) => state.sidebar.setTasks);


    useEffect(() => {
        console.log("allTaskList", allTaskList);
    })
    const dispatch = useDispatch();
    const toggleSidebar1 = (button) => {
        dispatch(toggleSidebar());
        setTimeout(() => {
            dispatch(hideTooltip());
        }, 1000);
        setActiveButton(button);

    };

    //Drag-Drop

    const [taskList, setTaskList] = useState([]);

    //   useEffect(() => {
    //     setTaskList(tasks);
    //   }, [tasks]);

    const onDragStart = (evt) => {
        let element = evt.currentTarget;
        element.classList.add("dragged");
        evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
        evt.dataTransfer.effectAllowed = "move";
    };

    const onDragEnd = (evt) => {
        evt.currentTarget.classList.remove("dragged");
    };

    const onDragEnter = (evt) => {
        evt.preventDefault();
        let element = evt.currentTarget;
        element.classList.add("dragged-over");
        evt.dataTransfer.dropEffect = "move";
    };

    const onDragLeave = (evt) => {
        let currentTarget = evt.currentTarget;
        let newTarget = evt.relatedTarget;
        if (newTarget.parentNode === currentTarget || newTarget === currentTarget) return;
        evt.preventDefault();
        let element = evt.currentTarget;
        element.classList.remove("dragged-over");
    };

    const onDragOver = (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
    };

    const onDrop = (evt, value, status) => {
        evt.preventDefault();
        evt.currentTarget.classList.remove("dragged-over");
        let data = evt.dataTransfer.getData("text/plain");
        let updated = taskList.map((task) => {
            if (task.id.toString() === data.toString()) {
                task.status = status;
            }
            return task;
        });
        setTaskList(updated);
    };

    const pending = taskList.filter((t) => t.status === "pending");
    const done = taskList.filter((t) => t.status === "done");
    const newOrder = taskList.filter((t) => t.status === "new");


    return (
        <div className="fixed w-full">
            {/* <div className="grid grid-cols-10 grid-rows-1 gap-3 bg-[#CED4DA] h-10 justify-items-stretch items-center">
                <div className="justify-self-start w-10 ">
                    <a href="https://www.xbytesolutions.com/">
                        <img src={Xbytesmalllogo} alt="XbyteLogo" />
                    </a>
                </div>
                <div className="justify-self-start">
                    <Button size="small">Primary Button</Button>
                </div>
                <div className="col-span-6 justify-self-center">
                    <div className="col-span-4 ">
                        {sections.map((section, index) => (
                            <Button size="small" key={index}>
                                {section.title}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="col-span-2 col-start-9">
                    <div className="col-span-5 justify-self-end">
                        <Button size="small">Button 5</Button>
                        <Button size="small">Button 6</Button>
                        <a href="/draganddropzone">
                            <Button size="small">Button 7</Button>
                        </a>
                    </div>
                </div>
            </div> */}

            <div
                className={`h-screen ${isSidebarOpen ? "w-72" : "w-10"
                    } overflow-hidden bg-[#CED4DA] flex transition-all duration-300 ease-in-out`}
            >
                <div className="flex flex-col m-1">
                    <Tooltip placement="right" title="Add Elements">
                        <button className="p-2" onClick={() => toggleSidebar1('plus')}>
                            <PlusOutlined />
                        </button>
                    </Tooltip>
                    <button className="p-2" onClick={() => toggleSidebar1('file')}>
                        <FileOutlined />
                    </button>
                    <button className="p-2 border-b border-black" onClick={() => toggleSidebar1('navigater')}>
                        <UnorderedListOutlined />
                    </button>
                    <button className="p-2" onClick={() => toggleSidebar1('coponents')}>
                        <CodeSandboxOutlined />
                    </button>
                    <button className="p-2" onClick={() => toggleSidebar1('variables')}>
                        <SettingOutlined />
                    </button>
                    <button className="p-2" onClick={() => toggleSidebar1('styleselectors')}>
                        <FileOutlined />
                    </button>
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

                        {sections.map(
                            (section, index) =>
                                section.icons && (
                                    <div key={index}>
                                        <p className="flex justify-start">{section.title}</p>
                                        <div className="grid grid-cols-3 grid-rows-2 justify-between p-1 m-1">
                                            {section.icons.map((icon, iIndex) => (
                                                <div
                                                    key={iIndex}
                                                    className="flex flex-col justify-center items-center"
                                                >
                                                    <img
                                                        src={icon.icon}
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
                {isSidebarOpen && activeButton === 'coponents' && (

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
        </div>
    );
}

export default LeftSidebar;
