import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const selectTypeOfCardOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EKYCScanIDCardPage = () => {
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
              <div className="flex flex-col items-start justify-start mb-[422px] w-[87%] md:w-full">
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
                  <Text className="mb-0.5 mt-[7px] text-bluegray_800" size="md">
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </Sidebar>
          <Line className="bg-indigo_51 h-[953px] md:h-px md:w-full w-px" />
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
            <div className="bg-gray_51 flex flex-col items-center justify-end p-[23px] sm:px-5 w-full">
              <div className="flex flex-col gap-[35px] items-center justify-start mt-[15px] w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="font-poppins mb-0.5 text-bluegray_900"
                    size="2xl"
                  >
                    eKYC
                  </Text>
                  <Text
                    className="!font-normal font-inter mt-1 text-bluegray_400"
                    size="lg"
                  >
                    <span className="text-bluegray_400 text-left text-base">
                      Setting/
                    </span>
                    <span className="text-bluegray_800 text-left text-base">
                      {" "}
                      eKYC
                    </span>
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                  <div className="flex flex-col items-center justify-start mb-4 mt-5 w-full">
                    <div className="flex flex-col gap-4 items-center justify-start">
                      <Text className="text-bluegray_900" as="h4" size="3xl">
                        Scan ID Card
                      </Text>
                      <Text
                        className="!font-normal leading-[22.00px] text-bluegray_400 text-center w-full"
                        size="md"
                      >
                        Please ensure that the image that you uploaded is clear
                        and not blurred
                      </Text>
                    </div>
                    <SelectBox
                      className="bg-white_A700 border border-indigo_51 border-solid font-medium mt-6 pb-4 pl-5 pt-[21px] rounded text-base text-bluegray_800 text-left w-[31%] sm:w-full"
                      placeholderClassName="text-bluegray_800"
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-1.5 mr-6 w-[11px]"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group One"
                      options={selectTypeOfCardOptionsList}
                      isSearchable={false}
                      placeholder="Select type of Card"
                    />
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between mt-10 w-full">
                      <div className="h-[359px] relative w-1/2 md:w-full">
                        <Text
                          className="!font-semibold mt-9 mx-auto text-bluegray_800"
                          as="h6"
                          size="lg"
                        >
                          Front
                        </Text>
                        <div className="absolute border-2 border-dashed border-indigo_51 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[108px] md:px-10 sm:px-5 rounded w-full">
                          <div className="flex flex-col gap-6 items-center justify-start mt-[19px] w-[47%] md:w-full">
                            <Button className="bg-red_55 flex h-14 items-center justify-center p-[18px] rounded-[50%] w-14">
                              <Img
                                src="images/img_plus_24X24.svg"
                                className="h-5"
                                alt="ButtonPrimary"
                              />
                            </Button>
                            <Text
                              className="!font-normal leading-[22.00px] text-bluegray_400 text-center w-full"
                              size="md"
                            >
                              Drag or click to upload image
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:h-[358px] h-[359px] justify-end relative w-1/2 md:w-full">
                        <div className="flex flex-col gap-6 h-full items-center justify-start mb-[108px] mt-auto mx-auto w-[28%]">
                          <Button className="bg-red_55 flex h-14 items-center justify-center p-[18px] rounded-[50%] w-14">
                            <Img
                              src="images/img_plus_24X24.svg"
                              className="h-5"
                              alt="ButtonPrimary One"
                            />
                          </Button>
                          <Text
                            className="!font-normal leading-[22.00px] text-bluegray_400 text-center w-full"
                            size="md"
                          >
                            Drag or click to upload image
                          </Text>
                        </div>
                        <div className="absolute border-2 border-dashed border-indigo_51 flex flex-col h-full inset-[0] items-center justify-center m-auto p-9 sm:px-5 rounded w-full">
                          <Text
                            className="!font-semibold mb-[270px] text-bluegray_800"
                            as="h6"
                            size="lg"
                          >
                            Back
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[270px] mt-[58px] py-[15px] rounded-[24px] text-center text-sm text-white_A700">
                      Next Step
                    </Button>
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

export default EKYCScanIDCardPage;
