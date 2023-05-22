import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  ReactTable,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const CustomerPage = () => {
  const table3Data = React.useRef([
    {
      rowcustomertwo: "Jack",
      rowaddress: "2371 Reppert Coal Road",
      rowphone: "601-540-6298",
      roworderno: "#12931",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Fort Myers",
      rowaddress: "927 Sunburst Drive",
      rowphone: "239-346-5244",
      roworderno: "#12932",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Benjamin",
      rowaddress: "1671 Carriage Court",
      rowphone: "760-390-1331",
      roworderno: "#12933",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Flanagan",
      rowaddress: "121 Courtright Street",
      rowphone: "701-565-0439",
      roworderno: "#12934",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Nicoletti",
      rowaddress: "1060 Stark Hollow Road",
      rowphone: " 970-757-0036",
      roworderno: "#12935",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Robert",
      rowaddress: "424 Charter Street",
      rowphone: "913-207-2627",
      roworderno: "#12936",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Rankin",
      rowaddress: "60 Corpening Drive",
      rowphone: "248-930-4978",
      roworderno: "#12937",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Clementine",
      rowaddress: "4337 Fleming Way",
      rowphone: "757-735-4769",
      roworderno: "#12938",
      rowstatus: "images/img_morehorizontal.svg",
    },
    {
      rowcustomertwo: "Mitchell",
      rowaddress: "2758 My Drive",
      rowphone: "631-827-7596",
      roworderno: "#12939",
      rowstatus: "images/img_morehorizontal.svg",
    },
  ]);
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("rowcustomertwo", {
        cell: (info) => (
          <div className="flex flex-row gap-[57px] items-start justify-start p-[3px]">
            <CheckBox
              className="ml-[18px] mt-9"
              inputClassName="mr-[5px]"
              name="vectorstroke"
              id="vectorstroke"
            ></CheckBox>
            <div className="flex flex-row gap-3 items-center justify-center mt-8 pr-[3px] w-[29%]">
              <Img
                src="images/img_robototoyfacefinal2.png"
                className="h-6 md:h-auto rounded-[50%] w-6"
                alt="RobotoToyFaceFinalTwo"
              />
              <Text className="text-bluegray_800" size="lg">
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-start min-w-[273px] p-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Customer
            </Text>
          </div>
        ),
      }),
      table3ColumnHelper.accessor("rowaddress", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-[3px] py-[3px]">
            <Text className="mt-[38px] text-bluegray_800" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[260px] pr-[3px] py-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Address
            </Text>
          </div>
        ),
      }),
      table3ColumnHelper.accessor("rowphone", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-[7px] py-[7px]">
            <Text className="mt-8 text-indigo_400" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[203px] pr-[3px] py-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Phone
            </Text>
          </div>
        ),
      }),
      table3ColumnHelper.accessor("roworderno", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-[7px] py-[7px]">
            <Text className="mt-8 text-bluegray_800" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[154px] pr-[3px] py-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Order No.
            </Text>
          </div>
        ),
      }),
      table3ColumnHelper.accessor("rowstatus", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-between">
            <Button className="bg-green_700 cursor-pointer font-medium min-w-[93px] mt-8 py-[7px] rounded text-center text-sm text-white_A700">
              Paid
            </Button>
            <Img
              src={info?.getValue()}
              className="h-6 mr-[19px] mt-[35px] w-6"
              alt="morevertical"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-between min-w-[196px] pr-[3px] py-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Status
            </Text>
          </div>
        ),
      }),
    ];
  }, []);

  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-white_A700 flex flex-col items-center justify-start w-full">
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-60 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
              <div className="bg-white_A700 flex flex-col gap-9 items-center justify-start p-7 sm:px-5 w-full">
                <Img
                  src="images/img_logo.svg"
                  className="h-7 mt-2"
                  alt="Logo"
                />
                <div className="flex flex-col items-start justify-start mb-[460px] w-[86%] md:w-full">
                  <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[3px] w-[70%] md:w-full">
                    <Img
                      src="images/img_icon_12.svg"
                      className="h-5 w-5"
                      alt="Icon"
                    />
                    <Text className="text-bluegray_400" size="md">
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[3px] mt-[33px] w-[65%] md:w-full">
                    <Img
                      src="images/img_icon_14.svg"
                      className="h-5 w-5"
                      alt="Icon One"
                    />
                    <Text className="text-bluegray_800" size="md">
                      Customer
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[34px] items-center justify-between md:ml-[0] ml-[3px] mt-8 w-[99%] md:w-full">
                    <div className="flex flex-row gap-4 items-end justify-start">
                      <Img
                        src="images/img_icon_5.svg"
                        className="h-5 mb-0.5 w-5"
                        alt="Icon Two"
                      />
                      <Text className="mt-[5px] text-bluegray_400" size="md">
                        Message
                      </Text>
                    </div>
                    <Text
                      className="!font-bold bg-red_600 flex h-6 items-center justify-center rounded-[50%] text-center text-white_A700 w-6"
                      size="s"
                    >
                      3
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[3px] mt-8 w-[38%] md:w-full">
                    <Img
                      src="images/img_icon_6.svg"
                      className="h-5 w-5"
                      alt="Icon Three"
                    />
                    <Text className="text-bluegray_400" size="md">
                      File
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[3px] mt-[33px] w-[62%] md:w-full">
                    <Img
                      src="images/img_icon_7.svg"
                      className="h-5 w-5"
                      alt="Icon Four"
                    />
                    <Text className="mt-[3px] text-bluegray_400" size="md">
                      Calender
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-end justify-start md:ml-[0] ml-[3px] mt-[34px] w-[45%] md:w-full">
                    <Img
                      src="images/img_icon_8.svg"
                      className="h-5 mb-0.5 w-5"
                      alt="Icon Five"
                    />
                    <Text className="mt-[5px] text-bluegray_400" size="md">
                      Shop
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[3px] mt-[33px] w-[42%] md:w-full">
                    <Img
                      src="images/img_icon_9.svg"
                      className="h-5 w-5"
                      alt="Icon Six"
                    />
                    <Text className="text-bluegray_400" size="md">
                      Cart
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[13px] items-end justify-start mt-[31px] w-[61%] md:w-full">
                    <div className="bg-white_A700 flex flex-col h-[26px] items-center justify-start p-[3px] w-[26px]">
                      <div className="bg-bluegray_400 h-5 rounded-[50%] w-5"></div>
                    </div>
                    <Text
                      className="mb-0.5 mt-[7px] text-bluegray_400"
                      size="md"
                    >
                      Settings
                    </Text>
                  </div>
                </div>
              </div>
            </Sidebar>
            <Line className="bg-indigo_51 h-[750px] md:h-px mb-60 md:w-full w-px" />
            <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
              <header className="bg-white_A700 flex items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mx-auto my-2.5 w-[97%]">
                  <div className="header-row mt-3.5 mb-[9px]">
                    <Text className="text-bluegray_800" size="md">
                      Welcomback, Team!
                    </Text>
                    <div className="mobile-menu">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <Input
                    value={searchboxvalue}
                    onChange={(e) => setSearchboxvalue(e)}
                    wrapClassName="bg-white_A700 border border-bluegray_200 border-solid flex sm:hidden md:ml-[0] ml-[227px] pr-[35px] py-[13px] rounded w-[38%] md:w-full"
                    className="font-medium p-0 placeholder:text-bluegray_400 sm:hidden sm:pr-5 text-bluegray_400 text-left text-xs w-full"
                    name="SearchBox"
                    placeholder="Search..."
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer ml-4 mr-2 sm:hidden my-2.5"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#828fa2"
                        className="cursor-pointer sm:hidden my-auto"
                        onClick={() => setSearchboxvalue("")}
                        style={{
                          visibility:
                            searchboxvalue?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={20}
                        width={20}
                        viewBox="0 0 20 20"
                      />
                    }
                  ></Input>
                  <Img
                    src="images/img_shoppingbag.svg"
                    className="h-6 sm:hidden md:ml-[0] ml-[132px] w-6"
                    alt="shoppingbag"
                  />
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-6 sm:hidden items-end justify-start ml-6 md:ml-[0] w-6"
                    style={{
                      backgroundImage: "url('images/img_group2427.svg')",
                    }}
                  >
                    <div className="bg-red_600 h-2 mb-3.5 outline outline-[2px] outline-white_A700 rounded-[50%] w-2"></div>
                  </div>
                  <Text
                    className="!font-normal sm:hidden ml-6 md:ml-[0] text-gray_500"
                    size="lg"
                  >
                    <span className="text-gray_500 font-inter text-left text-base">
                      Hello,
                    </span>
                    <span className="text-bluegray_900 font-inter text-left text-base">
                      {" "}
                    </span>
                    <span className="text-bluegray_900 font-inter text-left text-base font-medium">
                      Sam
                    </span>
                  </Text>
                  <Img
                    src="images/img_sherlocktoyfacelow.png"
                    className="h-10 md:h-auto sm:hidden md:ml-[0] ml-[13px] rounded-[50%] w-10"
                    alt="SherlockToyFacelow"
                  />
                </div>
              </header>
              <div className="bg-gray_51 flex flex-col font-poppins gap-[37px] items-start justify-end p-[23px] sm:px-5 w-full">
                <Text className="mt-[15px] text-bluegray_900" size="2xl">
                  Customer
                </Text>
                <div className="bg-white_A700 flex flex-col font-inter items-center justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                  <div className="flex flex-col items-center justify-start mb-[3px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                      <Text
                        className="md:mt-0 mt-[5px] text-bluegray_900"
                        as="h6"
                        size="xl"
                      >
                        Customer List
                      </Text>
                      <Img
                        src="images/img_search_bluegray_900.svg"
                        className="h-6 md:ml-[0] ml-[891px] w-6"
                        alt="search"
                      />
                      <Img
                        src="images/img_plus_1.svg"
                        className="h-6 ml-6 md:ml-[0] w-6"
                        alt="plus"
                      />
                    </div>
                    <div className="overflow-auto mt-[39px] w-full">
                      <ReactTable
                        columns={table3Columns}
                        data={table3Data.current}
                        rowClass={""}
                        headerClass=""
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-8 w-full">
                      <div className="border border-indigo_51 border-solid h-8 w-8"></div>
                      <Button className="border border-bluegray_900 border-solid cursor-pointer font-medium h-8 ml-2 md:ml-[0] py-[9px] text-bluegray_900 text-center text-sm w-8">
                        1
                      </Button>
                      <Button className="border border-indigo_51 border-solid cursor-pointer font-medium h-8 ml-2 md:ml-[0] py-[9px] text-bluegray_800 text-center text-sm w-8">
                        2
                      </Button>
                      <Button className="border border-indigo_51 border-solid cursor-pointer font-medium h-8 ml-2 md:ml-[0] py-[9px] text-bluegray_800 text-center text-sm w-8">
                        ...
                      </Button>
                      <Button className="border border-indigo_51 border-solid cursor-pointer font-medium h-8 ml-2 md:ml-[0] py-[9px] text-bluegray_800 text-center text-sm w-8">
                        9
                      </Button>
                      <div className="border border-indigo_51 border-solid h-8 md:h-[11px] ml-2 md:ml-[0] p-2.5 relative w-8">
                        <Img
                          src="images/img_arrowright_bluegray_400.svg"
                          className="absolute h-[11px] inset-[0] justify-center m-auto"
                          alt="arrowright"
                        />
                      </div>
                      <Text
                        className="md:ml-[0] ml-[764px] text-bluegray_400"
                        size="md"
                      >
                        9 of 200 data
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerPage;
