import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const FileManagementDefaultPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-white_A700 flex flex-col gap-[37px] items-center justify-start p-[29px] sm:px-5 w-full">
              <Img
                src="images/img_logo.svg"
                className="h-7 mt-[7px]"
                alt="Logo"
              />
              <div className="flex flex-col gap-[34px] items-start justify-start mb-[419px] w-[87%] md:w-full">
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[3px] w-[73%] md:w-full">
                  <Img
                    src="images/img_icon_12.svg"
                    className="h-5 w-5"
                    alt="Icon"
                  />
                  <Text className="!font-normal text-bluegray_400" size="md">
                    Dashboard
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[3px] w-[68%] md:w-full">
                  <Img
                    src="images/img_icon_4.svg"
                    className="h-5 w-5"
                    alt="Icon One"
                  />
                  <Text className="!font-normal text-bluegray_400" size="md">
                    Customer
                  </Text>
                </div>
                <div className="flex flex-row gap-8 items-center justify-between md:ml-[0] ml-[3px] w-[99%] md:w-full">
                  <div className="flex flex-row gap-4 items-end justify-start">
                    <Img
                      src="images/img_icon_5.svg"
                      className="h-5 mb-0.5 w-5"
                      alt="Icon Two"
                    />
                    <Text
                      className="!font-normal mt-1.5 text-bluegray_400"
                      size="md"
                    >
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
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[3px] w-[38%] md:w-full">
                  <Img
                    src="images/img_icon_15.svg"
                    className="h-5 w-5"
                    alt="Icon Three"
                  />
                  <Text className="!font-normal text-bluegray_800" size="md">
                    File
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start md:ml-[0] ml-[3px] w-[64%] md:w-full">
                  <Img
                    src="images/img_icon_7.svg"
                    className="h-5 w-5"
                    alt="Icon Four"
                  />
                  <Text
                    className="!font-normal mt-[3px] text-bluegray_400"
                    size="md"
                  >
                    Calender
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-end justify-start md:ml-[0] ml-[3px] w-[46%] md:w-full">
                  <Img
                    src="images/img_icon_8.svg"
                    className="h-5 mb-0.5 w-5"
                    alt="Icon Five"
                  />
                  <Text
                    className="!font-normal mt-[5px] text-bluegray_400"
                    size="md"
                  >
                    Shop
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[3px] w-[43%] md:w-full">
                  <Img
                    src="images/img_icon_9.svg"
                    className="h-5 w-5"
                    alt="Icon Six"
                  />
                  <Text className="!font-normal text-bluegray_400" size="md">
                    Cart
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-end justify-start w-[61%] md:w-full">
                  <div className="bg-white_A700 flex flex-col h-[26px] items-center justify-start p-[3px] w-[26px]">
                    <div className="bg-bluegray_400 h-5 rounded-[50%] w-5"></div>
                  </div>
                  <Text
                    className="!font-normal mb-0.5 mt-[7px] text-bluegray_400"
                    size="md"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </Sidebar>
          <Line className="bg-indigo_51 h-[950px] md:h-px md:w-full w-px" />
          <div className="flex flex-1 flex-col font-inter items-center justify-start md:px-5 w-full">
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
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-4 w-full">
                <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[24%] md:w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <Text className="text-bluegray_900" size="2xl">
                      File Management
                    </Text>
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-col gap-6 items-center justify-start w-full">
                        <Accordion
                          preExpanded={[0]}
                          className="flex flex-col font-inter gap-6 w-full"
                        >
                          {[...Array(3)].map((item, index) => (
                            <AccordionItem uuid={index} key={Math.random()}>
                              <div className="flex flex-col gap-[21px] justify-start w-full">
                                <AccordionItemHeading className="w-full">
                                  <AccordionItemButton>
                                    <AccordionItemState>
                                      {({ expanded }) => (
                                        <div className="flex flex-row items-center justify-between w-full">
                                          <div className="flex flex-row gap-[13px] items-center justify-start">
                                            <Img
                                              src="images/img_line_24X24.svg"
                                              className="h-6 w-6"
                                              alt="Line One"
                                            />
                                            <Text
                                              className="text-bluegray_900"
                                              size="lg"
                                            >
                                              Main File
                                            </Text>
                                          </div>
                                          {expanded && (
                                            <Img
                                              src="images/img_carretup.svg"
                                              className="h-6 w-6"
                                              alt="carretup"
                                            />
                                          )}
                                          {!expanded && (
                                            <Img
                                              src="images/img_carretup.svg"
                                              className="h-6 w-6"
                                              alt="carretup One"
                                            />
                                          )}
                                        </div>
                                      )}
                                    </AccordionItemState>
                                  </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="w-full ">
                                  <div className="flex flex-col font-poppins items-start justify-start ml-9 md:ml-[0]">
                                    <Text
                                      className="!font-normal text-bluegray_400"
                                      size="lg"
                                    >
                                      Product Design
                                    </Text>
                                    <Text
                                      className="!font-normal mt-5 text-bluegray_400"
                                      size="lg"
                                    >
                                      Outsource
                                    </Text>
                                    <Text
                                      className="!font-normal mt-[25px] text-bluegray_400"
                                      size="lg"
                                    >
                                      Graphics
                                    </Text>
                                    <Text
                                      className="!font-normal mt-[22px] text-bluegray_400"
                                      size="lg"
                                    >
                                      Empty states
                                    </Text>
                                  </div>
                                </AccordionItemPanel>
                              </div>
                            </AccordionItem>
                          ))}
                        </Accordion>
                        <Button
                          className="bg-red_54 cursor-pointer flex h-12 items-center justify-center px-[31px] py-[9px] rounded-[24px] w-[209px]"
                          rightIcon={
                            <Img
                              src="images/img_plus_24X24.svg"
                              className="ml-[13px] mr-[31px] my-3.5"
                              alt="plus"
                            />
                          }
                        >
                          <div className="font-bold font-poppins sm:px-5 text-deep_orange_300 text-left text-sm">
                            Add new folder
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col font-inter justify-start pr-4 py-4 rounded shadow-bs w-full">
                    <Img
                      src="images/img_x.svg"
                      className="h-6 md:ml-[0] ml-[233px] w-6"
                      alt="x"
                    />
                    <div className="h-48 md:h-[70px] mr-[7px] relative w-[98%]">
                      <div className="absolute h-[126px] inset-x-[0] mx-auto top-[0] w-[98%]">
                        <div className="md:h-14 h-[81px] mb-[-25.14px] ml-auto mr-[58px] w-2/5 z-[1]">
                          <Img
                            src="images/img_base_81X97.png"
                            className="h-[81px] m-auto object-cover w-full"
                            alt="base"
                          />
                          <div
                            className="absolute bg-cover bg-no-repeat h-[81px] inset-[0] justify-center m-auto w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group2747.png')",
                            }}
                          >
                            <div className="h-[65px] m-auto w-[90%]">
                              <Img
                                src="images/img_paper.png"
                                className="h-[65px] m-auto object-cover w-full"
                                alt="paper"
                              />
                              <Img
                                src="images/img_color_65X87.png"
                                className="absolute h-[65px] inset-[0] justify-center m-auto object-cover"
                                alt="color"
                              />
                            </div>
                            <div className="absolute h-[81px] inset-[0] justify-center m-auto w-full">
                              <Img
                                src="images/img_specular_81X97.png"
                                className="h-[81px] m-auto object-cover w-full"
                                alt="specular"
                              />
                              <div className="absolute h-[81px] inset-[0] justify-center m-auto w-full">
                                <Img
                                  src="images/img_specular_81X97.png"
                                  className="h-[81px] m-auto object-cover w-full"
                                  alt="specular One"
                                />
                                <Img
                                  src="images/img_specular_81X97.png"
                                  className="absolute h-[81px] inset-[0] justify-center m-auto object-cover w-full"
                                  alt="specular Two"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-auto mx-auto overflow-x-auto w-full">
                          <div className="h-[69px] relative w-full">
                            <Img
                              src="images/img_shadow_69X288.png"
                              className="h-[69px] my-auto object-cover w-full"
                              alt="shadow"
                            />
                            <Img
                              src="images/img_shadow_69X288.png"
                              className="absolute h-[47px] object-cover right-[18%] top-[0] w-[53%]"
                              alt="shadow One"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col gap-2 items-center justify-start right-[0]">
                        <Text
                          className="!font-bold text-bluegray_800"
                          as="h6"
                          size="lg"
                        >
                          Upgrade Features
                        </Text>
                        <Text
                          className="!font-normal leading-[22.00px] text-bluegray_800 text-center w-full"
                          size="md"
                        >
                          Upgrade account to access multiple features
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2.5 items-end justify-center mb-4 md:ml-[0] ml-[75px] mt-11 w-1/2 md:w-full">
                      <Text
                        className="!font-bold mb-0.5 mt-[5px] text-deep_orange_300"
                        size="md"
                      >
                        Upgrade now
                      </Text>
                      <Img
                        src="images/img_chevronsright.svg"
                        className="h-6 w-6"
                        alt="chevronsright"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col font-inter items-center justify-start md:mt-0 mt-14 p-[26px] sm:px-5 rounded shadow-bs w-1/2 md:w-full">
                  <div className="flex flex-col gap-[35px] items-center justify-start mb-4 w-[98%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                          <Text className="text-bluegray_900" as="h6" size="xl">
                            Main File
                          </Text>
                          <Button className="bg-gray_51 flex h-10 items-center justify-center sm:ml-[0] ml-[326px] p-2.5 rounded-[50%] w-10">
                            <Img
                              src="images/img_search_bluegray_900.svg"
                              className="h-5"
                              alt="search"
                            />
                          </Button>
                          <Button className="bg-gray_51 flex h-10 items-center justify-center ml-4 sm:ml-[0] p-2.5 rounded-[50%] w-10">
                            <Img
                              src="images/img_buttonprimary_7.svg"
                              className="h-5"
                              alt="ButtonPrimary"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                            <div className="bg-white_A700 border border-indigo_51 border-solid flex flex-1 flex-col items-center justify-start p-5 rounded w-full">
                              <div className="flex flex-col gap-8 items-center justify-start w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Img
                                    src="images/img_iconfileglyph.svg"
                                    className="h-6 w-6"
                                    alt="IconFileGlyph"
                                  />
                                  <Img
                                    src="images/img_morehorizontal.svg"
                                    className="h-6 w-6"
                                    alt="morehorizontal"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between w-full">
                                  <div className="flex flex-col gap-2 items-start justify-start pr-1 py-1">
                                    <Text
                                      className="!font-bold text-bluegray_800"
                                      as="h6"
                                      size="lg"
                                    >
                                      Product Design
                                    </Text>
                                    <Text
                                      className="!font-normal text-bluegray_400"
                                      size="md"
                                    >
                                      12 Files
                                    </Text>
                                  </div>
                                  <Text
                                    className="mb-1 mt-[31px] text-bluegray_400"
                                    size="md"
                                  >
                                    3GB
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 border border-indigo_51 border-solid flex flex-1 flex-col items-center justify-start p-5 rounded w-full">
                              <div className="flex flex-col gap-8 items-center justify-start w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Img
                                    src="images/img_iconfileglyph.svg"
                                    className="h-6 w-6"
                                    alt="IconFileGlyph One"
                                  />
                                  <Img
                                    src="images/img_morehorizontal.svg"
                                    className="h-6 w-6"
                                    alt="morehorizontal One"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between w-full">
                                  <div className="flex flex-col gap-3 items-start justify-end pr-1 py-1">
                                    <Text
                                      className="!font-bold text-bluegray_800"
                                      as="h6"
                                      size="lg"
                                    >
                                      Outsource
                                    </Text>
                                    <Text
                                      className="!font-normal text-bluegray_400"
                                      size="md"
                                    >
                                      12 Files
                                    </Text>
                                  </div>
                                  <Text
                                    className="mb-1 mt-[31px] text-bluegray_400"
                                    size="md"
                                  >
                                    3GB
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 border border-indigo_51 border-solid flex flex-1 flex-col items-center justify-start p-5 rounded w-full">
                              <div className="flex flex-col gap-8 items-center justify-start w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Img
                                    src="images/img_iconfileglyph.svg"
                                    className="h-6 w-6"
                                    alt="IconFileGlyph Two"
                                  />
                                  <Img
                                    src="images/img_morehorizontal.svg"
                                    className="h-6 w-6"
                                    alt="morehorizontal Two"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between w-full">
                                  <div className="flex flex-col gap-2 items-start justify-end pr-1 py-1">
                                    <Text
                                      className="!font-bold text-bluegray_800"
                                      as="h6"
                                      size="lg"
                                    >
                                      Graphics
                                    </Text>
                                    <Text
                                      className="!font-normal text-bluegray_400"
                                      size="md"
                                    >
                                      12 Files
                                    </Text>
                                  </div>
                                  <Text
                                    className="mb-1 mt-[31px] text-bluegray_400"
                                    size="md"
                                  >
                                    3GB
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 border border-indigo_51 border-solid flex flex-1 flex-col items-center justify-start p-5 rounded w-full">
                              <div className="flex flex-col gap-8 items-center justify-start w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <Img
                                    src="images/img_iconfileglyph.svg"
                                    className="h-6 w-6"
                                    alt="IconFileGlyph Three"
                                  />
                                  <Img
                                    src="images/img_morehorizontal.svg"
                                    className="h-6 w-6"
                                    alt="morehorizontal Three"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between w-full">
                                  <div className="flex flex-col gap-2 items-start justify-end pr-1 py-1">
                                    <Text
                                      className="!font-bold text-bluegray_800"
                                      as="h6"
                                      size="lg"
                                    >
                                      Empty States
                                    </Text>
                                    <Text
                                      className="!font-normal text-bluegray_400"
                                      size="md"
                                    >
                                      12 Files
                                    </Text>
                                  </div>
                                  <Text
                                    className="mb-1 mt-[31px] text-bluegray_400"
                                    size="md"
                                  >
                                    3GB
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-bluegray_900"
                              as="h6"
                              size="xl"
                            >
                              Recent files
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-evenly">
                              <Text className="text-bluegray_800" size="md">
                                View all
                              </Text>
                              <Img
                                src="images/img_arrowright_bluegray_800.svg"
                                className="h-5 w-5"
                                alt="arrowright"
                              />
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[35px] pr-[3px] py-[3px] w-[93%] md:w-full">
                            <Text
                              className="!font-normal text-bluegray_400"
                              size="lg"
                            >
                              Name
                            </Text>
                            <Text
                              className="!font-normal sm:ml-[0] ml-[146px] text-bluegray_400"
                              size="lg"
                            >
                              Date motified
                            </Text>
                            <Text
                              className="!font-normal sm:ml-[0] ml-[83px] text-bluegray_400"
                              size="lg"
                            >
                              Size
                            </Text>
                          </div>
                          <div className="bg-gray_51 flex flex-col items-start justify-start mt-4 p-5 w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-[92%] md:w-full">
                              <div className="flex flex-row gap-3.5 items-center justify-start w-[28%] sm:w-full">
                                <Img
                                  src="images/img_file.svg"
                                  className="h-6 w-6"
                                  alt="file One"
                                />
                                <Text
                                  className="!font-normal text-bluegray_900"
                                  size="lg"
                                >
                                  index.html
                                </Text>
                              </div>
                              <Text
                                className="!font-normal sm:ml-[0] ml-[74px] sm:mt-0 mt-[5px] text-bluegray_800"
                                size="lg"
                              >
                                10.10.2021, 09:45
                              </Text>
                              <Text
                                className="!font-normal sm:ml-[0] ml-[54px] sm:mt-0 my-[3px] text-bluegray_800"
                                size="lg"
                              >
                                09 KB
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-col items-start justify-start p-5 w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-[93%] md:w-full">
                              <Radio
                                value="imagepng"
                                className="text-base text-bluegray_900 text-left"
                                inputClassName="mr-[5px]"
                                checked={false}
                                name="imagepng"
                                label="imagepng"
                                id="imagepng"
                              ></Radio>
                              <Text
                                className="!font-normal sm:ml-[0] ml-[71px] sm:mt-0 mt-[5px] text-bluegray_800"
                                size="lg"
                              >
                                10.10.2021, 09:45
                              </Text>
                              <Text
                                className="!font-normal sm:ml-[0] ml-[54px] sm:mt-0 my-[3px] text-bluegray_800"
                                size="lg"
                              >
                                110 KB
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray_51 flex flex-col items-start justify-start p-5 w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-[91%] md:w-full">
                            <div className="flex flex-row gap-3.5 items-center justify-start w-[34%] sm:w-full">
                              <Img
                                src="images/img_filetext.svg"
                                className="h-6 w-6"
                                alt="filetext"
                              />
                              <Text
                                className="!font-normal text-bluegray_900"
                                size="lg"
                              >
                                Document.txt
                              </Text>
                            </div>
                            <Text
                              className="!font-normal sm:ml-[0] ml-[50px] sm:mt-0 mt-[5px] text-bluegray_800"
                              size="lg"
                            >
                              10.10.2021, 09:45
                            </Text>
                            <Text
                              className="!font-normal sm:ml-[0] ml-[54px] sm:mt-0 my-[3px] text-bluegray_800"
                              size="lg"
                            >
                              10 KB
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col font-inter gap-8 items-start justify-end md:mt-0 mt-14 p-[31px] sm:px-5 rounded shadow-bs w-[24%] md:w-full">
                  <Text className="mt-2 text-bluegray_900" as="h6" size="xl">
                    Storage
                  </Text>
                  <div className="md:h-[190px] h-[485px] relative w-full">
                    <div className="absolute h-[190px] inset-x-[0] mx-auto top-[0] w-[190px]">
                      <div className="!w-[190px] border-solid h-[190px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[190px] border-solid h-[190px] m-auto overflow-visible"
                          value={16}
                          strokeWidth={1}
                          styles={{
                            trail: { strokeWidth: 1, stroke: "" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(-90deg)",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <div className="absolute flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto top-[34%]">
                        <Text className="text-bluegray_800" as="h4" size="3xl">
                          25Gb
                        </Text>
                        <Text
                          className="!font-normal text-bluegray_400"
                          size="md"
                        >
                          Used of 50GB
                        </Text>
                      </div>
                    </div>
                    <List
                      className="absolute bottom-[0] flex-col grid inset-x-[0] items-center mx-auto w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-4 items-center justify-between my-0 w-full">
                        <Img
                          src="images/img_image.svg"
                          className="h-6 w-6"
                          alt="image One"
                        />
                        <div className="flex flex-row items-start justify-between w-[81%]">
                          <div className="flex flex-col gap-[7px] items-start justify-end pr-1 py-1">
                            <Text
                              className="!font-bold text-bluegray_800"
                              as="h6"
                              size="lg"
                            >
                              Image
                            </Text>
                            <Text
                              className="!font-normal text-bluegray_400"
                              size="md"
                            >
                              23 files
                            </Text>
                          </div>
                          <Text
                            className="mt-[3px] text-bluegray_400"
                            size="md"
                          >
                            3GB
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-indigo_51 w-full" />
                      <div className="flex flex-1 flex-row gap-4 items-center justify-between my-0 w-full">
                        <Img
                          src="images/img_playcircle.svg"
                          className="h-6 w-6"
                          alt="playcircle"
                        />
                        <div className="flex flex-row items-start justify-between w-[81%]">
                          <div className="flex flex-col gap-3 items-start justify-start pr-0.5 py-0.5">
                            <Text
                              className="!font-bold text-bluegray_800"
                              as="h6"
                              size="lg"
                            >
                              Videos
                            </Text>
                            <Text
                              className="!font-normal mb-0.5 text-bluegray_400"
                              size="md"
                            >
                              23 files
                            </Text>
                          </div>
                          <Text
                            className="mt-[3px] text-bluegray_400"
                            size="md"
                          >
                            3GB
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-indigo_51 w-full" />
                      <div className="flex flex-1 flex-row gap-4 items-center justify-between my-0 w-full">
                        <Img
                          src="images/img_music.svg"
                          className="h-6 w-6"
                          alt="music"
                        />
                        <div className="flex flex-row items-start justify-between w-[81%]">
                          <div className="flex flex-col gap-3 items-start justify-start pr-0.5 py-0.5">
                            <Text
                              className="!font-bold text-bluegray_800"
                              as="h6"
                              size="lg"
                            >
                              Muscics
                            </Text>
                            <Text
                              className="!font-normal mb-0.5 text-bluegray_400"
                              size="md"
                            >
                              23 files
                            </Text>
                          </div>
                          <Text
                            className="mt-[3px] text-bluegray_400"
                            size="md"
                          >
                            3GB
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-indigo_51 w-full" />
                      <div className="flex flex-1 flex-row gap-4 items-center justify-between my-0 w-full">
                        <Img
                          src="images/img_archive.svg"
                          className="h-6 w-6"
                          alt="archive"
                        />
                        <div className="flex flex-row items-start justify-between w-[81%]">
                          <div className="flex flex-col gap-3 items-start justify-start pr-0.5 py-0.5">
                            <Text
                              className="!font-bold mt-0.5 text-bluegray_800"
                              as="h6"
                              size="lg"
                            >
                              Others
                            </Text>
                            <Text
                              className="!font-normal mb-0.5 text-bluegray_400"
                              size="md"
                            >
                              23 files
                            </Text>
                          </div>
                          <Text
                            className="mt-[3px] text-bluegray_400"
                            size="md"
                          >
                            3GB
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="border-2 border-indigo_51 border-solid flex flex-col items-center justify-start p-[35px] sm:px-5 rounded w-full">
                    <div className="flex flex-col gap-[17px] items-center justify-start w-[49%] md:w-full">
                      <Img
                        src="images/img_downloadcloud.svg"
                        className="h-6 w-6"
                        alt="downloadcloud"
                      />
                      <Text
                        className="!font-normal text-bluegray_400"
                        size="md"
                      >
                        Import file
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

export default FileManagementDefaultPage;
