// import React, { useState } from 'react';
// import { PlusOutlined, FileOutlined, UnorderedListOutlined, CodeSandboxOutlined, SettingOutlined } from '@ant-design/icons';
// import { Button, Divider, Tooltip } from 'antd';
// import mySvgIcon from '../assets/section.svg'
// import Container from '../assets/container.svg'
// import Stack from '../assets/stack.svg'
// import vflex from '../assets/vflex.svg'
// import Hstack from '../assets/hstack.svg'
// import Divblock from '../assets/divblock.svg'
// import List from '../assets/list.svg'
// import LinkBlock from '../assets/linkblock.svg'
// import ListItem from '../assets/listitem.svg'
// import BlackButton from '../assets/button.svg'
// import Heading from '../assets/heading.svg'
// import Paragraph from '../assets/paragraph.svg'
// import TextLink from '../assets/textlink.svg'
// import TextBlock from '../assets/text.svg'
// import BlockQuote from '../assets/blockquote.svg'
// import RichText from '../assets/richtext.svg'

// function LeftSidebar() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [showTooltip, setShowTooltip] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//         setShowTooltip(true);

//         setTimeout(() => {
//             setShowTooltip(false);
//         }, 1000);
//     };

//     return (
//         <div className='fixed w-full'>
//             <div className="grid grid-cols-10 grid-rows-1 gap-3 bg-[#CED4DA] h-10 justify-items-stretch items-center">
//                 <div className="justify-self-start">1</div>
//                 <div className="justify-self-start">
//                     <Button size="small">Primary Button</Button>
//                 </div>
//                 <div className="col-span-6">
//                     <div className="col-span-4 justify-self-center">
//                         <Button size="small">Button 1</Button>
//                         <Button size="small">Button 2</Button>
//                         <Button size="small">Button 3</Button>
//                         <Button size="small">Button 4</Button>
//                     </div>
//                 </div>
//                 <div className="col-span-2 col-start-9">
//                     <div className="col-span-5 justify-self-end">
//                         <Button size="small">Button 5</Button>
//                         <Button size="small">Button 6</Button>
//                         <Button size="small">Button 7</Button>
//                     </div>
//                 </div>
//             </div>

//             <div className={`h-screen ${isSidebarOpen ? 'w-72' : 'w-10'} overflow-hidden bg-[#CED4DA] flex transition-all duration-300 ease-in-out`}>
//                 <div className="flex flex-col m-1">

//                     <Tooltip placement="right" title={"Add Elements"} >
//                         <button className="p-2" onClick={toggleSidebar}>
//                             <PlusOutlined />
//                         </button>
//                     </Tooltip>
//                     <button className="p-2">
//                         <FileOutlined />
//                     </button>
//                     <button className="p-2 border-b border-black">
//                         <UnorderedListOutlined />
//                     </button>
//                     <button className="p-2">
//                         <CodeSandboxOutlined />
//                     </button>
//                     <button className="p-2">
//                         <SettingOutlined />
//                     </button>
//                     <button className="p-2">
//                         <FileOutlined />
//                     </button>
//                 </div>

