import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const DashboardTwoPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-60 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-white_A700 flex flex-col gap-9 items-center justify-start p-7 sm:px-5 w-full">
              <Img src="images/img_logo.svg" className="h-7 mt-2" alt="Logo" />
              <div className="flex flex-col items-start justify-start mb-[1012px] w-[86%] md:w-full">
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[3px] w-[70%] md:w-full">
                  <Img
                    src="images/img_icon_3.svg"
                    className="h-5 w-5"
                    alt="Icon"
                  />
                  <Text className="text-bluegray_800" size="md">
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
                  <Text className="mb-0.5 mt-[7px] text-bluegray_400" size="md">
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </Sidebar>
          <Line className="bg-indigo_51 h-[1542px] md:h-px md:w-full w-px" />
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
            <div className="bg-gray_51 flex flex-col font-poppins items-center justify-start sm:pl-5 pl-[23px] w-full">
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[74%] md:w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text className="text-bluegray_900" size="2xl">
                      Overview
                    </Text>
                    <div className="flex flex-row font-inter gap-3 items-center justify-between w-1/4">
                      <Button className="bg-white_A700 flex h-12 items-center justify-center p-3.5 rounded w-12">
                        <Img
                          src="images/img_buttonprimary.svg"
                          className="h-5"
                          alt="ButtonPrimary"
                        />
                      </Button>
                      <div className="bg-deep_orange_300 flex flex-row gap-[35px] items-center justify-between p-3.5 rounded w-[72%]">
                        <Text className="ml-[3px] text-white_A700" size="md">
                          Add task
                        </Text>
                        <Img
                          src="images/img_plus.svg"
                          className="h-5 mr-0.5 w-5"
                          alt="plus"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-inter gap-5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[44%] md:w-full">
                        <div className="gap-5 grid grid-cols-2 justify-center min-h-[auto] w-full">
                          <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-[98%] md:w-full">
                              <Button className="bg-gray_102 flex h-12 items-center justify-center p-3.5 rounded w-12">
                                <Img
                                  src="images/img_buttonprimary_48X48.svg"
                                  className="h-5"
                                  alt="ButtonPrimary One"
                                />
                              </Button>
                              <div className="flex flex-col gap-3 items-center justify-end pr-1 py-1 w-full">
                                <Text
                                  className="text-bluegray_800"
                                  as="h6"
                                  size="xl"
                                >
                                  50+
                                </Text>
                                <Text
                                  className="!font-normal text-bluegray_800"
                                  size="md"
                                >
                                  Available Tasks
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-[98%] md:w-full">
                              <Button className="bg-yellow_50 flex h-12 items-center justify-center p-3.5 rounded w-12">
                                <Img
                                  src="images/img_buttonprimary_1.svg"
                                  className="h-5"
                                  alt="ButtonPrimary Two"
                                />
                              </Button>
                              <div className="flex flex-col gap-3 items-center justify-end pr-1 py-1 w-full">
                                <Text
                                  className="text-bluegray_800"
                                  as="h6"
                                  size="xl"
                                >
                                  20
                                </Text>
                                <Text
                                  className="!font-normal text-bluegray_800"
                                  size="md"
                                >
                                  Obsolete Tasks
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-[98%] md:w-full">
                              <Button className="bg-gray_103 flex h-12 items-center justify-center p-3.5 rounded w-12">
                                <Img
                                  src="images/img_buttonprimary_2.svg"
                                  className="h-5"
                                  alt="ButtonPrimary Three"
                                />
                              </Button>
                              <div className="flex flex-col gap-[13px] justify-end pr-[5px] pt-[5px] w-full">
                                <Text
                                  className="ml-9 md:ml-[0] mr-[42px] text-bluegray_800"
                                  as="h6"
                                  size="xl"
                                >
                                  23
                                </Text>
                                <Text
                                  className="!font-normal mr-[27px] text-bluegray_800"
                                  size="md"
                                >
                                  In Progress
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-[98%] md:w-full">
                              <Button className="bg-gray_52 flex h-12 items-center justify-center p-3.5 rounded w-12">
                                <Img
                                  src="images/img_buttonprimary_3.svg"
                                  className="h-5"
                                  alt="ButtonPrimary Four"
                                />
                              </Button>
                              <div className="flex flex-col gap-3 justify-end pr-1 py-1 w-full">
                                <Text
                                  className="ml-9 md:ml-[0] mr-[43px] text-bluegray_800"
                                  as="h6"
                                  size="xl"
                                >
                                  35
                                </Text>
                                <Text
                                  className="!font-normal mr-[27px] text-bluegray_800"
                                  size="md"
                                >
                                  Done Tasks
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded shadow-bs w-[55%] md:w-full">
                        <div className="flex flex-col items-start justify-start mb-2 w-[97%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-bluegray_900"
                              as="h6"
                              size="xl"
                            >
                              Statistics
                            </Text>
                            <Button
                              className="bg-white_A700 border border-bluegray_200 border-solid cursor-pointer flex items-center justify-center min-w-[172px] pr-4 py-[11px] rounded shadow-bs"
                              leftIcon={
                                <Img
                                  src="images/img_calendar.svg"
                                  className="ml-4 mr-2.5 my-2.5"
                                  alt="calendar"
                                />
                              }
                            >
                              <div className="font-semibold text-bluegray_800 text-left text-sm">
                                13 Aug - 20 Aug
                              </div>
                            </Button>
                          </div>
                          <div className="flex flex-row gap-[31px] items-center justify-between mt-7 w-[99%] md:w-full">
                            <div className="flex flex-col gap-[27px] items-start justify-start">
                              <Text className="text-bluegray_400" size="s">
                                800
                              </Text>
                              <Text className="text-bluegray_400" size="s">
                                600
                              </Text>
                              <Text className="text-bluegray_400" size="s">
                                400
                              </Text>
                              <Text className="text-bluegray_400" size="s">
                                200
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[15px] text-bluegray_400"
                                size="s"
                              >
                                0
                              </Text>
                            </div>
                            <Img
                              src="images/img_frame_176X344.svg"
                              className="h-44"
                              alt="Frame"
                            />
                          </div>
                          <div className="flex flex-row gap-[34px] items-start justify-start md:ml-[0] ml-[43px] mt-5 pb-0.5 px-0.5 w-[89%] md:w-full">
                            <Text className="text-bluegray_400" size="s">
                              Mon
                            </Text>
                            <Text className="text-bluegray_400" size="s">
                              Tue
                            </Text>
                            <Text className="text-bluegray_400" size="s">
                              Wed
                            </Text>
                            <Text className="text-bluegray_400" size="s">
                              Thu
                            </Text>
                            <Text className="text-bluegray_400" size="s">
                              Fri
                            </Text>
                            <Text className="text-bluegray_400" size="s">
                              Sat
                            </Text>
                            <Text className="text-bluegray_400" size="s">
                              Sun
                            </Text>
                          </div>
                          <div className="flex flex-row gap-6 items-start justify-center md:ml-[0] ml-[125px] mt-8 w-[38%] md:w-full">
                            <div className="flex flex-row gap-2 items-start justify-start w-[38%]">
                              <div className="bg-amber_300 h-1.5 mb-0.5 mt-[5px] rounded-[50%] w-1.5"></div>
                              <Text
                                className="!font-medium text-bluegray_400"
                                size="s"
                              >
                                Income
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-[47%]">
                              <div className="bg-indigo_400 h-1.5 my-[5px] rounded-[50%] w-1.5"></div>
                              <Text
                                className="!font-medium text-bluegray_400"
                                size="s"
                              >
                                Expenses
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-[44%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-end justify-between w-full">
                            <Text
                              className="my-[5px] text-bluegray_900"
                              as="h6"
                              size="xl"
                            >
                              Projects
                            </Text>
                            <Img
                              src="images/img_morehorizontal.svg"
                              className="h-8 w-8"
                              alt="morehorizontal"
                            />
                          </div>
                          <div className="h-[190px] md:h-[218px] mt-7 relative w-[190px]">
                            <div className="h-[190px] m-auto w-[190px]">
                              <div className="!w-[190px] border-solid h-[190px] m-auto overflow-visible">
                                <CircularProgressbar
                                  className="!w-[190px] border-solid h-[190px] m-auto overflow-visible"
                                  value={17}
                                  strokeWidth={1}
                                  styles={{
                                    trail: { strokeWidth: 1, stroke: "" },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(-23deg)",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                              <div className="!w-[190px] absolute border-solid h-[190px] inset-[0] justify-center m-auto overflow-visible">
                                <CircularProgressbar
                                  className="!w-[190px] absolute border-solid h-[190px] inset-[0] justify-center m-auto overflow-visible"
                                  value={24}
                                  strokeWidth={1}
                                  styles={{
                                    trail: { strokeWidth: 1, stroke: "" },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(51deg)",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                            </div>
                            <div className="absolute bottom-[34%] flex flex-col gap-[9px] items-center justify-start right-[31%]">
                              <Text
                                className="text-bluegray_800"
                                as="h4"
                                size="3xl"
                              >
                                230+
                              </Text>
                              <Text
                                className="!font-normal text-bluegray_800"
                                size="md"
                              >
                                Projects
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-8 items-start justify-center mt-6 w-[72%] md:w-full">
                            <div className="flex flex-row gap-3 items-center justify-between w-[22%]">
                              <div className="bg-green_700 h-1.5 my-[17px] rounded-[50%] w-1.5"></div>
                              <div className="flex flex-col gap-1.5 items-start justify-start">
                                <Text
                                  className="!font-semibold text-bluegray_900"
                                  as="h6"
                                  size="lg"
                                >
                                  100
                                </Text>
                                <Text
                                  className="!font-medium text-bluegray_400"
                                  size="s"
                                >
                                  High
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-3 items-center justify-center w-1/5">
                              <div className="bg-indigo_400 h-1.5 mb-3.5 mt-[17px] rounded-[50%] w-1.5"></div>
                              <div className="flex flex-col gap-1.5 items-start justify-start">
                                <Text
                                  className="!font-semibold text-bluegray_900"
                                  as="h6"
                                  size="lg"
                                >
                                  30
                                </Text>
                                <Text
                                  className="!font-medium text-bluegray_400"
                                  size="s"
                                >
                                  Low
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-3 items-center justify-between w-[30%]">
                              <div className="bg-amber_300 h-1.5 my-[17px] rounded-[50%] w-1.5"></div>
                              <div className="flex flex-col gap-1.5 items-start justify-start">
                                <Text
                                  className="!font-semibold text-bluegray_900"
                                  as="h6"
                                  size="lg"
                                >
                                  100
                                </Text>
                                <Text
                                  className="!font-medium text-bluegray_400"
                                  size="s"
                                >
                                  Medium
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded shadow-bs w-[55%] md:w-full">
                        <div className="flex flex-col gap-8 items-center justify-start mb-1.5 w-[98%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-bluegray_900"
                              as="h6"
                              size="xl"
                            >
                              Active tasks
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-between w-3/5">
                              <Button className="bg-bluegray_900 cursor-pointer font-semibold min-w-[75px] py-[11px] rounded text-center text-sm text-white_A700">
                                Day
                              </Button>
                              <Button className="border border-indigo_51 border-solid cursor-pointer font-semibold min-w-[75px] py-[13px] rounded text-bluegray_800 text-center text-sm">
                                Week
                              </Button>
                              <Button className="border border-indigo_51 border-solid cursor-pointer font-semibold min-w-[75px] py-[13px] rounded text-bluegray_800 text-center text-sm">
                                Month
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <List
                              className="flex-col gap-5 grid items-center w-[97%]"
                              orientation="vertical"
                            >
                              <div className="flex flex-row gap-5 items-center justify-start mr-5 my-0 w-[95%] md:w-full">
                                <Img
                                  src="images/img_square.svg"
                                  className="h-6 w-6"
                                  alt="square"
                                />
                                <div className="flex flex-col gap-2 items-start justify-start w-[89%]">
                                  <Text
                                    className="!font-medium text-bluegray_400"
                                    size="s"
                                  >
                                    ACKERMAN_LHN
                                  </Text>
                                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                                    <Line className="bg-red_600 h-4 my-1 w-1" />
                                    <Text
                                      className="text-bluegray_900"
                                      size="lg"
                                    >
                                      <span className="text-bluegray_900 font-inter text-left text-base font-medium">
                                        Changelog Revamp{" "}
                                      </span>
                                      <span className="text-red_600 font-inter text-left text-base font-medium">
                                        #ver 1.0
                                      </span>
                                      <span className="text-bluegray_900 font-inter text-left text-base font-medium">
                                        {" "}
                                        Homescreen{" "}
                                      </span>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-px bg-indigo_51 w-full" />
                              <div className="flex flex-row gap-5 items-center justify-start mr-[75px] my-0 w-[81%] md:w-full">
                                <Img
                                  src="images/img_squarecheckbox.svg"
                                  className="h-6 w-6"
                                  alt="squarecheckbox"
                                />
                                <div className="flex flex-col gap-[11px] items-start justify-start w-[87%]">
                                  <Text
                                    className="!font-medium text-bluegray_400"
                                    size="s"
                                  >
                                    JOHNSON
                                  </Text>
                                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                                    <Line className="bg-deep_orange_300 h-4 my-1 w-1" />
                                    <Text
                                      className="text-bluegray_900"
                                      size="lg"
                                    >
                                      Create user flow for Data Projects
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-px bg-indigo_51 w-full" />
                              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between my-0 w-full">
                                <Img
                                  src="images/img_square.svg"
                                  className="h-6 w-6"
                                  alt="square One"
                                />
                                <div className="flex flex-col gap-[11px] items-start justify-start">
                                  <Text
                                    className="!font-medium text-bluegray_400"
                                    size="s"
                                  >
                                    AVORI
                                  </Text>
                                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                                    <Line className="bg-indigo_400 h-4 my-4 w-1" />
                                    <Text
                                      className="sm:flex-1 leading-[24.00px] text-bluegray_900 w-[97%] sm:w-full"
                                      size="lg"
                                    >
                                      Gather to discuss about new project
                                      deriving from Avocado
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                          <Text
                            className="mb-1 mt-[7px] text-bluegray_900"
                            as="h6"
                            size="xl"
                          >
                            Posting Tasks
                          </Text>
                          <Img
                            src="images/img_morehorizontal.svg"
                            className="h-8 w-8"
                            alt="morehorizontal One"
                          />
                        </div>
                        <Text
                          className="!font-normal mt-[9px] text-bluegray_900"
                          size="md"
                        >
                          <a
                            href="javascript:"
                            className="text-bluegray_900 font-inter text-left text-sm underline"
                          >
                            Crucial tasks
                          </a>
                          <span className="text-bluegray_900 font-inter text-left text-sm">
                            /{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-bluegray_900 font-inter text-left text-sm underline"
                          >
                            Urgent tasks
                          </a>
                          <span className="text-bluegray_900 font-inter text-left text-sm">
                            /{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-bluegray_900 font-inter text-left text-sm underline"
                          >
                            Normal tasks
                          </a>
                        </Text>
                        <div className="sm:h-[330px] h-[401px] md:h-[471px] mt-[29px] relative w-full">
                          <div className="absolute bg-gray_51 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-evenly mx-auto top-[0] w-full">
                            <div className="flex h-12 md:h-[46px] justify-end relative w-[13%] md:w-full">
                              <Text
                                className="!font-semibold mb-3.5 ml-auto mr-6 mt-auto text-bluegray_900"
                                size="md"
                              >
                                Time
                              </Text>
                              <div className="absolute bg-deep_orange_300 flex flex-col h-full inset-[0] items-center justify-center m-auto p-4 w-full">
                                <Text
                                  className="!font-semibold text-white_A700"
                                  size="md"
                                >
                                  Time
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly w-[88%] md:w-full">
                              <div className="flex flex-col items-center justify-start p-4">
                                <Text className="text-bluegray_400" size="md">
                                  Mon 10
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start p-4">
                                <Text className="text-bluegray_400" size="md">
                                  Tue 11
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start p-4">
                                <Text className="text-bluegray_400" size="md">
                                  Wed 12
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start p-4">
                                <Text className="text-bluegray_400" size="md">
                                  Thu 13
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start p-4">
                                <Text className="text-bluegray_400" size="md">
                                  Fri 14
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start p-4">
                                <Text className="text-bluegray_400" size="md">
                                  Sat 15
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-[7%] flex flex-col items-start justify-start left-[2%]">
                            <Text
                              className="md:ml-[0] ml-[3px] text-bluegray_400"
                              size="s"
                            >
                              09 am
                            </Text>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-[34px] text-bluegray_400"
                              size="s"
                            >
                              10 am
                            </Text>
                            <Text
                              className="mt-[34px] text-bluegray_400"
                              size="s"
                            >
                              11 am
                            </Text>
                            <Text
                              className="mt-[34px] text-bluegray_400"
                              size="s"
                            >
                              12 pm
                            </Text>
                            <Text className="mt-8 text-bluegray_400" size="s">
                              01 pm
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-8 text-bluegray_400"
                              size="s"
                            >
                              02 pm
                            </Text>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-8 text-bluegray_400"
                              size="s"
                            >
                              03 pm
                            </Text>
                          </div>
                          <List
                            className="absolute bg-cover bg-no-repeat flex-col gap-2.5 grid h-[401px] inset-y-[0] my-auto p-[11px] right-[0] w-[89%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group2313.svg')",
                            }}
                            orientation="vertical"
                          >
                            <div className="bg-white_A700 flex flex-col items-start justify-start ml-10 mr-[478px] my-0 rounded shadow-bs w-1/4 md:w-full">
                              <div className="flex flex-row gap-4 items-center justify-start w-[72%] md:w-full">
                                <Line className="bg-green_700 h-[171px] w-1" />
                                <div className="flex flex-col items-start justify-start w-[84%]">
                                  <Button className="bg-deep_orange_300 cursor-pointer font-poppins font-semibold min-w-[93px] py-1.5 rounded text-[10px] text-center text-white_A700">
                                    #Data projects
                                  </Button>
                                  <Text
                                    className="!font-semibold font-inter mt-[13px] text-bluegray_800"
                                    size="md"
                                  >
                                    Revamp UI, UX
                                  </Text>
                                  <div className="h-6 md:h-[85px] mt-[61px] relative w-[36%]">
                                    <Img
                                      src="images/img_robototoyfacefinal2.png"
                                      className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                      alt="RobotoToyFaceFinalTwo"
                                    />
                                    <Img
                                      src="images/img_fidenza978toyface.png"
                                      className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                      alt="Fidenza978ToyFace"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col items-start justify-start ml-[297px] mr-[289px] my-0 rounded shadow-bs w-[15%] md:w-full">
                              <div className="flex flex-row gap-4 items-center justify-start w-[77%] md:w-full">
                                <Line className="bg-indigo_400 h-[137px] rounded w-1" />
                                <div className="flex flex-col items-start justify-start w-[74%]">
                                  <Button className="bg-indigo_400 cursor-pointer font-poppins font-semibold min-w-[49px] py-[7px] rounded text-[10px] text-center text-white_A700">
                                    #2011
                                  </Button>
                                  <Text
                                    className="!font-semibold font-inter mt-[13px] text-bluegray_800"
                                    size="md"
                                  >
                                    Meeting
                                  </Text>
                                  <div className="h-6 md:h-[51px] mt-[27px] relative w-[65%]">
                                    <Img
                                      src="images/img_robototoyfacefinal2.png"
                                      className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                                      alt="RobotoToyFaceFinalTwo One"
                                    />
                                    <Img
                                      src="images/img_fidenza978toyface.png"
                                      className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                                      alt="Fidenza978ToyFace One"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded shadow-bs w-[26%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[27px] w-[90%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                      <Text
                        className="!font-medium text-bluegray_900"
                        size="xl"
                      >
                        Calendar
                      </Text>
                      <Img
                        src="images/img_morehorizontal.svg"
                        className="h-8 w-8"
                        alt="morehorizontal Two"
                      />
                    </div>
                    <div className="flex flex-col font-inter gap-[23px] items-center justify-start mt-[15px] w-full">
                      <div className="flex flex-row gap-[29px] items-start justify-between w-[99%] md:w-full">
                        <Button className="bg-gray_51 flex h-10 items-center justify-center p-[13px] rounded-[50%] w-10">
                          <Img
                            src="images/img_buttonprimary_40X40.svg"
                            className="h-3.5"
                            alt="ButtonPrimary Five"
                          />
                        </Button>
                        <Text
                          className="!font-semibold mt-3.5 text-bluegray_800"
                          size="md"
                        >
                          <span className="text-bluegray_800 font-inter text-left text-sm">
                            Febuary{" "}
                          </span>
                          <span className="text-bluegray_400 font-inter text-left text-sm">
                            2022
                          </span>
                        </Text>
                        <Button className="bg-gray_51 flex h-10 items-center justify-center p-[13px] rounded-[50%] w-10">
                          <Img
                            src="images/img_buttonprimary_4.svg"
                            alt="ButtonPrimary Six"
                          />
                        </Button>
                      </div>
                      <div className="w-full"></div>
                    </div>
                    <div className="flex flex-row font-poppins items-center justify-between mt-[53px] w-[99%] md:w-full">
                      <Text
                        className="!font-medium text-bluegray_900"
                        size="xl"
                      >
                        Recent activities
                      </Text>
                      <Img
                        src="images/img_morehorizontal.svg"
                        className="h-8 w-8"
                        alt="morehorizontal Three"
                      />
                    </div>
                    <List
                      className="flex-col font-inter gap-[18.54px] grid items-center mt-[37px] w-[99%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <Text className="text-bluegray_400" size="md">
                          Feb 24, 2022
                        </Text>
                        <List
                          className="flex-col grid items-center pr-0.5 w-full"
                          orientation="vertical"
                        >
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[76%] md:w-full">
                            <Text
                              className="!font-medium text-bluegray_400"
                              size="s"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Line className="bg-red_600 h-[47px] w-1" />
                              <Text
                                className="sm:flex-1 leading-[24.00px] text-bluegray_900 w-[94%] sm:w-full"
                                size="lg"
                              >
                                Changelog Revamp Homescreen{" "}
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo_51 w-full" />
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[76%] md:w-full">
                            <Text
                              className="!font-medium text-bluegray_400"
                              size="s"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Line className="bg-indigo_400 h-[47px] w-1" />
                              <Text
                                className="sm:flex-1 leading-[24.00px] text-bluegray_900 w-[94%] sm:w-full"
                                size="lg"
                              >
                                Create user flow for Data Projects
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo_51 w-full" />
                          <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-full">
                            <Text
                              className="!font-medium text-bluegray_400"
                              size="s"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Line className="bg-green_700 h-[47px] w-1" />
                              <Text
                                className="sm:flex-1 leading-[24.00px] text-bluegray_900 w-[95%] sm:w-full"
                                size="lg"
                              >
                                Gather to discuss about new project deriving
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo_51 w-full" />
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[76%] md:w-full">
                            <Text
                              className="!font-medium text-bluegray_400"
                              size="s"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Line className="bg-indigo_400 h-[47px] w-1" />
                              <Text
                                className="sm:flex-1 leading-[24.00px] text-bluegray_900 w-[94%] sm:w-full"
                                size="lg"
                              >
                                Urgent meeting with CEO
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                      <Line className="self-center h-px bg-indigo_51 w-full" />
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <Text className="text-bluegray_400" size="md">
                          Feb 24, 2022
                        </Text>
                        <List
                          className="flex-col grid items-center md:pr-10 sm:pr-5 pr-[46px] w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-full">
                            <Text
                              className="!font-medium text-bluegray_400"
                              size="s"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Line className="bg-red_600 h-6 w-1" />
                              <Text className="text-bluegray_900" size="lg">
                                Daily meeting with tem
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo_51 w-full" />
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[94%] md:w-full">
                            <Text
                              className="!font-medium text-bluegray_400"
                              size="s"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Line className="bg-indigo_400 h-[47px] w-1" />
                              <Text
                                className="sm:flex-1 leading-[24.00px] text-bluegray_900 w-[94%] sm:w-full"
                                size="lg"
                              >
                                Revision design system
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo_51 w-full" />
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[94%] md:w-full">
                            <Text
                              className="!font-medium text-bluegray_400"
                              size="s"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Line className="bg-green_700 h-[47px] w-1" />
                              <Text
                                className="sm:flex-1 leading-[24.00px] text-bluegray_900 w-[94%] sm:w-full"
                                size="lg"
                              >
                                Changelog authentication
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo_51 w-full" />
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[85%] md:w-full">
                            <Text
                              className="!font-medium text-bluegray_400"
                              size="s"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Line className="bg-indigo_400 h-[22px] w-1" />
                              <Text className="text-bluegray_900" size="lg">
                                Pitching with client
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo_51 w-full" />
                          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[94%] md:w-full">
                            <Text
                              className="!font-medium text-bluegray_400"
                              size="s"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <Line className="bg-red_600 h-[47px] w-1" />
                              <Text
                                className="sm:flex-1 leading-[24.00px] text-bluegray_900 w-[94%] sm:w-full"
                                size="lg"
                              >
                                Year end party and plan for 2022
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </List>
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

export default DashboardTwoPage;
