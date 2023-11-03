import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACTJS.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">
                    <a className="block w-[80px]">Trang chủ</a>
                </li>
                <li className="p-4">
                    <a className="block w-[80px]">Công ty</a>
                </li>
                <li className="p-4">
                    <a className="block w-[80px]">Tài nguyên</a>
                </li>
                <li className="p-4">
                    <a className="block w-[80px]">Thông tin</a>
                </li>
                <li className="p-4">
                    <a className="block w-[80px]">Liên hệ</a>
                </li>
            </ul>
            <div onClick={() => handleNav()} className="block md:hidden">
                {
                    nav ? "" : <AiOutlineMenu size={20} />
                }
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACTJS.</h1>
                <div onClick={() => handleNav()} className="absolute top-3 right-1">
                    <AiOutlineClose size={20} />
                </div>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Trang chủ</li>
                    <li className="p-4 border-b border-gray-600">Công ty</li>
                    <li className="p-4 border-b border-gray-600">Tài nguyên</li>
                    <li className="p-4 border-b border-gray-600">Thông tin</li>
                    <li className="p-4">Liên hệ</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