//                 {isSidebarOpen && (
//                     <div className="open-sidebar-content w-full p-3 overflow-auto">
//                         <div className='px-1'>
//                             <div className=''>
//                                 <p className='flex justify-start'>Add</p>
//                                 <div className='flex  justify-between pt-2 pb-2'>
//                                     <Button size="small">Button 1</Button>
//                                     <Button size="small">Button 2</Button>
//                                 </div>
//                             </div>
//                             <Divider className='mb-3' />
//                             <div className=''>
//                                 <p className='flex justify-start'>Stucture</p>
//                                 <div className="grid grid-cols-3 grid-rows-2 justify-between p-1 m-1">
//                                     <div className='flex flex-col justify-center items-center'>
//                                         <img src={mySvgIcon} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Section</p>
//                                     </div>
//                                     <div className='flex flex-col justify-center items-center' >
//                                         <img src={Container} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Container</p>
//                                     </div> <div className='flex flex-col justify-center items-center' >
//                                         <img src={Stack} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Stack</p>
//                                     </div>
//                                     <div className='flex flex-col justify-center items-center'>
//                                         <img src={vflex} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>V Flex</p>
//                                     </div>
//                                     <div className='flex flex-col justify-center items-center'>
//                                         <img src={Hstack} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>H Flex</p>
//                                     </div>
//                                 </div>
//                                 <Divider className='mb-3' />
//                             </div>
//                             <div className=''>
//                                 <p className='flex justify-start'>Basic</p>
//                                 <div className="grid grid-cols-3 grid-rows-2 justify-between p-1 m-1">
//                                     <div className='flex flex-col justify-center items-center	' >
//                                         <img src={Divblock} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Div Block</p>
//                                     </div>
//                                     <div className='flex flex-col justify-center items-center	' >
//                                         <img src={List} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Div Block</p>
//                                     </div>
//                                     <div className='flex flex-col justify-center items-center	' >
//                                         <img src={ListItem} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Div Block</p>
//                                     </div>
//                                     <div className='flex flex-col justify-center items-center'>
//                                         <img src={LinkBlock} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Div Block</p>
//                                     </div>
//                                     <div className='flex flex-col justify-center items-center	' >
//                                         <img src={BlackButton} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Div Block</p>
//                                     </div>
//                                 </div>
//                                 <Divider className='mb-3' />
//                             </div>
//                             <div className=''>
//                                 <p className='flex justify-start'>Typography</p>
//                                 <div className="grid grid-cols-3 grid-rows-2 justify-between p-1 m-1">
//                                 <div className='flex flex-col justify-center items-center'>
//                                         <img src={Heading} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Heading</p>
//                                     </div>
//                                     <div className='flex flex-col justify-center items-center'>
//                                         <img src={Paragraph} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Paragraph</p>
//                                     </div>
//                                     <div className='flex flex-col justify-center items-center'>
//                                         <img src={TextLink} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Text Link</p>
//                                     </div>
//                                     <div className='flex flex-col justify-center items-center'>
//                                         <img src={TextBlock} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Text Block</p>
//                                     </div>
//                                     <div className='flex flex-col justify-center items-center'>
//                                         <img src={BlockQuote} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Block Quote</p>
//                                     </div>
//                                     <div className='flex flex-col justify-center items-center'>
//                                         <img src={RichText} alt="My Icon" className='h-full w-full' />
//                                         <p className='text-xs font-[600]'>Rich Text</p>
//                                     </div>
//                                 </div>
//                                 <Divider className='mb-3' />
//                             </div>
//                             <div className=''>
//                                 <p className='flex justify-start'>Stucture</p>
//                                 <div className="grid grid-cols-3 grid-rows-2 justify-between p-1 m-1">
//                                     <img src={mySvgIcon} alt="My Icon" className='h-full w-full' />
//                                     <img src={mySvgIcon} alt="My Icon" className='h-full w-full' />
//                                     <img src={mySvgIcon} alt="My Icon" className='h-full w-full' />
//                                     <img src={mySvgIcon} alt="My Icon" className='h-full w-full' />
//                                     <img src={mySvgIcon} alt="My Icon" className='h-full w-full' />
//                                     <img src={mySvgIcon} alt="My Icon" className='h-full w-full' />
//                                 </div>
//                                 <Divider className='mb-3' />
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default LeftSidebar;

//Working but Twice
// import React, { useState } from 'react';
// import { PlusOutlined, FileOutlined, UnorderedListOutlined, CodeSandboxOutlined, SettingOutlined } from '@ant-design/icons';
// import { Button, Divider, Tooltip } from 'antd';
// import mySvgIcon from '../assets/section.svg';
// import Container from '../assets/container.svg';
// import Stack from '../assets/stack.svg';
// import vflex from '../assets/vflex.svg';
// import Hstack from '../assets/hstack.svg';
// import Divblock from '../assets/divblock.svg';
// import List from '../assets/list.svg';
// import LinkBlock from '../assets/linkblock.svg';
// import ListItem from '../assets/listitem.svg';
// import BlackButton from '../assets/button.svg';
// import Heading from '../assets/heading.svg';
// import Paragraph from '../assets/paragraph.svg';
// import TextLink from '../assets/textlink.svg';
// import TextBlock from '../assets/text.svg';
// import BlockQuote from '../assets/blockquote.svg';
// import RichText from '../assets/richtext.svg';

// const sections = [
//     {
//         title: 'Add',
//         buttons: [
//             <Button size="small" key="button1">Button 1</Button>,
//             <Button size="small" key="button2">Button 2</Button>,
//         ],
//     },
//     {
//         title: 'Stucture',
//         icons: [
//             { icon: mySvgIcon, label: 'Section' },
//             { icon: Container, label: 'Container' },
//             { icon: Stack, label: 'Stack' },
//             { icon: vflex, label: 'V Flex' },
//             { icon: Hstack, label: 'H Flex' },
//         ],
//     },
//     {
//         title: 'Basic',
//         icons: [
//             { icon: Divblock, label: 'Div Block' },
//             { icon: List, label: 'List' },
//             { icon: ListItem, label: 'List Item' },
//             { icon: LinkBlock, label: 'Link Block' },
//             { icon: BlackButton, label: 'Black Button' },
//         ],
//     },
//     {
//         title: 'Typography',
//         icons: [
//             { icon: Heading, label: 'Heading' },
//             { icon: Paragraph, label: 'Paragraph' },
//             { icon: TextLink, label: 'Text Link' },
//             { icon: TextBlock, label: 'Text Block' },
//             { icon: BlockQuote, label: 'Block Quote' },
//             { icon: RichText, label: 'Rich Text' },
//         ],
//     },
// ];

