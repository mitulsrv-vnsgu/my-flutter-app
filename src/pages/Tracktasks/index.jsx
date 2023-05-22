import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TracktasksPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
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
            <div className="bg-gray_51 flex flex-col font-poppins items-center justify-start p-[19px] w-full">
              <div className="flex flex-col gap-8 items-center justify-start mb-[99px] mt-[18px] w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                  <Text className="sm:mt-0 mt-0.5 text-bluegray_900" size="2xl">
                    Product design
                  </Text>
                  <Text
                    className="!font-normal mb-[3px] text-bluegray_400"
                    size="lg"
                  >
                    <span className="text-bluegray_400 font-poppins text-left text-base">
                      File management/
                    </span>
                    <span className="text-bluegray_800 font-poppins text-left text-base">
                      {" "}
                      Product design
                    </span>
                  </Text>
                </div>
                <Accordion
                  preExpanded={[0]}
                  className="flex flex-col font-inter gap-5 w-full"
                >
                  {[...Array(3)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="bg-white_A700 flex flex-col gap-[31px] items-center justify-start py-6 rounded shadow-bs w-full">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {({ expanded }) => (
                                <div className="flex flex-col items-center justify-between w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                    <Img
                                      src="images/img_carretup.svg"
                                      className="h-6 w-6"
                                      alt="carretup"
                                    />
                                    <div className="flex flex-row font-poppins items-center justify-center ml-4 md:ml-[0] w-[14%] md:w-full">
                                      {expanded && (
                                        <Img
                                          src="images/img_line_24X24.svg"
                                          className="h-6 w-6"
                                          alt="Line One"
                                        />
                                      )}
                                      {!expanded && (
                                        <Img
                                          src="images/img_line_24X24.svg"
                                          className="h-6 w-6"
                                          alt="Line Three"
                                        />
                                      )}
                                      <Text
                                        className="!font-normal ml-3 text-bluegray_900"
                                        size="lg"
                                      >
                                        In process (10)
                                      </Text>
                                    </div>
                                    <Button className="bg-gray_51 cursor-pointer font-semibold md:ml-[0] ml-[797px] px-4 py-[9px] rounded-[20px] text-bluegray_800 text-center text-sm w-[98px]">
                                      Edit{" "}
                                    </Button>
                                  </div>
                                  {expanded && (
                                    <Line className="bg-indigo_51 h-px mt-4 w-full" />
                                  )}
                                </div>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="w-full ">
                          <div className="font-poppins gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start mb-2 mx-auto w-[95%] md:w-full">
                            <div className="border-2 border-indigo_51 border-solid flex flex-col items-center justify-center p-[55px] md:px-10 sm:px-5 rounded w-full">
                              <div className="flex flex-col gap-[43px] items-center justify-start my-[17px] w-full">
                                <Button className="bg-red_55 flex h-14 items-center justify-center p-[18px] rounded-[50%] w-14">
                                  <Img
                                    src="images/img_plus_24X24.svg"
                                    className="h-5"
                                    alt="ButtonPrimary"
                                  />
                                </Button>
                                <div className="flex flex-col gap-3 items-center justify-start w-full">
                                  <Text
                                    className="!font-bold text-bluegray_800"
                                    as="h6"
                                    size="lg"
                                  >
                                    Add file
                                  </Text>
                                  <Text
                                    className="!font-normal leading-[22.00px] text-bluegray_800 text-center w-full"
                                    size="md"
                                  >
                                    Add file to manage your vital task
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col items-center justify-end p-[31px] sm:px-5 rounded shadow-bs w-full">
                              <div className="flex flex-col items-start justify-start mt-1.5 w-full">
                                <div className="flex flex-col gap-3 items-center justify-start">
                                  <Text
                                    className="text-bluegray_900"
                                    as="h6"
                                    size="xl"
                                  >
                                    LD presentation file
                                  </Text>
                                  <Text
                                    className="!font-normal leading-[22.00px] text-bluegray_800"
                                    size="md"
                                  >
                                    <>
                                      Introduction about LD
                                      <br />
                                      Project in detail
                                    </>
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-6 items-start justify-start mt-6 w-full">
                                  <Text
                                    className="!font-normal text-bluegray_900"
                                    size="lg"
                                  >
                                    Process (80%)
                                  </Text>
                                  <Img
                                    src="images/img_frame_indigo_51.svg"
                                    className="h-px"
                                    alt="Frame"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between mt-7 w-full">
                                  <div className="flex flex-col gap-[19px] items-start justify-start w-2/5">
                                    <Text
                                      className="!font-normal text-bluegray_900"
                                      size="lg"
                                    >
                                      Members
                                    </Text>
                                    <div className="h-8 relative w-[64%]">
                                      <Img
                                        src="images/img_robototoyfacefinal2.png"
                                        className="absolute h-8 inset-y-[0] left-[0] my-auto rounded-[50%] w-8"
                                        alt="RobotoToyFaceFinalTwo"
                                      />
                                      <Img
                                        src="images/img_fidenza978toyface.png"
                                        className="absolute h-8 inset-y-[0] my-auto right-[0] rounded-[50%] w-8"
                                        alt="Fidenza978ToyFace"
                                      />
                                    </div>
                                  </div>
                                  <div className="bg-gray_51 h-8 md:h-[55px] mt-[35px] p-1.5 relative rounded-[50%] w-8">
                                    <Img
                                      src="images/img_buttonprimary_7.svg"
                                      className="absolute h-5 inset-[0] justify-center m-auto w-5"
                                      alt="morevertical"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col items-center justify-end p-[31px] sm:px-5 rounded shadow-bs w-full">
                              <div className="flex flex-col items-start justify-start mt-[7px] w-full">
                                <div className="flex flex-col gap-3 items-start justify-start">
                                  <Text
                                    className="text-bluegray_900"
                                    as="h6"
                                    size="xl"
                                  >
                                    Urgent Tasks
                                  </Text>
                                  <Text
                                    className="!font-normal leading-[22.00px] text-bluegray_800"
                                    size="md"
                                  >
                                    <>
                                      Introduction about LD
                                      <br />
                                      Project in detail
                                    </>
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-6 items-start justify-start mt-6 w-full">
                                  <Text
                                    className="!font-normal text-bluegray_900"
                                    size="lg"
                                  >
                                    Process (10%)
                                  </Text>
                                  <Img
                                    src="images/img_frame_indigo_51_1X194.svg"
                                    className="h-px"
                                    alt="Frame One"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between mt-7 w-full">
                                  <div className="flex flex-col gap-[19px] items-start justify-start w-2/5">
                                    <Text
                                      className="!font-normal text-bluegray_900"
                                      size="lg"
                                    >
                                      Members
                                    </Text>
                                    <div className="h-8 relative w-[64%]">
                                      <Img
                                        src="images/img_robototoyfacefinal2.png"
                                        className="absolute h-8 inset-y-[0] left-[0] my-auto rounded-[50%] w-8"
                                        alt="RobotoToyFaceFinalTwo One"
                                      />
                                      <Img
                                        src="images/img_fidenza978toyface.png"
                                        className="absolute h-8 inset-y-[0] my-auto right-[0] rounded-[50%] w-8"
                                        alt="Fidenza978ToyFace One"
                                      />
                                    </div>
                                  </div>
                                  <div className="bg-gray_51 h-8 md:h-[55px] mt-[35px] p-1.5 relative rounded-[50%] w-8">
                                    <Img
                                      src="images/img_buttonprimary_7.svg"
                                      className="absolute h-5 inset-[0] justify-center m-auto w-5"
                                      alt="morevertical One"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col items-center justify-start p-[31px] sm:px-5 rounded shadow-bs w-full">
                              <div className="flex flex-col items-start justify-start mt-[5px] w-full">
                                <div className="flex flex-col gap-[17px] items-start justify-start">
                                  <Text
                                    className="text-bluegray_900"
                                    as="h6"
                                    size="xl"
                                  >
                                    Plan for 2022
                                  </Text>
                                  <Text
                                    className="!font-normal leading-[22.00px] text-bluegray_800"
                                    size="md"
                                  >
                                    <>
                                      Introduction about LD
                                      <br />
                                      Project in detail
                                    </>
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-6 items-start justify-start mt-6 w-full">
                                  <Text
                                    className="!font-normal text-bluegray_900"
                                    size="lg"
                                  >
                                    Process (0%)
                                  </Text>
                                  <Img
                                    src="images/img_frame_1X194.svg"
                                    className="h-px"
                                    alt="Frame Two"
                                  />
                                </div>
                                <div className="flex flex-row items-end justify-between mt-7 w-full">
                                  <div className="flex flex-col gap-[19px] items-start justify-start w-2/5">
                                    <Text
                                      className="!font-normal text-bluegray_900"
                                      size="lg"
                                    >
                                      Members
                                    </Text>
                                    <Img
                                      src="images/img_tintin22.png"
                                      className="h-8 md:h-auto rounded-[50%] w-8"
                                      alt="TinTinTwentyTwo"
                                    />
                                  </div>
                                  <div className="bg-gray_51 h-8 md:h-[55px] mt-[35px] p-1.5 relative rounded-[50%] w-8">
                                    <Img
                                      src="images/img_buttonprimary_7.svg"
                                      className="absolute h-5 inset-[0] justify-center m-auto w-5"
                                      alt="morevertical Two"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionItemPanel>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TracktasksPage;
