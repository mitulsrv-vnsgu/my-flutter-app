import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardOnePage = () => {
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
              <div className="flex flex-col items-start justify-start mb-[644px] w-[87%] md:w-full">
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
          <Line className="bg-indigo_51 h-[1175px] md:h-px md:w-full w-px" />
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
            <div className="bg-gray_51 flex flex-col font-poppins items-center justify-start p-[23px] sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                  <Text className="text-bluegray_900" size="2xl">
                    Overview
                  </Text>
                  <div className="flex flex-row font-inter gap-3 items-center justify-between w-[17%]">
                    <Button className="bg-white_A700 flex items-center justify-center p-[13px] rounded">
                      <Img
                        src="images/img_buttonprimary.svg"
                        className="h-5"
                        alt="ButtonPrimary"
                      />
                    </Button>
                    <SelectBox
                      className="bg-white_A700 font-medium pl-4 py-4 rounded text-bluegray_800 text-left text-sm w-[70%] sm:w-full"
                      placeholderClassName="text-bluegray_800"
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-5 mr-4 w-5"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="dropdown"
                      options={dropdownOptionsList}
                      isSearchable={false}
                      placeholder="Last week"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-inter gap-5 items-center justify-between mt-6 w-full">
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded shadow-bs w-[33%] md:w-full">
                    <div className="flex flex-row items-center justify-between mb-1 w-[87%] md:w-full">
                      <Img
                        src="images/img_group_26X70.svg"
                        className="h-[26px]"
                        alt="Group One"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex relative w-full">
                            <Text
                              className="my-auto text-bluegray_800"
                              as="h3"
                              size="4xl"
                            >
                              $10.000
                            </Text>
                            <div className="bg-green_700_63 flex flex-row items-start justify-center ml-[-1px] mt-[7px] pr-[3px] rounded w-[32%] z-[1]">
                              <Img
                                src="images/img_line.svg"
                                className="h-4 mt-[3px] w-4"
                                alt="line One"
                              />
                              <Text
                                className="!font-semibold text-green_700"
                                size="md"
                              >
                                0.2%
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-1.5 items-center justify-start mt-[3px] w-[59%] md:w-full">
                            <div className="bg-indigo_401 h-1.5 my-[3px] rounded-[50%] w-1.5"></div>
                            <Text
                              className="!font-normal text-bluegray_400"
                              size="md"
                            >
                              Total income
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-row items-center justify-between w-[87%] md:w-full">
                        <Img
                          src="images/img_group_1.svg"
                          className="h-[26px]"
                          alt="Group Two"
                        />
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-col items-center justify-start w-[70%]">
                            <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                              <Text
                                className="text-bluegray_800"
                                as="h3"
                                size="4xl"
                              >
                                $10.000
                              </Text>
                              <div className="flex flex-row items-start justify-evenly w-[96%] md:w-full">
                                <div className="bg-indigo_401 h-1.5 mb-2 mt-0.5 rounded-[50%] w-1.5"></div>
                                <Text
                                  className="!font-normal text-bluegray_400"
                                  size="md"
                                >
                                  Total Expenses
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-red_600_63 flex flex-row items-start justify-center mb-[34px] mt-[7px] pr-[3px] rounded w-[32%]">
                            <Img
                              src="images/img_line_16X16.svg"
                              className="h-4 mt-[3px] w-4"
                              alt="line Two"
                            />
                            <Text
                              className="!font-semibold text-red_600"
                              size="md"
                            >
                              0.2%
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-row items-center justify-between mb-1 w-[87%] md:w-full">
                        <Img
                          src="images/img_group_26X70.svg"
                          className="h-[26px]"
                          alt="Group Three"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex relative w-full">
                              <Text
                                className="my-auto text-bluegray_800"
                                as="h3"
                                size="4xl"
                              >
                                $10.000
                              </Text>
                              <div className="bg-green_700_63 flex flex-row items-start justify-center ml-[-1px] mt-[7px] pr-[3px] rounded w-[32%] z-[1]">
                                <Img
                                  src="images/img_line.svg"
                                  className="h-4 mt-[3px] w-4"
                                  alt="line Three"
                                />
                                <Text
                                  className="!font-semibold text-green_700"
                                  size="md"
                                >
                                  0.2%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-1.5 items-center justify-start mt-1 w-[64%] md:w-full">
                              <div className="bg-indigo_401 h-1.5 my-1 rounded-[50%] w-1.5"></div>
                              <Text
                                className="!font-normal text-bluegray_400"
                                size="md"
                              >
                                Total Revenue
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex md:flex-col flex-row font-inter gap-[19px] items-center justify-between mt-5 w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[67%] md:w-full">
                    <div className="bg-white_A700 flex flex-col gap-[31px] items-center justify-start p-[26px] sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                        <Text className="text-bluegray_900" as="h6" size="xl">
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
                      <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between mb-3.5 w-[99%] md:w-full">
                        <div className="flex flex-col gap-[19px] items-start justify-start w-[11%] md:w-full">
                          <div className="flex flex-row gap-2 items-start justify-start w-[82%] md:w-full">
                            <div className="bg-indigo_400 h-1.5 mb-0.5 mt-[5px] rounded-[50%] w-1.5"></div>
                            <Text
                              className="!font-medium text-bluegray_400"
                              size="s"
                            >
                              Income
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-amber_300 h-1.5 my-[5px] rounded-[50%] w-1.5"></div>
                            <Text
                              className="!font-medium text-bluegray_400"
                              size="s"
                            >
                              Expenses
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
                          <div className="flex flex-col gap-[15px] items-end justify-start w-full">
                            <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between w-full">
                              <div className="flex flex-col items-end justify-start">
                                <Text className="text-bluegray_400" size="s">
                                  1,400
                                </Text>
                                <Text
                                  className="mt-4 text-bluegray_400"
                                  size="s"
                                >
                                  1,200
                                </Text>
                                <Text
                                  className="mt-4 text-bluegray_400"
                                  size="s"
                                >
                                  1,000
                                </Text>
                                <Text
                                  className="mt-4 text-bluegray_400"
                                  size="s"
                                >
                                  800
                                </Text>
                                <Text
                                  className="mt-[18px] text-bluegray_400"
                                  size="s"
                                >
                                  600
                                </Text>
                                <Text
                                  className="mt-[18px] text-bluegray_400"
                                  size="s"
                                >
                                  400
                                </Text>
                                <Text
                                  className="mt-[18px] text-bluegray_400"
                                  size="s"
                                >
                                  200
                                </Text>
                                <Text
                                  className="mt-[18px] text-bluegray_400"
                                  size="s"
                                >
                                  0
                                </Text>
                              </div>
                              <div
                                className="bg-cover bg-no-repeat font-poppins md:h-[206px] h-[227px] pt-[17px] px-[17px] relative w-[91%] sm:w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group2426.svg')",
                                }}
                              >
                                <Img
                                  src="images/img_frame_206X450.svg"
                                  className="absolute bottom-[0] h-[206px] inset-x-[0] mx-auto"
                                  alt="Frame"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat md:h-[41px] h-[84px] left-[7%] p-[13px] shadow-bs2 top-[19%] w-[30%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group_white_A700.svg')",
                                  }}
                                >
                                  <div className="absolute flex flex-row gap-2 items-start justify-center left-[15%] top-[21%] w-[32%]">
                                    <div className="bg-indigo_400 h-1.5 mb-[5px] mt-0.5 rounded-[50%] w-1.5"></div>
                                    <Text
                                      className="!font-semibold text-bluegray_900"
                                      size="s"
                                    >
                                      200.0
                                    </Text>
                                  </div>
                                  <div className="absolute flex flex-col items-center justify-start left-[15%] top-[23%] w-3/4">
                                    <div className="flex flex-col gap-[17px] justify-start w-full">
                                      <div className="flex flex-row gap-2 items-start justify-end md:ml-[0] ml-[66px] w-[43%] md:w-full">
                                        <div className="bg-amber_300 h-1.5 mb-1 rounded-[50%] w-1.5"></div>
                                        <Text
                                          className="!font-semibold text-bluegray_900"
                                          size="s"
                                        >
                                          2,000
                                        </Text>
                                      </div>
                                      <Text
                                        className="mr-[19px] text-bluegray_400"
                                        size="xs"
                                      >
                                        21 September, 2021
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end pb-0.5 px-0.5 w-[91%] md:w-full">
                              <Text className="text-bluegray_400" size="s">
                                Mon
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[46px] text-bluegray_400"
                                size="s"
                              >
                                Tue
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[52px] text-bluegray_400"
                                size="s"
                              >
                                Wed
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[46px] text-bluegray_400"
                                size="s"
                              >
                                Thu
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[55px] text-bluegray_400"
                                size="s"
                              >
                                Fri
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[55px] text-bluegray_400"
                                size="s"
                              >
                                Sat
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[51px] mr-[33px] text-bluegray_400"
                                size="s"
                              >
                                Sun
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[197px] h-[410px] relative w-[33%] md:w-full">
                    <div className="absolute md:h-[100px] h-[116px] inset-x-[0] mx-auto top-[23%] w-full">
                      <Img
                        src="images/img_ellipse.svg"
                        className="absolute h-[46px] right-[0] top-[0]"
                        alt="Ellipse One"
                      />
                      <Img
                        src="images/img_vector_white_A700.svg"
                        className="absolute bottom-[0] h-[100px] inset-x-[0] mx-auto"
                        alt="Vector One"
                      />
                    </div>
                    <div className="absolute bg-deep_orange_300 flex flex-col inset-x-[0] items-center justify-end mx-auto p-[11px] rounded-tl rounded-tr shadow-bs top-[0] w-full">
                      <div className="md:h-[115px] h-[188px] relative w-3/4">
                        <div className="md:h-[115px] h-[188px] m-auto w-full">
                          <div className="md:h-[115px] h-[188px] m-auto w-full">
                            <div className="absolute bottom-[0] md:h-[115px] h-[163px] inset-x-[0] mx-auto w-full">
                              <div className="absolute h-[61px] left-[0] top-[17%] w-[61px]">
                                <Img
                                  src="images/img_sphere.png"
                                  className="h-[61px] m-auto object-cover w-[61px]"
                                  alt="sphere"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-[61px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group2344.png')",
                                  }}
                                >
                                  <div className="h-[61px] relative w-[61px]">
                                    <Img
                                      src="images/img_image2.png"
                                      className="h-[61px] m-auto object-cover w-[61px]"
                                      alt="imageTwo"
                                    />
                                    <div className="absolute h-[61px] inset-[0] justify-center m-auto w-[61px]">
                                      <Img
                                        src="images/img_image2.png"
                                        className="h-[61px] m-auto object-cover w-[61px]"
                                        alt="imageThree"
                                      />
                                      <Img
                                        src="images/img_image2.png"
                                        className="absolute h-[61px] inset-[0] justify-center m-auto object-cover w-[61px]"
                                        alt="imageFour"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute md:h-[115px] h-[163px] inset-y-[0] my-auto right-[0] w-[83%]">
                                <div className="md:h-[115px] h-[163px] m-auto w-full">
                                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[97%]">
                                    <div className="h-28 relative w-full">
                                      <Img
                                        src="images/img_2.png"
                                        className="h-28 m-auto object-cover w-full"
                                        alt="Two Three"
                                      />
                                      <div className="absolute h-28 inset-[0] justify-center m-auto w-full">
                                        <div className="h-28 m-auto w-full">
                                          <Img
                                            src="images/img_2.png"
                                            className="h-28 m-auto object-cover w-full"
                                            alt="One"
                                          />
                                          <div className="absolute bottom-[3%] h-6 right-[6%] w-[30%]">
                                            <div className="md:h-2.5 h-[19px] mb-[-9.76px] ml-[11px] mt-auto w-[41%] z-[1]">
                                              <Img
                                                src="images/img_1.png"
                                                className="h-[19px] m-auto object-cover w-full"
                                                alt="One One"
                                              />
                                              <Img
                                                src="images/img_color.png"
                                                className="absolute h-[19px] inset-[0] justify-center m-auto object-cover"
                                                alt="color"
                                              />
                                            </div>
                                            <div className="h-[23px] md:h-[NaNpx] mb-[undefinedpx] ml-auto mr-1 w-[76%] z-[1]">
                                              <Img
                                                src="images/img_2_23X47.png"
                                                className="h-[23px] m-auto object-cover w-full"
                                                alt="Two Four"
                                              />
                                              <div
                                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group2347.png')",
                                                }}
                                              >
                                                <div className="h-[23px] relative w-full">
                                                  <Img
                                                    src="images/img_specular.png"
                                                    className="h-[23px] m-auto object-cover w-full"
                                                    alt="specular"
                                                  />
                                                  <div className="absolute h-[23px] inset-[0] justify-center m-auto w-full">
                                                    <Img
                                                      src="images/img_specular.png"
                                                      className="h-[23px] m-auto object-cover w-full"
                                                      alt="specular One"
                                                    />
                                                    <Img
                                                      src="images/img_specular.png"
                                                      className="absolute h-[23px] inset-[0] justify-center m-auto object-cover w-full"
                                                      alt="specular Two"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <Img
                                              src="images/img_shadow.png"
                                              className="h-[11px] mb-[undefinedpx] mt-auto mx-auto object-cover w-full z-[1]"
                                              alt="shadow"
                                            />
                                          </div>
                                        </div>
                                        <div className="absolute h-[88px] left-[29%] top-[0] w-[18%]">
                                          <Img
                                            src="images/img_stand.png"
                                            className="h-[88px] m-auto object-cover w-full"
                                            alt="stand"
                                          />
                                          <div
                                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group2349.png')",
                                            }}
                                          >
                                            <div className="h-[88px] relative w-full">
                                              <Img
                                                src="images/img_specular_88X36.png"
                                                className="h-[88px] m-auto object-cover w-full"
                                                alt="specular Three"
                                              />
                                              <div className="absolute h-[88px] inset-[0] justify-center m-auto w-full">
                                                <Img
                                                  src="images/img_specular_88X36.png"
                                                  className="h-[88px] m-auto object-cover w-full"
                                                  alt="specular Four"
                                                />
                                                <Img
                                                  src="images/img_specular_88X36.png"
                                                  className="absolute h-[88px] inset-[0] justify-center m-auto object-cover w-full"
                                                  alt="specular Five"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute bottom-[2%] h-[11px] left-[12%] w-[52%]">
                                          <Img
                                            src="images/img_shadow_11X108.png"
                                            className="absolute h-[11px] inset-[0] justify-center m-auto object-cover w-full"
                                            alt="shadow One"
                                          />
                                          <div className="absolute h-2.5 inset-x-[0] mx-auto top-[0] w-[89%]">
                                            <Img
                                              src="images/img_keyboard.png"
                                              className="h-2.5 m-auto object-cover w-full"
                                              alt="Keyboard"
                                            />
                                            <div
                                              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group2353.svg')",
                                              }}
                                            >
                                              <div className="h-2.5 relative w-full">
                                                <Img
                                                  src="images/img_specular_10X96.png"
                                                  className="h-2.5 m-auto object-cover w-full"
                                                  alt="specular Six"
                                                />
                                                <Img
                                                  src="images/img_specular_10X96.png"
                                                  className="absolute h-2.5 inset-[0] justify-center m-auto object-cover w-full"
                                                  alt="specular Seven"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute h-[115px] left-[0] top-[0] w-[81%]">
                                    <Img
                                      src="images/img_screen.png"
                                      className="h-[115px] m-auto object-cover w-full"
                                      alt="Screen"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group2355.png')",
                                      }}
                                    >
                                      <div className="h-[115px] relative w-full">
                                        <Img
                                          src="images/img_specular_115X174.png"
                                          className="h-[115px] m-auto object-cover w-full"
                                          alt="specular Eight"
                                        />
                                        <div className="absolute h-[115px] inset-[0] justify-center m-auto w-full">
                                          <Img
                                            src="images/img_specular_115X174.png"
                                            className="h-[115px] m-auto object-cover w-full"
                                            alt="specular Nine"
                                          />
                                          <Img
                                            src="images/img_specular_115X174.png"
                                            className="absolute h-[115px] inset-[0] justify-center m-auto object-cover w-full"
                                            alt="specular Ten"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_sceneshadow.png"
                                  className="absolute h-[114px] left-[0] object-cover top-[2%] w-[81%]"
                                  alt="SceneShadow"
                                />
                              </div>
                            </div>
                            <div className="absolute flex inset-x-[0] mx-auto sm:pl-5 pl-[29px] pt-[29px] top-[0] w-[87%]">
                              <div className="h-[105px] mt-auto mx-auto w-[74%]">
                                <div className="flex flex-col h-full items-center justify-start m-auto w-[99%]">
                                  <div className="h-[105px] relative w-full">
                                    <Img
                                      src="images/img_base.png"
                                      className="h-[105px] m-auto object-cover w-full"
                                      alt="base"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group2358.png')",
                                      }}
                                    >
                                      <div className="h-[105px] relative w-full">
                                        <div className="h-[105px] m-auto w-full">
                                          <div className="h-[105px] m-auto w-full">
                                            <Img
                                              src="images/img_specular_105X163.png"
                                              className="h-[105px] m-auto object-cover w-full"
                                              alt="specular Eleven"
                                            />
                                            <div className="absolute md:h-4 h-[25px] inset-x-[0] mx-auto top-[0] w-full">
                                              <div className="h-[25px] m-auto w-full">
                                                <div className="h-2.5 md:h-[9px] mb-[-1.26px] mx-auto w-full z-[1]">
                                                  <Img
                                                    src="images/img_statusbar.png"
                                                    className="h-2.5 m-auto object-cover w-full"
                                                    alt="statusbar"
                                                  />
                                                  <div
                                                    className="absolute bg-cover bg-no-repeat h-2.5 inset-[0] justify-center m-auto w-full"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group2361.png')",
                                                    }}
                                                  >
                                                    <Img
                                                      src="images/img_specular_10X163.png"
                                                      className="absolute h-2.5 inset-[0] justify-center m-auto object-cover w-full"
                                                      alt="specular Twelve"
                                                    />
                                                  </div>
                                                </div>
                                                <Img
                                                  src="images/img_shadow_16X163.png"
                                                  className="h-4 mt-auto mx-auto object-cover w-full"
                                                  alt="shadow Two"
                                                />
                                              </div>
                                              <div className="absolute h-[13px] left-[3%] top-[12%] w-[18%]">
                                                <div className="absolute h-[13px] inset-y-[0] left-[0] my-auto w-[83%]">
                                                  <div className="absolute h-[13px] inset-y-[0] left-[0] my-auto w-[74%]">
                                                    <Img
                                                      src="images/img_shadow_13X17.png"
                                                      className="absolute h-[13px] inset-[0] justify-center m-auto object-cover w-full"
                                                      alt="shadow Three"
                                                    />
                                                    <div className="absolute h-1 left-[0] top-[0] w-1">
                                                      <Img
                                                        src="images/img_dot.png"
                                                        className="h-1 m-auto object-cover w-1"
                                                        alt="dot"
                                                      />
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-[3px] items-center justify-start left-[0] top-[0] w-[3px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group2363.png')",
                                                        }}
                                                      >
                                                        <div className="h-[3px] relative w-[3px]">
                                                          <Img
                                                            src="images/img_specular_3X3.png"
                                                            className="h-[3px] m-auto object-cover w-[3px]"
                                                            alt="specular Thirteen"
                                                          />
                                                          <div className="absolute h-[3px] inset-[0] justify-center m-auto w-[3px]">
                                                            <Img
                                                              src="images/img_specular_3X3.png"
                                                              className="h-[3px] m-auto object-cover w-[3px]"
                                                              alt="specular Fourteen"
                                                            />
                                                            <Img
                                                              src="images/img_specular_3X3.png"
                                                              className="absolute h-[3px] inset-[0] justify-center m-auto object-cover w-[3px]"
                                                              alt="specular Fifteen"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="absolute h-[13px] inset-y-[0] my-auto right-[0] w-[74%]">
                                                    <Img
                                                      src="images/img_shadow_13X17.png"
                                                      className="absolute h-[13px] inset-[0] justify-center m-auto object-cover w-full"
                                                      alt="shadow Four"
                                                    />
                                                    <div className="absolute h-1 left-[0] top-[0] w-1">
                                                      <Img
                                                        src="images/img_dot.png"
                                                        className="h-1 m-auto object-cover w-1"
                                                        alt="dot One"
                                                      />
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-[3px] items-center justify-start left-[0] top-[0] w-[3px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group2367.png')",
                                                        }}
                                                      >
                                                        <div className="h-[3px] relative w-[3px]">
                                                          <Img
                                                            src="images/img_specular_3X3.png"
                                                            className="h-[3px] m-auto object-cover w-[3px]"
                                                            alt="specular Sixteen"
                                                          />
                                                          <div className="absolute h-[3px] inset-[0] justify-center m-auto w-[3px]">
                                                            <Img
                                                              src="images/img_specular_3X3.png"
                                                              className="h-[3px] m-auto object-cover w-[3px]"
                                                              alt="specular Seventeen"
                                                            />
                                                            <Img
                                                              src="images/img_specular_3X3.png"
                                                              className="absolute h-[3px] inset-[0] justify-center m-auto object-cover w-[3px]"
                                                              alt="specular Eighteen"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="absolute h-[13px] inset-y-[0] my-auto right-[0] w-[61%]">
                                                  <Img
                                                    src="images/img_shadow_13X17.png"
                                                    className="absolute h-[13px] inset-[0] justify-center m-auto object-cover w-full"
                                                    alt="shadow Five"
                                                  />
                                                  <div className="absolute h-1 left-[0] top-[0] w-1">
                                                    <Img
                                                      src="images/img_dot.png"
                                                      className="h-1 m-auto object-cover w-1"
                                                      alt="dot Two"
                                                    />
                                                    <div
                                                      className="absolute bg-cover bg-no-repeat flex flex-col h-[3px] items-center justify-start left-[0] top-[0] w-[3px]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group2371.png')",
                                                      }}
                                                    >
                                                      <div className="h-[3px] relative w-[3px]">
                                                        <Img
                                                          src="images/img_specular_3X3.png"
                                                          className="h-[3px] m-auto object-cover w-[3px]"
                                                          alt="specular Nineteen"
                                                        />
                                                        <div className="absolute h-[3px] inset-[0] justify-center m-auto w-[3px]">
                                                          <Img
                                                            src="images/img_specular_3X3.png"
                                                            className="h-[3px] m-auto object-cover w-[3px]"
                                                            alt="specular Twenty"
                                                          />
                                                          <Img
                                                            src="images/img_specular_3X3.png"
                                                            className="absolute h-[3px] inset-[0] justify-center m-auto object-cover w-[3px]"
                                                            alt="specular TwentyOne"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[13%] w-[95%]">
                                            <div className="h-[18px] relative w-full">
                                              <div className="h-[18px] m-auto w-full">
                                                <Img
                                                  src="images/img_shadow_18X154.png"
                                                  className="absolute h-[18px] inset-[0] justify-center m-auto object-cover w-full"
                                                  alt="shadow Six"
                                                />
                                                <div className="absolute h-2.5 inset-x-[0] mx-auto top-[0] w-[98%]">
                                                  <Img
                                                    src="images/img_search_10X150.png"
                                                    className="h-2.5 m-auto object-cover w-full"
                                                    alt="search"
                                                  />
                                                  <div
                                                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group2375.png')",
                                                    }}
                                                  >
                                                    <div className="h-2.5 relative w-full">
                                                      <Img
                                                        src="images/img_specular_10X150.png"
                                                        className="h-2.5 m-auto object-cover w-full"
                                                        alt="specular TwentyTwo"
                                                      />
                                                      <div className="absolute h-1.5 inset-y-[0] left-[3%] my-auto w-1.5">
                                                        <Img
                                                          src="images/img_shadow_6X6.png"
                                                          className="h-1.5 m-auto object-cover w-1.5"
                                                          alt="shadow Seven"
                                                        />
                                                        <div className="absolute h-1.5 left-[0] top-[0] w-[5px]">
                                                          <Img
                                                            src="images/img_loupe.png"
                                                            className="h-1.5 m-auto object-cover w-[5px]"
                                                            alt="loupe"
                                                          />
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat h-1.5 inset-[0] justify-center m-auto w-[5px]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group2378.png')",
                                                            }}
                                                          >
                                                            <Img
                                                              src="images/img_specular_6X5.png"
                                                              className="absolute h-1.5 inset-[0] justify-center m-auto object-cover w-[5px]"
                                                              alt="specular TwentyThree"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="absolute bottom-[11%] h-[11px] left-[7%] w-[19%]">
                                                <Img
                                                  src="images/img_shadow_11X29.png"
                                                  className="absolute h-[11px] inset-[0] justify-center m-auto object-cover w-full"
                                                  alt="shadow Eight"
                                                />
                                                <div className="absolute h-0.5 left-[0] top-[0] w-[63%]">
                                                  <Img
                                                    src="images/img_textxs.png"
                                                    className="h-0.5 m-auto object-cover w-full"
                                                    alt="textXS"
                                                  />
                                                  <div
                                                    className="absolute bg-cover bg-no-repeat h-0.5 inset-x-[0] mx-auto top-[0] w-full"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group2380.png')",
                                                    }}
                                                  >
                                                    <Img
                                                      src="images/img_specular_2X17.png"
                                                      className="absolute h-0.5 inset-[0] justify-center m-auto object-cover w-full"
                                                      alt="specular TwentyFour"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute bottom-[0] h-[79px] md:h-[94px] inset-x-[0] mx-auto w-[96%]">
                                          <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[35%]">
                                            <div className="h-[30px] relative w-full">
                                              <Img
                                                src="images/img_shadow_27X49.png"
                                                className="h-[27px] m-auto object-cover w-[91%]"
                                                alt="shadow Nine"
                                              />
                                              <div className="absolute h-[30px] inset-[0] justify-center m-auto w-full">
                                                <Img
                                                  src="images/img_bg.png"
                                                  className="h-[30px] m-auto object-cover w-full"
                                                  alt="bg"
                                                />
                                                <div
                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto w-[88%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group2392.svg')",
                                                  }}
                                                >
                                                  <div className="flex flex-row items-start justify-evenly mt-[5px] w-[88%] md:w-full">
                                                    <div className="h-3.5 relative w-3.5">
                                                      <Img
                                                        src="images/img_shadow_14X14.png"
                                                        className="h-3.5 m-auto object-cover w-3.5"
                                                        alt="shadow Ten"
                                                      />
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start left-[0] top-[0] w-[13px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group2393.svg')",
                                                        }}
                                                      >
                                                        <div className="h-[13px] relative w-[13px]">
                                                          <Img
                                                            src="images/img_specular_13X13.png"
                                                            className="h-[13px] m-auto object-cover w-[13px]"
                                                            alt="specular TwentyFive"
                                                          />
                                                          <Img
                                                            src="images/img_specular_13X13.png"
                                                            className="absolute h-[13px] inset-[0] justify-center m-auto object-cover w-[13px]"
                                                            alt="specular TwentySix"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="h-[15px] mt-[3px] relative w-[64%]">
                                                      <div className="h-2.5 md:h-[5px] mb-[-4.97px] mx-auto w-full z-[1]">
                                                        <Img
                                                          src="images/img_shadow_11X29.png"
                                                          className="absolute h-[9px] inset-[0] justify-center m-auto object-cover w-full"
                                                          alt="shadow Twelve"
                                                        />
                                                        <div className="absolute h-0.5 left-[0] top-[0] w-[62%]">
                                                          <Img
                                                            src="images/img_textxs_2X16.png"
                                                            className="h-0.5 m-auto object-cover w-full"
                                                            alt="textXS Two"
                                                          />
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat flex flex-col h-0.5 inset-x-[0] items-center justify-start mx-auto top-[0] w-full"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group2400.png')",
                                                            }}
                                                          >
                                                            <div className="h-0.5 relative w-full">
                                                              <Img
                                                                src="images/img_specular_2X17.png"
                                                                className="h-0.5 m-auto object-cover w-full"
                                                                alt="specular Thirty"
                                                              />
                                                              <div className="absolute h-0.5 inset-[0] justify-center m-auto w-full">
                                                                <Img
                                                                  src="images/img_specular_2X17.png"
                                                                  className="h-0.5 m-auto object-cover w-full"
                                                                  alt="specular ThirtyOne"
                                                                />
                                                                <Img
                                                                  src="images/img_specular_2X17.png"
                                                                  className="absolute h-0.5 inset-[0] justify-center m-auto object-cover w-full"
                                                                  alt="specular ThirtyTwo"
                                                                />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="h-2.5 md:h-[9px] mt-auto mx-auto w-full">
                                                        <Img
                                                          src="images/img_shadow_11X29.png"
                                                          className="absolute h-[9px] inset-[0] justify-center m-auto object-cover w-full"
                                                          alt="shadow Eleven"
                                                        />
                                                        <div className="absolute h-0.5 left-[0] top-[0] w-[62%]">
                                                          <Img
                                                            src="images/img_textxs_2X16.png"
                                                            className="h-0.5 m-auto object-cover w-full"
                                                            alt="textXS One"
                                                          />
                                                          <div
                                                            className="absolute bg-cover bg-no-repeat flex flex-col h-0.5 inset-x-[0] items-center justify-start mx-auto top-[0] w-full"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group2396.png')",
                                                            }}
                                                          >
                                                            <div className="h-0.5 relative w-full">
                                                              <Img
                                                                src="images/img_specular_2X15.png"
                                                                className="h-0.5 m-auto object-cover w-full"
                                                                alt="specular TwentySeven"
                                                              />
                                                              <div className="absolute h-0.5 inset-[0] justify-center m-auto w-full">
                                                                <Img
                                                                  src="images/img_specular_2X15.png"
                                                                  className="h-0.5 m-auto object-cover w-full"
                                                                  alt="specular TwentyEight"
                                                                />
                                                                <Img
                                                                  src="images/img_specular_2X15.png"
                                                                  className="absolute h-0.5 inset-[0] justify-center m-auto object-cover w-full"
                                                                  alt="specular TwentyNine"
                                                                />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="h-11 relative w-[91%]">
                                              <div className="md:h-[13px] h-[15px] mb-[-0.02px] mx-auto w-full z-[1]">
                                                <div className="absolute h-[13px] inset-x-[0] mx-auto top-[0] w-full">
                                                  <Img
                                                    src="images/img_shadow_1.png"
                                                    className="h-[13px] m-auto object-cover w-full"
                                                    alt="shadow Fifteen"
                                                  />
                                                  <div className="absolute h-[11px] inset-x-[0] mx-auto top-[0] w-[96%]">
                                                    <Img
                                                      src="images/img_bg_1.png"
                                                      className="h-[11px] m-auto object-cover w-full"
                                                      alt="bg Two"
                                                    />
                                                    <Img
                                                      src="images/img_eye_bluegray_900.svg"
                                                      className="absolute h-[3px] inset-y-[0] my-auto right-[9%]"
                                                      alt="Eye One"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="absolute bottom-[0] h-2.5 md:h-[9px] left-[6%] w-[54%]">
                                                  <Img
                                                    src="images/img_shadow_11X29.png"
                                                    className="absolute h-[9px] inset-[0] justify-center m-auto object-cover w-full"
                                                    alt="shadow Sixteen"
                                                  />
                                                  <div className="absolute h-0.5 left-[0] top-[0] w-[62%]">
                                                    <Img
                                                      src="images/img_textxs_1.png"
                                                      className="h-0.5 m-auto object-cover w-full"
                                                      alt="textXS Four"
                                                    />
                                                    <div
                                                      className="absolute bg-cover bg-no-repeat h-0.5 inset-x-[0] mx-auto top-[0] w-full"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group2390.png')",
                                                      }}
                                                    >
                                                      <Img
                                                        src="images/img_specular_2X15.png"
                                                        className="absolute h-0.5 inset-[0] justify-center m-auto object-cover w-full"
                                                        alt="specular ThirtySix"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                                                <div className="flex flex-col items-center justify-start w-full">
                                                  <Img
                                                    src="images/img_3.svg"
                                                    className="h-[11px]"
                                                    alt="Three"
                                                  />
                                                  <div className="h-[15px] mt-0.5 relative w-full">
                                                    <div className="absolute h-[13px] inset-x-[0] mx-auto top-[0] w-full">
                                                      <Img
                                                        src="images/img_shadow_13X49.png"
                                                        className="h-[13px] m-auto object-cover w-full"
                                                        alt="shadow Thirteen"
                                                      />
                                                      <div className="absolute h-[11px] inset-x-[0] mx-auto top-[0] w-[96%]">
                                                        <Img
                                                          src="images/img_bg_11X47.png"
                                                          className="h-[11px] m-auto object-cover w-full"
                                                          alt="bg One"
                                                        />
                                                        <div
                                                          className="absolute bg-cover bg-no-repeat h-[11px] md:h-[3px] inset-[0] justify-center m-auto p-[3px] w-full"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group2382.svg')",
                                                          }}
                                                        >
                                                          <Img
                                                            src="images/img_eye.svg"
                                                            className="absolute bottom-[27%] h-[3px] right-[27%]"
                                                            alt="Eye"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="absolute bottom-[0] h-2.5 md:h-[9px] left-[8%] w-[54%]">
                                                      <Img
                                                        src="images/img_shadow_11X29.png"
                                                        className="absolute h-[9px] inset-[0] justify-center m-auto object-cover w-full"
                                                        alt="shadow Fourteen"
                                                      />
                                                      <div className="absolute h-0.5 left-[0] top-[0] w-[62%]">
                                                        <Img
                                                          src="images/img_textxs_1.png"
                                                          className="h-0.5 m-auto object-cover w-full"
                                                          alt="textXS Three"
                                                        />
                                                        <div
                                                          className="absolute bg-cover bg-no-repeat flex flex-col h-0.5 inset-x-[0] items-center justify-start mx-auto top-[0] w-full"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group2384.png')",
                                                          }}
                                                        >
                                                          <div className="h-0.5 relative w-full">
                                                            <Img
                                                              src="images/img_specular_2X15.png"
                                                              className="h-0.5 m-auto object-cover w-full"
                                                              alt="specular ThirtyThree"
                                                            />
                                                            <div className="absolute h-0.5 inset-[0] justify-center m-auto w-full">
                                                              <Img
                                                                src="images/img_specular_2X15.png"
                                                                className="h-0.5 m-auto object-cover w-full"
                                                                alt="specular ThirtyFour"
                                                              />
                                                              <Img
                                                                src="images/img_specular_2X15.png"
                                                                className="absolute h-0.5 inset-[0] justify-center m-auto object-cover w-full"
                                                                alt="specular ThirtyFive"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute bottom-[0] flex flex-col items-center justify-end left-[0] w-[77%]">
                                            <div className="h-[94px] relative w-full">
                                              <Img
                                                src="images/img_shadow_94X119.png"
                                                className="absolute h-[94px] inset-[0] justify-center m-auto object-cover w-full"
                                                alt="shadow Seventeen"
                                              />
                                              <div className="absolute h-[69px] left-[0] top-[0] w-[83%]">
                                                <Img
                                                  src="images/img_2xblock.png"
                                                  className="h-[69px] m-auto object-cover w-full"
                                                  alt="2xblock"
                                                />
                                                <div
                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group2404.png')",
                                                  }}
                                                >
                                                  <div className="h-[69px] relative w-full">
                                                    <Img
                                                      src="images/img_specular_69X98.png"
                                                      className="absolute h-[69px] inset-[0] justify-center m-auto object-cover w-full"
                                                      alt="specular ThirtySeven"
                                                    />
                                                    <div className="absolute flex inset-[0] justify-center m-auto w-[72%]">
                                                      <div className="flex my-auto w-[86%]">
                                                        <div className="flex my-auto w-[84%]">
                                                          <div className="flex my-auto w-4/5">
                                                            <div className="h-9 my-auto w-[78%]">
                                                              <div className="absolute bottom-[0] h-7 left-[0] w-[68%]">
                                                                <div className="absolute bottom-[0] h-[19px] left-[0] w-[53%]">
                                                                  <Img
                                                                    src="images/img_shadow_19X11.png"
                                                                    className="h-[19px] m-auto object-cover w-full"
                                                                    alt="shadow Eighteen"
                                                                  />
                                                                  <div className="absolute h-[13px] left-[0] top-[0] w-[46%]">
                                                                    <Img
                                                                      src="images/img_1_13X5.png"
                                                                      className="h-[13px] m-auto object-cover w-full"
                                                                      alt="One Two"
                                                                    />
                                                                    <div
                                                                      className="absolute bg-cover bg-no-repeat h-[13px] inset-[0] justify-center m-auto w-full"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_group2407.png')",
                                                                      }}
                                                                    >
                                                                      <Img
                                                                        src="images/img_specular_13X5.png"
                                                                        className="absolute h-[13px] inset-[0] justify-center m-auto object-cover w-full"
                                                                        alt="specular ThirtyEight"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div className="absolute h-7 inset-y-[0] my-auto right-[0] w-[53%]">
                                                                  <Img
                                                                    src="images/img_shadow_28X11.png"
                                                                    className="h-7 m-auto object-cover w-full"
                                                                    alt="shadow Nineteen"
                                                                  />
                                                                  <div className="absolute h-[21px] left-[0] top-[0] w-[46%]">
                                                                    <Img
                                                                      src="images/img_2_21X5.png"
                                                                      className="h-[21px] m-auto object-cover w-full"
                                                                      alt="Two Five"
                                                                    />
                                                                    <div className="absolute h-[21px] inset-[0] justify-center m-auto w-full">
                                                                      <Line className="h-[21px] m-auto w-[5px]" />
                                                                      <Img
                                                                        src="images/img_specular_21X5.png"
                                                                        className="absolute h-[21px] inset-[0] justify-center m-auto object-cover w-full"
                                                                        alt="specular ThirtyNine"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div className="absolute h-9 inset-y-[0] my-auto right-[0] w-[36%]">
                                                                <Img
                                                                  src="images/img_shadow_36X11.png"
                                                                  className="h-9 m-auto object-cover w-full"
                                                                  alt="shadow Twenty"
                                                                />
                                                                <div className="absolute h-[30px] left-[0] top-[0] w-[46%]">
                                                                  <Img
                                                                    src="images/img_3_30X5.png"
                                                                    className="h-[30px] m-auto object-cover w-full"
                                                                    alt="Three One"
                                                                  />
                                                                  <div className="absolute h-[30px] inset-[0] justify-center m-auto w-full">
                                                                    <Line className="h-[30px] m-auto w-[5px]" />
                                                                    <Img
                                                                      src="images/img_specular_30X5.png"
                                                                      className="absolute h-[30px] inset-[0] justify-center m-auto object-cover w-full"
                                                                      alt="specular Forty"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="h-[19px] ml-[-2.21px] mt-auto w-[28%] z-[1]">
                                                              <Img
                                                                src="images/img_shadow_2.png"
                                                                className="h-[19px] m-auto object-cover w-full"
                                                                alt="shadow TwentyOne"
                                                              />
                                                              <div className="absolute h-[13px] left-[0] top-[0] w-[46%]">
                                                                <Img
                                                                  src="images/img_1_13X5.png"
                                                                  className="h-[13px] m-auto object-cover w-full"
                                                                  alt="Four"
                                                                />
                                                                <div
                                                                  className="absolute bg-cover bg-no-repeat h-[13px] inset-[0] justify-center m-auto w-full"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group2413.png')",
                                                                  }}
                                                                >
                                                                  <Img
                                                                    src="images/img_specular_13X5.png"
                                                                    className="absolute h-[13px] inset-[0] justify-center m-auto object-cover w-full"
                                                                    alt="specular FortyOne"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="h-7 ml-[-2.21px] mt-auto w-[22%] z-[1]">
                                                            <Img
                                                              src="images/img_shadow_3.png"
                                                              className="h-7 m-auto object-cover w-full"
                                                              alt="shadow TwentyTwo"
                                                            />
                                                            <div className="absolute h-[21px] left-[0] top-[0] w-[46%]">
                                                              <Img
                                                                src="images/img_2_21X5.png"
                                                                className="h-[21px] m-auto object-cover w-full"
                                                                alt="Five"
                                                              />
                                                              <div className="absolute h-[21px] inset-[0] justify-center m-auto w-full">
                                                                <Line className="h-[21px] m-auto w-[5px]" />
                                                                <Img
                                                                  src="images/img_specular_21X5.png"
                                                                  className="absolute h-[21px] inset-[0] justify-center m-auto object-cover w-full"
                                                                  alt="specular FortyTwo"
                                                                />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="h-7 ml-[-2.2px] mt-auto w-[19%] z-[1]">
                                                          <Img
                                                            src="images/img_shadow_4.png"
                                                            className="h-7 m-auto object-cover w-full"
                                                            alt="shadow TwentyThree"
                                                          />
                                                          <div className="absolute h-[21px] left-[0] top-[0] w-[46%]">
                                                            <Img
                                                              src="images/img_2_21X5.png"
                                                              className="h-[21px] m-auto object-cover w-full"
                                                              alt="Six"
                                                            />
                                                            <div className="absolute h-[21px] inset-[0] justify-center m-auto w-full">
                                                              <Line className="h-[21px] m-auto w-[5px]" />
                                                              <Img
                                                                src="images/img_specular_21X5.png"
                                                                className="absolute h-[21px] inset-[0] justify-center m-auto object-cover w-full"
                                                                alt="specular FortyThree"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="h-9 ml-[-2.12px] my-auto w-[16%] z-[1]">
                                                        <Img
                                                          src="images/img_shadow_5.png"
                                                          className="h-9 m-auto object-cover w-full"
                                                          alt="shadow TwentyFour"
                                                        />
                                                        <div className="absolute h-[30px] left-[0] top-[0] w-[46%]">
                                                          <Img
                                                            src="images/img_3_30X5.png"
                                                            className="h-[30px] m-auto object-cover w-full"
                                                            alt="Seven"
                                                          />
                                                          <div className="absolute h-[30px] inset-[0] justify-center m-auto w-full">
                                                            <Line className="h-[30px] m-auto w-[5px]" />
                                                            <Img
                                                              src="images/img_specular_30X5.png"
                                                              className="absolute h-[30px] inset-[0] justify-center m-auto object-cover w-full"
                                                              alt="specular FortyFour"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <Img
                                                      src="images/img_group2382.svg"
                                                      className="absolute h-[65px] inset-[0] justify-center m-auto"
                                                      alt="fill"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute h-[105px] inset-[0] justify-center m-auto w-full">
                                  <Img
                                    src="images/img_dropshadowshere.png"
                                    className="absolute h-[105px] inset-[0] justify-center m-auto object-cover"
                                    alt="Dropshadowshere"
                                  />
                                  <div className="absolute bottom-[22%] h-3.5 md:h-[11px] right-[0] w-[29%]">
                                    <div className="absolute h-[11px] inset-x-[0] mx-auto top-[0] w-full">
                                      <Img
                                        src="images/img_bg_2.png"
                                        className="h-[11px] m-auto object-cover w-full"
                                        alt="bg Three"
                                      />
                                      <Img
                                        src="images/img_group_gray_101.svg"
                                        className="absolute h-[3px] inset-y-[0] my-auto right-[9%]"
                                        alt="Group Four"
                                      />
                                    </div>
                                    <div className="absolute bottom-[0] h-2.5 md:h-[9px] left-[6%] w-[56%]">
                                      <Img
                                        src="images/img_shadow_11X29.png"
                                        className="absolute h-[9px] inset-[0] justify-center m-auto object-cover w-full"
                                        alt="shadow TwentyFive"
                                      />
                                      <div className="absolute h-0.5 left-[0] top-[0] w-[58%]">
                                        <Img
                                          src="images/img_textxs_2X15.png"
                                          className="h-0.5 m-auto object-cover w-full"
                                          alt="textXS Five"
                                        />
                                        <div
                                          className="absolute bg-cover bg-no-repeat h-0.5 inset-[0] justify-center m-auto w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group2422.png')",
                                          }}
                                        >
                                          <Img
                                            src="images/img_specular_2X15.png"
                                            className="absolute h-0.5 inset-[0] justify-center m-auto object-cover w-full"
                                            alt="specular FortyFive"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="h-[47px] md:h-[63px] mb-4 ml-[-15.43px] mt-auto rotate-[180deg] w-1/5 z-[1]">
                                <Img
                                  src="images/img_cursor.png"
                                  className="h-[47px] m-auto object-cover w-full"
                                  alt="cursor"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat h-[47px] inset-[0] justify-center m-auto w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group2423.png')",
                                  }}
                                >
                                  <Img
                                    src="images/img_specular_47X45.png"
                                    className="absolute h-[47px] inset-[0] justify-center m-auto object-cover w-full"
                                    alt="specular FortySix"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_sphereshadow.png"
                            className="absolute h-[115px] inset-x-[0] mx-auto object-cover top-[13%]"
                            alt="Sphereshadow"
                          />
                        </div>
                        <div className="absolute h-[33px] right-[23%] top-[4%] w-8">
                          <Img
                            src="images/img_sphere.png"
                            className="h-[33px] m-auto object-cover w-8"
                            alt="sphere One"
                          />
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-8"
                            style={{
                              backgroundImage:
                                "url('images/img_group2424.png')",
                            }}
                          >
                            <div className="h-[33px] relative w-8">
                              <Img
                                src="images/img_image2.png"
                                className="h-[33px] m-auto object-cover w-8"
                                alt="imageTwo One"
                              />
                              <div className="absolute h-[33px] inset-[0] justify-center m-auto w-8">
                                <Img
                                  src="images/img_image2.png"
                                  className="h-[33px] m-auto object-cover w-8"
                                  alt="imageThree One"
                                />
                                <Img
                                  src="images/img_image2.png"
                                  className="absolute h-[33px] inset-[0] justify-center m-auto object-cover w-8"
                                  alt="imageFour One"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-6 sm:px-5 rounded-bl rounded-br shadow-bs w-full">
                      <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[7px] mt-[5px] w-[76%] md:w-full">
                        <div className="flex flex-col gap-[11px] items-start justify-start">
                          <Text className="text-bluegray_800" as="h6" size="xl">
                            Subcrible us
                          </Text>
                          <Text
                            className="!font-normal leading-[24.00px] text-bluegray_400 w-full"
                            size="lg"
                          >
                            To make friend with others in our community
                          </Text>
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Button className="bg-deep_orange_300 cursor-pointer font-semibold min-w-[149px] py-[17px] rounded-[24px] text-center text-sm text-white_A700">
                            Subcrible now
                          </Button>
                          <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[78px] py-[15px] rounded-[24px] text-bluegray_800 text-center text-sm">
                            skip
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-inter gap-[19px] items-center justify-between mt-[19px] w-full">
                  <div className="h-[436px] md:h-[708px] relative w-[67%] md:w-full">
                    <div className="flex flex-col gap-[11px] h-full items-start justify-start ml-[54px] my-auto pr-1 pt-1">
                      <Text
                        className="!font-normal md:ml-[0] ml-[3px] text-white_A700"
                        size="md"
                      >
                        Balance
                      </Text>
                      <Text className="text-white_A700" as="h6" size="xl">
                        $0.0
                      </Text>
                    </div>
                    <div className="absolute bg-white_A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-8 sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                          <Text
                            className="mb-1 mt-[7px] text-bluegray_900"
                            as="h6"
                            size="xl"
                          >
                            My card
                          </Text>
                          <Img
                            src="images/img_morehorizontal.svg"
                            className="h-8 w-8"
                            alt="morehorizontal"
                          />
                        </div>
                        <SelectBox
                          className="border border-indigo_51 border-solid font-medium mt-7 py-4 rounded text-bluegray_800 text-left text-sm w-[44%] sm:w-full"
                          placeholderClassName="text-bluegray_800"
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-5 mr-4 w-5"
                              alt="arrow_down"
                            />
                          }
                          isSearchable={false}
                          placeholder="1234 **** 4567 8901 "
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_visa_1.svg"
                                className="h-[30px] mr-[7px] w-[30px]"
                                alt="visa 1"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          name="language"
                          isMulti={false}
                          options={languageOptionsList}
                        />
                        <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between mt-4 w-[99%] md:w-full">
                          <div className="flex flex-col gap-4 items-center justify-start w-[44%] md:w-full">
                            <div className="bg-indigo_400 flex flex-row items-start justify-between pt-1.5 rounded w-full">
                              <div className="md:h-[177px] h-[83px] mt-[94px] relative w-[61%]">
                                <Text
                                  className="absolute bottom-[33%] right-[0] text-white_A700"
                                  size="lg"
                                >
                                  1234 **** 4567 8901{" "}
                                </Text>
                                <Img
                                  src="images/img_group_83X96.png"
                                  className="absolute h-[83px] inset-y-[0] left-[0] my-auto object-cover rounded"
                                  alt="Group Five"
                                />
                              </div>
                              <div className="h-[161px] md:h-[177px] mb-4 relative w-[26%]">
                                <Img
                                  src="images/img_group_12X40.svg"
                                  className="h-3 mt-[13px] mx-auto rounded"
                                  alt="Group Six"
                                />
                                <Img
                                  src="images/img_group_161X77.png"
                                  className="absolute h-[161px] inset-[0] justify-center m-auto object-cover rounded"
                                  alt="Group Seven"
                                />
                              </div>
                            </div>
                            <Button className="bg-white_A700 cursor-pointer font-semibold min-w-[301px] py-[17px] rounded text-center text-deep_orange_300 text-sm">
                              Add new card
                            </Button>
                          </div>
                          <div className="flex flex-col gap-4 items-center justify-start w-1/2 md:w-full">
                            <div className="flex flex-row gap-[91px] items-center justify-start pt-0.5 px-0.5 w-full">
                              <Text
                                className="!font-normal mt-[3px] text-bluegray_400"
                                size="lg"
                              >
                                Card Type
                              </Text>
                              <Text className="text-bluegray_800" size="lg">
                                Visa
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[79px] items-center justify-start p-[3px] w-full">
                              <Text
                                className="!font-normal text-bluegray_400"
                                size="lg"
                              >
                                Card holder
                              </Text>
                              <Text className="text-bluegray_800" size="lg">
                                AvoRi
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between p-0.5 w-full">
                              <Text
                                className="!font-normal ml-0.5 text-bluegray_400"
                                size="lg"
                              >
                                Card number
                              </Text>
                              <Text className="text-bluegray_800" size="lg">
                                1234 **** 4567 8901{" "}
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[114px] items-start justify-start w-full">
                              <Text
                                className="!font-normal mt-1 text-bluegray_400"
                                size="lg"
                              >
                                Expired
                              </Text>
                              <Text
                                className="mt-[3px] text-bluegray_800"
                                size="lg"
                              >
                                21/09
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="!font-normal my-0.5 text-bluegray_400"
                                size="lg"
                              >
                                CVV
                              </Text>
                              <Text
                                className="mb-1 mr-[134px] text-bluegray_800"
                                size="lg"
                              >
                                ***
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[66px] items-center justify-start pt-1 px-1 w-full">
                              <Text
                                className="!font-normal text-bluegray_400"
                                size="lg"
                              >
                                Total balance
                              </Text>
                              <Text className="text-bluegray_800" size="lg">
                                $0.0
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-end justify-end pt-4 px-4 rounded shadow-bs w-[33%] md:w-full">
                    <div className="flex flex-col gap-[37px] items-start justify-start mt-[21px] w-[96%] md:w-full">
                      <Text className="text-bluegray_900" as="h6" size="xl">
                        Transactions
                      </Text>
                      <div className="flex flex-row gap-[31px] items-start justify-between w-full">
                        <List
                          className="flex-col grid w-[90%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-row items-center justify-between my-0 w-full">
                            <div className="flex flex-row gap-4 items-center justify-between pr-0.5 py-0.5 w-[65%]">
                              <Img
                                src="images/img_robototoyfacefinal2.png"
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                alt="RobotoToyFaceFinalTwo"
                              />
                              <div className="flex flex-col gap-3 items-start justify-start mr-1">
                                <Text
                                  className="!font-semibold text-bluegray_800"
                                  as="h6"
                                  size="lg"
                                >
                                  Ackerman
                                </Text>
                                <Text
                                  className="!font-normal text-bluegray_400"
                                  size="md"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text className="text-bluegray_900" size="lg">
                              -$12.0
                            </Text>
                          </div>
                          <Line className="self-center h-px bg-indigo_51 w-full" />
                          <div className="flex flex-row items-center justify-between my-0 w-full">
                            <div className="flex flex-row gap-4 items-center justify-between w-[63%]">
                              <Img
                                src="images/img_punktoyface1.png"
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                alt="PunkToyFaceOne"
                              />
                              <div className="flex flex-col gap-3 items-start justify-start">
                                <Text
                                  className="!font-semibold text-bluegray_800"
                                  as="h6"
                                  size="lg"
                                >
                                  Blanker{" "}
                                </Text>
                                <Text
                                  className="!font-normal text-bluegray_400"
                                  size="md"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text className="text-bluegray_900" size="lg">
                              +$100.0
                            </Text>
                          </div>
                          <Line className="self-center h-px bg-indigo_51 w-full" />
                          <div className="flex flex-row items-center justify-between my-0 w-full">
                            <div className="flex flex-row gap-4 items-center justify-between w-[63%]">
                              <Img
                                src="images/img_vangoghbyamrit1.png"
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                alt="VanGoghByAmritOne"
                              />
                              <div className="flex flex-col gap-3 items-start justify-start">
                                <Text
                                  className="!font-semibold text-bluegray_800"
                                  as="h6"
                                  size="lg"
                                >
                                  Lee Ri
                                </Text>
                                <Text
                                  className="!font-normal text-bluegray_400"
                                  size="md"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text className="text-bluegray_900" size="lg">
                              -$12.0
                            </Text>
                          </div>
                          <Line className="self-center h-px bg-indigo_51 w-full" />
                          <div className="flex flex-row items-center justify-between my-0 w-full">
                            <div className="flex flex-row gap-4 items-center justify-between w-[63%]">
                              <Img
                                src="images/img_rarepepenakamototoyface.png"
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                alt="RarePepeNakamotoToyFace"
                              />
                              <div className="flex flex-col gap-3 items-start justify-start">
                                <Text
                                  className="!font-semibold text-bluegray_800"
                                  as="h6"
                                  size="lg"
                                >
                                  Jackson
                                </Text>
                                <Text
                                  className="!font-normal text-bluegray_400"
                                  size="md"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text className="text-bluegray_900" size="lg">
                              -$10.0
                            </Text>
                          </div>
                          <Line className="self-center h-px bg-indigo_51 w-full" />
                          <div className="flex flex-col items-start justify-start my-0 pr-0.5 pt-0.5 w-full">
                            <div className="flex flex-row gap-4 items-start justify-start w-[64%] md:w-full">
                              <Img
                                src="images/img_tintin22.png"
                                className="h-[13px] md:h-auto object-cover rounded-[23px] w-[26%]"
                                alt="TinTinTwentyTwo"
                              />
                              <div className="flex flex-col gap-[13px] items-start justify-start">
                                <Text
                                  className="!font-semibold text-bluegray_800"
                                  as="h6"
                                  size="lg"
                                >
                                  Yomaha
                                </Text>
                                <Text
                                  className="!font-normal text-bluegray_400"
                                  size="md"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                        <div className="bg-gray_51 flex flex-col items-center justify-start mb-8 pb-[177px] rounded-sm w-[2%]">
                          <Line className="bg-deep_orange_300 h-[134px] w-1" />
                        </div>
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

export default DashboardOnePage;