// function LeftSidebar() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [showTooltip, setShowTooltip] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//         setShowTooltip(true);

//         setTimeout(() => {
//             setShowTooltip(false);
//         }, 1000);
//     };

//     return (
//         <div className='fixed w-full'>
//             <div className="grid grid-cols-10 grid-rows-1 gap-3 bg-[#CED4DA] h-10 justify-items-stretch items-center">
//                 <div className="justify-self-start">1</div>
//                 <div className="justify-self-start">
//                     <Button size="small">Primary Button</Button>
//                 </div>
//                 <div className="col-span-6">
//                     <div className="col-span-4 justify-self-center">
//                         {sections.map((section, index) => (
//                             <Button size="small" key={index}>
//                                 {section.title}
//                             </Button>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="col-span-2 col-start-9">
//                     <div className="col-span-5 justify-self-end">
//                         <Button size="small">Button 5</Button>
//                         <Button size="small">Button 6</Button>
//                         <Button size="small">Button 7</Button>
//                     </div>
//                 </div>
//             </div>

//             <div className={`h-screen ${isSidebarOpen ? 'w-72' : 'w-10'} overflow-hidden bg-[#CED4DA] flex transition-all duration-300 ease-in-out`}>
//                 <div className="flex flex-col m-1">
//                     <Tooltip placement="right" title="Add Elements">
//                         <button className="p-2" onClick={toggleSidebar}>
//                             <PlusOutlined />
//                         </button>
//                     </Tooltip>
//                     <button className="p-2">
//                         <FileOutlined />
//                     </button>
//                     <button className="p-2 border-b border-black">
//                         <UnorderedListOutlined />
//                     </button>
//                     <button className="p-2">
//                         <CodeSandboxOutlined />
//                     </button>
//                     <button className="p-2">
//                         <SettingOutlined />
//                     </button>
//                     <button className="p-2">
//                         <FileOutlined />
//                     </button>
//                 </div>

//                 {isSidebarOpen && (
//                     <div className="open-sidebar-content w-full p-3 overflow-auto">
//                         {sections.map((section, index) => (
//                             <div key={index}>
//                                 <p className='flex justify-start'>{section.title}</p>
//                                 <div className='flex justify-between pt-2 pb-2'>
//                                     {section.buttons && section.buttons.map((button, bIndex) => (
//                                         React.cloneElement(button, { key: `btn-${bIndex}` })
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                         <Divider className='mb-3' />
//                         {sections.map((section, index) => (
//                             section.icons && (
//                                 <div key={index}>
//                                     <p className='flex justify-start'>{section.title}</p>
//                                     <div className="grid grid-cols-3 grid-rows-2 justify-between p-1 m-1">
//                                         {section.icons.map((icon, iIndex) => (
//                                             <div key={iIndex} className='flex flex-col justify-center items-center'>
//                                                 <img src={icon.icon} alt="My Icon" className='h-full w-full' />
//                                                 <p className='text-xs font-[600]'>{icon.label}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <Divider className='mb-3' />
//                                 </div>
//                             )
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default LeftSidebar;

import React, { useState } from "react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, 1000);
  };

  return (
    <div className="fixed w-full">
      <div className="grid grid-cols-10 grid-rows-1 gap-3 bg-[#CED4DA] h-10 justify-items-stretch items-center">
        <div className="justify-self-start">1</div>
        <div className="justify-self-start">
          <Button size="small">Primary Button</Button>
        </div>
        <div className="col-span-6">
          <div className="col-span-4 justify-self-center">
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
            <Button size="small">Button 7</Button>
          </div>
        </div>
      </div>

      <div
        className={`h-screen ${
          isSidebarOpen ? "w-72" : "w-10"
        } overflow-hidden bg-[#CED4DA] flex transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col m-1">
          <Tooltip placement="right" title="Add Elements">
            <button className="p-2" onClick={toggleSidebar}>
              <PlusOutlined />
            </button>
          </Tooltip>
          <button className="p-2">
            <FileOutlined />
          </button>
          <button className="p-2 border-b border-black">
            <UnorderedListOutlined />
          </button>
          <button className="p-2">
            <CodeSandboxOutlined />
          </button>
          <button className="p-2">
            <SettingOutlined />
          </button>
          <button className="p-2">
            <FileOutlined />
          </button>
        </div>

        {isSidebarOpen && (
          <div className="open-sidebar-content w-full p-3 overflow-auto">
            {buttons.map((section, index) => (
              <div key={index}>
                <p className="flex justify-start">{section.title}</p>
                <div className="flex justify-between pt-2 pb-2">
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
      </div>
    </div>
  );
}

export default LeftSidebar;
