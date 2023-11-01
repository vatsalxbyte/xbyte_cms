
import { Button } from "antd";
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
import { useState } from "react";


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
const Topbar = () => {
    const [isHome, setIsHome] = useState(true);


    const toggleLocation = () => {
        if (isHome) {
            window.location.href = '/draganddropzone';
        } else {
            window.location.href = '/';
        }
        setIsHome(!isHome);
    };


    return (
        <div>
            <div className="grid grid-cols-10 grid-rows-1 gap-3 bg-[#CED4DA] h-10 justify-items-stretch items-center">
                <div className="justify-self-start w-10 ">
                    <a href="/">
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
                    {/* <div className="col-span-5 justify-self-end">
                     
                        <a href="/draganddropzone">
                            <Button type="primary" danger size="small">For Drag and Drop</Button>
                        </a>
                    </div> */}
                    <div className="col-span-5 justify-self-end">
                    <a href="/draganddropzone">
                    <Button type="primary" danger size="small">
                            {'For Drag and Drop'}
                        </Button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Topbar
