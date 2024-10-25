"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: <h1>Mobile Number</h1>,
    key: "0",
  },
  {
    label: 7022154106,
    key: "1",
  },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="hidden w-[100%] h-[100px] lg:flex justify-center items-center ">
      <div className="relative w-[50%] h-[60px] flex justify-between items-center px-7  rounded-3xl text-white border border-solid border-white mt-6">
        <h1 className="font-bold">Lohith Poojary</h1>
        <div className="w-[80%]">
          <ul className="list-none flex justify-between">
            <Link href="/" className="hover:text-[20px] transition-all ">
              <li>Resume</li>
            </Link>
            <Link href="https://www.linkedin.com/in/lohith-poojary-64a741238/" className="hover:text-[20px] transition-all">
              <li>Linkdin</li>
            </Link>
            <Link href="https://github.com/lohithpoojary64" className="hover:text-[20px] transition-all">
              <li>Github</li>
            </Link>
            <Link href="" className="hover:text-[20px] transition-all">
              <li>Projects</li>
            </Link>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <li className="cursor-pointer hover:text-[20px] transition-all">Contact</li>
                </Space>
              </a>
            </Dropdown>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
