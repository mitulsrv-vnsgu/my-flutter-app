import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  ReactTable,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const CalenderMonthPage = () => {
  const table1Data = React.useRef([
    {
      rowframeseven: "9",
      rowframeeight: "10",
      rowframenine: "11",
      rowframeten: "Mêt",
      rowframeeleven: "13",
      rowframetwelve: "14",
      rowframethirteen: "15",
    },
    {
      rowframeseven: "23",
      rowframeeight: "24",
      rowframenine: "Mêt",
      rowframeten: "26",
      rowframeeleven: "27",
      rowframetwelve: "28",
      rowframethirteen: "29",
    },
  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("rowframeseven", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-evenly pb-[50px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-[17px] pt-4 text-bluegray_800"
              size="lg"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-evenly min-w-[114px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_800"
              size="lg"
            >
              2
            </Text>
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowframeeight", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pb-[50px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_800"
              size="lg"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[114px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_800"
              size="lg"
            >
              3
            </Text>
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowframenine", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pb-[50px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-[17px] pt-4 text-bluegray_800"
              size="lg"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[114px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_800"
              size="lg"
            >
              4
            </Text>
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowframeten", {
        cell: (info) => (
          <div className="border border-indigo_51 border-solid flex flex-col gap-5 justify-start p-1">
            <Text
              className="!font-normal h-[18px] md:ml-[0] ml-[76px] mt-3 text-bluegray_800"
              size="lg"
            >
              12
            </Text>
            <div className="bg-indigo_400 flex flex-row gap-[9px] items-start justify-center mb-[62px] p-1 rounded w-full">
              <Radio
                value="810am"
                className="font-medium mb-1.5 ml-3 text-left text-sm text-white_A700"
                inputClassName="bg-white_A700 h-2 mr-[5px] w-2"
                checked={false}
                name="profileViewsThirteen"
                label="810 am"
                id="810am"
              ></Radio>
              <Text
                className="!font-semibold mb-1.5 mr-0.5 text-white_A700"
                size="md"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-start min-w-[114px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_800"
              size="lg"
            >
              5
            </Text>
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowframeeleven", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pb-[50px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_800"
              size="lg"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[114px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_800"
              size="lg"
            >
              6
            </Text>
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowframetwelve", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pb-[50px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_800"
              size="lg"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[115px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_800"
              size="lg"
            >
              7
            </Text>
          </div>
        ),
      }),
      table1ColumnHelper.accessor("rowframethirteen", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-evenly pb-[50px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_800"
              size="lg"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-evenly min-w-[115px]">
            <Text
              className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_800"
              size="lg"
            >
              8
            </Text>
          </div>
        ),
      }),
    ];
  }, []);

  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-white_A700 flex flex-col gap-9 items-center justify-start p-[29px] sm:px-5 w-full">
              <Img
                src="images/img_logo.svg"
                className="h-7 mt-[7px]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[419px] w-[87%] md:w-full">
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
                    src="images/img_icon_4.svg"
                    className="h-5 w-5"
                    alt="Icon One"
                  />
                  <Text className="text-bluegray_400" size="md">
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
                    src="images/img_icon_13.svg"
                    className="h-5 w-5"
                    alt="Icon Four"
                  />
                  <Text className="mt-[3px] text-bluegray_800" size="md">
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
                  <Text className="mb-0.5 mt-[7px] text-bluegray_400" size="md">
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </Sidebar>
          <Line className="bg-indigo_51 h-[950px] md:h-px md:w-full w-px" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <header className="bg-white_A700 flex items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mx-auto my-2.5 w-[96%]">
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
                  style={{ backgroundImage: "url('images/img_group2427.svg')" }}
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
            <div className="bg-gray_51 flex flex-col font-poppins items-center justify-end p-[23px] sm:px-5 w-full">
              <div className="flex flex-col gap-[38px] items-start justify-start mt-3.5 w-full">
                <Text className="text-bluegray_900" size="2xl">
                  Calendar
                </Text>
                <div className="flex md:flex-col flex-row font-inter gap-5 items-center justify-between w-full">
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-[24%] md:w-full">
                    <div className="flex flex-col items-start justify-start mb-2 w-full">
                      <div className="flex flex-col gap-6 items-center justify-start w-full">
                        <Text
                          className="!font-normal leading-[22.00px] text-bluegray_400 w-full"
                          size="md"
                        >
                          Click in the calendar to create event
                        </Text>
                        <Button
                          className="bg-deep_orange_300 cursor-pointer flex items-center justify-center min-w-[209px] pl-[33px] py-[17px] rounded-[24px]"
                          rightIcon={
                            <Img
                              src="images/img_plus.svg"
                              className="ml-[5px] mr-8 my-3.5"
                              alt="plus"
                            />
                          }
                        >
                          <div className="font-semibold sm:pl-5 text-left text-sm text-white_A700">
                            Create new event
                          </div>
                        </Button>
                      </div>
                      <RadioGroup
                        className="flex flex-col mt-8 w-[62%]"
                        name="radiogroupprofileviewsone"
                      >
                        <Radio
                          value="NewEvent"
                          className="font-medium mr-[30px] text-base text-bluegray_800 text-left"
                          inputClassName="bg-green_700 h-2 mr-[5px] w-2"
                          checked={false}
                          name="radiogroupprofileviewsone"
                          label="New Event"
                          id="NewEvent"
                        ></Radio>
                        <Radio
                          value="MyEventOnly"
                          className="font-medium mr-0.5 mt-[25px] text-base text-bluegray_800 text-left"
                          inputClassName="bg-indigo_400 h-2 mr-[5px] w-2"
                          checked={false}
                          name="radiogroupprofileviewsone"
                          label="My Event Only"
                          id="MyEventOnly"
                        ></Radio>
                        <Radio
                          value="Meeting"
                          className="font-medium mr-[50px] mt-5 text-base text-bluegray_800 text-left"
                          inputClassName="bg-amber_300 h-2 mr-[5px] w-2"
                          checked={false}
                          name="radiogroupprofileviewsone"
                          label="Meeting"
                          id="Meeting"
                        ></Radio>
                        <Radio
                          value="Error"
                          className="font-medium mb-[5px] mr-[75px] mt-5 text-base text-bluegray_800 text-left"
                          inputClassName="bg-red_600 h-2 mr-[5px] w-2"
                          checked={false}
                          name="radiogroupprofileviewsone"
                          label="Error"
                          id="Error"
                        ></Radio>
                      </RadioGroup>
                      <Line className="bg-indigo_51 h-px mt-8 w-full" />
                      <Text
                        className="!font-normal mt-[31px] text-bluegray_400"
                        size="md"
                      >
                        Team members
                      </Text>
                      <List
                        className="flex-col grid items-center mt-[38px] w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-start justify-start w-full">
                          <Text className="text-bluegray_800" as="h6" size="xl">
                            🚗
                          </Text>
                          <Text
                            className="ml-2 mt-0.5 text-bluegray_900"
                            size="lg"
                          >
                            @Avo
                          </Text>
                          <Button className="bg-gray_104 cursor-pointer font-medium min-w-[102px] ml-9 py-1.5 rounded text-center text-indigo_400 text-xs">
                            Lead design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-between w-full">
                          <Text className="text-bluegray_800" as="h6" size="xl">
                            ⚽
                          </Text>
                          <Text className="mt-0.5 text-bluegray_900" size="lg">
                            @Nhun
                          </Text>
                          <Button className="bg-gray_104 cursor-pointer font-medium min-w-[102px] py-1.5 rounded text-center text-indigo_400 text-xs">
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-full">
                          <Text className="text-bluegray_800" as="h6" size="xl">
                            👑
                          </Text>
                          <Text
                            className="ml-2 mt-0.5 text-bluegray_900"
                            size="lg"
                          >
                            @Riri
                          </Text>
                          <Button className="bg-gray_104 cursor-pointer font-medium min-w-[102px] ml-10 py-1.5 rounded text-center text-indigo_400 text-xs">
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-full">
                          <Text className="text-bluegray_800" as="h6" size="xl">
                            ✈
                          </Text>
                          <Text
                            className="ml-2 mt-0.5 text-bluegray_900"
                            size="lg"
                          >
                            @Juki
                          </Text>
                          <Button className="bg-gray_104 cursor-pointer font-medium min-w-[102px] ml-[34px] py-1.5 rounded text-center text-indigo_400 text-xs">
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-full">
                          <Text className="text-bluegray_800" as="h6" size="xl">
                            💣
                          </Text>
                          <Text
                            className="ml-2 mt-0.5 text-bluegray_900"
                            size="lg"
                          >
                            @Nobi
                          </Text>
                          <Button className="bg-gray_104 cursor-pointer font-medium min-w-[102px] ml-[29px] py-1.5 rounded text-center text-indigo_400 text-xs">
                            Product design
                          </Button>
                        </div>
                      </List>
                      <div className="flex flex-row gap-2 items-start justify-start mt-8 w-[63%] md:w-full">
                        <Img
                          src="images/img_plus_24X24.svg"
                          className="h-6 w-6"
                          alt="plus One"
                        />
                        <Text
                          className="!font-normal text-deep_orange_300"
                          size="lg"
                        >
                          Add member
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded shadow-bs w-3/4 md:w-full">
                    <div className="flex flex-col gap-[30px] items-center justify-start w-[99%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex sm:flex-1 flex-row gap-[35px] items-end justify-between w-[38%] sm:w-full">
                          <Text
                            className="mb-0.5 mt-3 text-bluegray_900"
                            as="h4"
                            size="3xl"
                          >
                            <span className="md:text-[22px] sm:text-xl text-bluegray_900 font-inter text-left text-2xl font-bold">
                              January{" "}
                            </span>
                            <span className="md:text-[22px] sm:text-xl text-indigo_400 font-inter text-left text-2xl font-bold">
                              2022
                            </span>
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between w-[33%]">
                            <Button className="bg-gray_51 flex h-10 items-center justify-center p-2.5 rounded-[50%] w-10">
                              <Img
                                src="images/img_buttonprimary_5.svg"
                                className="h-5"
                                alt="ButtonPrimary"
                              />
                            </Button>
                            <Button className="bg-gray_51 flex h-10 items-center justify-center p-2.5 rounded-[50%] w-10">
                              <Img
                                src="images/img_arrowright.svg"
                                className="h-5"
                                alt="arrowright"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-row gap-2 items-center justify-between w-[31%] sm:w-full">
                          <Button className="border border-indigo_51 border-solid cursor-pointer font-semibold px-4 py-[9px] rounded-[20px] text-bluegray_800 text-center text-sm w-[75px]">
                            Day
                          </Button>
                          <Button className="border border-indigo_51 border-solid cursor-pointer font-semibold px-4 py-[9px] rounded-[20px] text-bluegray_800 text-center text-sm w-[75px]">
                            Week
                          </Button>
                          <Button className="bg-bluegray_900 cursor-pointer font-semibold px-4 py-[9px] rounded-[20px] text-center text-sm text-white_A700 w-[75px]">
                            Month
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                          <Button className="border border-indigo_51 border-solid cursor-pointer font-semibold min-w-[114px] py-3.5 text-base text-bluegray_800 text-center">
                            Sun
                          </Button>
                          <Button className="border border-indigo_51 border-solid cursor-pointer font-semibold min-w-[114px] py-3.5 text-base text-bluegray_800 text-center">
                            Mon
                          </Button>
                          <Button className="border border-indigo_51 border-solid cursor-pointer font-semibold min-w-[114px] py-3.5 text-base text-bluegray_800 text-center">
                            Tue
                          </Button>
                          <Button className="border border-indigo_51 border-solid cursor-pointer font-semibold min-w-[114px] py-3.5 text-base text-bluegray_800 text-center">
                            Wed
                          </Button>
                          <Button className="border border-indigo_51 border-solid cursor-pointer font-semibold min-w-[114px] py-3.5 text-base text-bluegray_800 text-center">
                            Thu
                          </Button>
                          <Button className="border border-indigo_51 border-solid cursor-pointer font-semibold min-w-[115px] py-[15px] text-base text-bluegray_800 text-center">
                            Fri
                          </Button>
                          <Button className="border border-indigo_51 border-solid cursor-pointer font-semibold min-w-[115px] py-3.5 text-base text-bluegray_800 text-center">
                            Sa
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                          <Text
                            className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-[17px] pt-4 text-bluegray_400"
                            size="lg"
                          >
                            26
                          </Text>
                          <Text
                            className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_400"
                            size="lg"
                          >
                            27
                          </Text>
                          <Text
                            className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_400"
                            size="lg"
                          >
                            28
                          </Text>
                          <Text
                            className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_400"
                            size="lg"
                          >
                            29
                          </Text>
                          <Text
                            className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-4 text-bluegray_400"
                            size="lg"
                          >
                            30
                          </Text>
                          <Text
                            className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-[17px] pt-4 text-bluegray_400"
                            size="lg"
                          >
                            31
                          </Text>
                          <Text
                            className="!font-normal border border-indigo_51 border-solid pb-[35px] sm:pl-5 pl-[35px] pr-[17px] pt-4 text-bluegray_800"
                            size="lg"
                          >
                            1
                          </Text>
                        </div>
                        <div className="overflow-auto w-full">
                          <ReactTable
                            columns={table1Columns}
                            data={table1Data.current}
                            rowClass={""}
                            headerClass=""
                          />
                        </div>
                        <div className="flex flex-row items-center justify-end md:px-10 sm:px-5 px-[114px] w-full">
                          <div className="border border-indigo_51 border-solid flex flex-col items-center justify-end p-1 w-[21%]">
                            <div className="bg-deep_orange_300 h-[30px] mb-3 mt-[50px] rounded w-full"></div>
                          </div>
                          <div className="border border-indigo_51 border-solid flex flex-col items-center justify-end p-1 w-[21%]">
                            <div className="bg-red_600 h-[30px] mb-3 mt-[50px] rounded w-full"></div>
                          </div>
                        </div>
                        <div className="h-[100px] mt-[100px] w-full"></div>
                      </div>
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

export default CalenderMonthPage;
