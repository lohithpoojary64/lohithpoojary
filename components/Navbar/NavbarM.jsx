"use client";
import React from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
      >
        Resume
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        href="https://www.linkedin.com/in/lohith-poojary-64a741238/"
      >
        Linkdin
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        href="https://github.com/lohithpoojary64"
      >
        GitHub
      </a>
    ),
    key: "1",
  }, {
    label: (
      <a
        href="/contact"
      >
        Contact
      </a>
    ),
    key: "1",
  },
];

const NavbarM = () => {
  return (
    <div className="relative w-full h-[70px] p-5">
      <div className="lg:hidden flex justify-between w-full h-full border border-solid border-white text-white rounded-lg p-1">
        <h1 className="text-sm text-slate-300">Lohith Poojary</h1>
        <div>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default NavbarM;
