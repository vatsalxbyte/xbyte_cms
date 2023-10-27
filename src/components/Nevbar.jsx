import React, { useEffect } from 'react'
import Logo from '../assets/logo.svg'
import Plus from '../assets/plus.svg'


const Nevbar = () => {

useEffect(() => {
  console.log("vatsal");
}) 

    return (
        <div>
            {/* <div class="w-full h-10 p-5">
                <h1 class=''>Navbar</h1>

            </div> */}
            {/* <div class="grid grid-cols-1 nxl:flex justify-between items-center">
                <div class="w-full nxl:w-fit">
                    <div class="items-center py-[12px] nxl:py-[25px] col-span-1 flex justify-between border-b-[1px] border-solid nxl:border-none px-[20px] md:px-[40px] nxl:px-0">
                        <a class="flex items-center" href="/">
                            <img src="/Images/landingPage/mainLogoHustle.svg" width="300" height="200" alt="Hustle Logo" class="w-[100px] md:w-[110px] nxl:w-[148px] h-[20px] md:h-[22px] nxl:h-[30px]">
                        </a>
                        <div class="hidden md:flex nxl:hidden">
                            <div class="cursor-pointer">
                                <a href="/" target="_blank">
                                    <div class="font-MazzardMedium flex bg-[#0F143A] text-white py-[9px] xl:py-[12px] px-[15px] xl:px-[20px] text-[14px] xl:text-[16px] font-600 rounded-[4px] items-center">
                                        <img width="16" height="16" src="/Images/landingPage/phoneWhite.svg" class="text-white w-[16px] h-[16px] mr-[12px]" alt="Phone Logo"/>
                                            <p>Schedule a Call</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center md:hidden">
                            <a class="mr-[24px] cursor-pointer">
                                <img height="16" width="16" src="/Images/landingPage/phone.svg" alt="Phone Logo"/>
                            </a>
                            <a class="cursor-pointer">
                                <img height="16" width="16" src="/Images/landingPage/mobileBar.svg" alt="Navbar Logo"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="items-center col-span-4 px-[40px] nxl:px-0 py-[10px] nxl:py-0 justify-center hidden md:flex">
                    <ul class="flex z-[999999999]">
                        <li class="min-w-min mx-[7px] lg:mx-[14px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium text-[14px] text-[#001636EB] mt-[12px] relative">
                            <a class="" href="/">
                                <div class="text-[14px] xl:text-[16px] text-[#001636EB]">Home</div>
                            </a>
                        </li>
                        <li class="min-w-min mx-[7px] lg:mx-[14px] nxl:mx-[10px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium relative text-[14px] cursor-pointer text-[#001636EB] mt-[12px]">
                            <div class="text-[14px] xl:text-[16px] text-[#001636EB] pb-[10px]">Company</div>
                        </li>
                        <li class="min-w-min mx-[7px] lg:mx-[14px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium text-[14px] text-[#001636EB] mt-[12px] relative">
                            <a class="" href="/catalogue">
                                <div class="text-[14px] xl:text-[16px] text-[#001636EB]">Build a Box</div>
                            </a>
                        </li>
                        <li class="min-w-min mx-[7px] lg:mx-[14px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium text-[14px] text-[#001636EB] mt-[12px] relative">
                            <a class="" href="/clients">
                                <div class="text-[14px] xl:text-[16px] text-[#001636EB]">Our Clients</div>
                            </a>
                        </li>
                        <li class="min-w-min mx-[7px] lg:mx-[14px] nxl:mx-[10px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium relative text-[14px] cursor-pointer text-[#001636EB] mt-[12px]">
                            <div class="text-[14px] xl:text-[16px] text-[#001636EB] pb-[10px]">Partners</div>
                        </li>
                        <li class="min-w-min mx-[7px] lg:mx-[14px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium text-[14px] text-[#001636EB] mt-[12px] relative">
                            <a class="" href="/web">
                                <div class="text-[14px] xl:text-[16px] text-[#FF4A8CFA]">Web3 & Communities</div>
                                <div class="h-full absolute bottom-[-23px] left-0 w-full bg-top bg-no-repeat bg-contain" style="background-image:url('/Images/landingPage/headerBorder.svg')"></div>
                            </a>
                        </li>
                        <li class="min-w-min mx-[7px] lg:mx-[14px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium text-[14px] text-[#001636EB] mt-[12px] relative">
                            <a class="" href="/works">
                                <div class="text-[14px] xl:text-[16px] text-[#001636EB]">Latest Works</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="hidden nxl:flex">
                    <div class="cursor-pointer">
                        <a href="/" target="_blank">
                            <div class="font-mazzardMedium flex bg-[#0F143A] text-white py-[9px] xl:py-[12px] px-[15px] xl:px-[20px] text-[14px] xl:text-[16px] font-600 rounded-[4px] items-center">
                                <img width="25" height="25" src="/Images/landingPage/phoneWhite.webp" class="text-white w-[16px] h-[16px] mr-[12px]" alt="Phone White"/>
                                    <p>Schedule a Call</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div> */}
  <div className="grid grid-cols-1 nxl:flex justify-between items-center">
      <div className="w-full nxl:w-fit">
        <div className="items-center py-[12px] nxl:py-[25px] col-span-1 flex justify-between border-b-[1px] border-solid nxl:border-none px-[20px] md:px-[40px] nxl:px-0">
          <a className="flex items-center" href="/">
            <img src={Logo} width="300" height="200" alt="Hustle Logo" className="w-[100px] md:w-[110px] nxl:w-[148px] h-[20px] md:h-[22px] nxl:h-[30px]" />
          </a>
          <button className='p-2 h-30 w-20'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d={Plus} />
            </svg>
          </button>
          <div className="items-center col-span-4 px-[40px] nxl:px-0 py-[10px] nxl:py-0 justify-center hidden md:flex">
        <ul className="flex z-[999999999]">
          <li className="min-w-min mx-[7px] lg:mx-[14px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium text-[14px] text-[#001636EB] mt-[12px] relative">
            <a className="" href="/">
              <div className="text-[14px] xl:text-[16px] text-[#001636EB]">Home</div>
            </a>
          </li>
          <li className="min-w-min mx-[7px] lg:mx-[14px] nxl:mx-[10px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium relative text-[14px] cursor-pointer text-[#001636EB] mt-[12px]">
            <div className="text-[14px] xl:text-[16px] text-[#001636EB] pb-[10px]">About</div>
          </li>
          <li className="min-w-min mx-[7px] lg:mx-[14px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium text-[14px] text-[#001636EB] mt-[12px] relative">
            <a className="" href="/">
              <div className="text-[14px] xl:text-[16px] text-[#001636EB]">Company</div>
            </a>
          </li>
          <li className="min-w-min mx-[7px] lg:mx-[14px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium text-[14px] text-[#001636EB] mt-[12px] relative">
            <a className="" href="/">
              <div className="text-[14px] xl:text-[16px] text-[#001636EB]">Our Clients</div>
            </a>
          </li>
          <li className="min-w-min mx-[7px] lg:mx-[14px] nxl:mx-[10px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium relative text-[14px] cursor-pointer text-[#001636EB] mt-[12px]">
            <div className="text-[14px] xl:text-[16px] text-[#001636EB] pb-[10px]">Partners</div>
          </li>

          <li className="min-w-min mx-[7px] lg:mx-[14px] xl:mx-[11px] 2xl:mx-[14px] font-mazzardMedium text-[14px] text-[#001636EB] mt-[12px] relative">
            <a className="" href="/">
              <div className="text-[14px] xl:text-[16px] text-[#001636EB]">Latest Works</div>
            </a>
          </li>
        </ul>
      </div>

        </div>
      </div>
    </div>
        </div>
    )
}

export default Nevbar

