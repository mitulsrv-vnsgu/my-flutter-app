import React from "react";

import { Sidebar } from "react-pro-sidebar";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  SeekBar,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const frameOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const frameTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const frameThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopSearchPage = () => {
  const [framevalue, setFramevalue] = React.useState("");
  const [frameeightvalue, setFrameeightvalue] = React.useState("");

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
              <div className="flex flex-col items-start justify-start mb-[1007px] w-[87%] md:w-full">
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
                    src="images/img_icon_17.svg"
                    className="h-5 mb-0.5 w-5"
                    alt="Icon Five"
                  />
                  <Text className="mt-[5px] text-bluegray_800" size="md">
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
          <Line className="bg-indigo_51 h-[1538px] md:h-px md:w-full w-px" />
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
                  value={framevalue}
                  onChange={(e) => setFramevalue(e)}
                  wrapClassName="bg-white_A700 border border-bluegray_200 border-solid flex sm:hidden md:ml-[0] ml-[227px] pr-[35px] py-[13px] rounded w-[38%] md:w-full"
                  className="font-medium p-0 placeholder:text-bluegray_400 sm:hidden sm:pr-5 text-bluegray_400 text-left text-xs w-full"
                  name="frame"
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
                      onClick={() => setFramevalue("")}
                      style={{
                        visibility:
                          framevalue?.length <= 0 ? "hidden" : "visible",
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
              <div className="flex md:flex-col flex-row gap-5 items-start justify-between mb-[25px] mt-4 w-full">
                <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-[24%] md:w-full">
                  <Text className="text-bluegray_900" size="2xl">
                    Shopping centre
                  </Text>
                  <div className="flex font-inter md:h-[1034px] h-[1050px] justify-end relative w-full">
                    <div className="flex flex-col gap-[11px] h-full items-start justify-start mb-[247px] mt-auto mx-auto pr-1 pt-1">
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
                    <div className="absolute bg-white_A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[31px] sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start mt-2 w-full">
                        <Text className="text-bluegray_900" as="h6" size="xl">
                          Categories
                        </Text>
                        <div className="flex flex-col gap-5 items-center justify-start mt-[34px] w-full">
                          <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text className="text-bluegray_800" size="lg">
                                Clothes
                              </Text>
                              <Img
                                src="images/img_chevronup.svg"
                                className="h-5 w-5"
                                alt="chevronup"
                              />
                            </div>
                            <div className="flex flex-col gap-6 items-start justify-start p-[3px]">
                              <Text
                                className="md:ml-[0] ml-[5px] text-bluegray_800"
                                size="lg"
                              >
                                T-shirts
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[5px] text-bluegray_800"
                                size="lg"
                              >
                                Jeans
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[5px] text-bluegray_800"
                                size="lg"
                              >
                                Jackets
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-indigo_51 h-px w-full" />
                          <SelectBox
                            className="font-medium text-base text-bluegray_800 text-left w-full"
                            placeholderClassName="text-bluegray_800"
                            indicator={
                              <Img
                                src="images/img_arrowdown.svg"
                                className="h-5 mr-[0] w-5"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="Frame One"
                            options={frameOneOptionsList}
                            isSearchable={false}
                            placeholder="Hats"
                          />
                          <Line className="bg-indigo_51 h-px w-full" />
                          <SelectBox
                            className="font-medium text-base text-bluegray_800 text-left w-full"
                            placeholderClassName="text-bluegray_800"
                            indicator={
                              <Img
                                src="images/img_arrowdown.svg"
                                className="h-5 mr-[0] w-5"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="Frame Two"
                            options={frameTwoOptionsList}
                            isSearchable={false}
                            placeholder="Shoes"
                          />
                          <Line className="bg-indigo_51 h-px w-full" />
                          <SelectBox
                            className="font-medium text-base text-bluegray_800 text-left w-full"
                            placeholderClassName="text-bluegray_800"
                            indicator={
                              <Img
                                src="images/img_arrowdown.svg"
                                className="h-5 mr-[0] w-5"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="Frame Three"
                            options={frameThreeOptionsList}
                            isSearchable={false}
                            placeholder="Other accessories"
                          />
                          <Line className="bg-indigo_51 h-px w-full" />
                        </div>
                        <div className="flex flex-col gap-[19px] items-start justify-start mt-[23px] w-full">
                          <Text className="text-bluegray_800" size="lg">
                            Price
                          </Text>
                          <div className="flex flex-col gap-2 items-center justify-start w-full">
                            <SeekBar
                              inputValue={[null]}
                              trackColors={["", "#e2e8ed"]}
                              thumbClassName="h-[undefinedpx] w-[undefinedpx] flex justify-center items-center rounded-[50%] outline-none"
                              className="flex h-3.5 w-full"
                              trackClassName="h-1 flex w-full"
                            />{" "}
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="!font-medium h-4 text-bluegray_400"
                                size="s"
                              >
                                $0
                              </Text>
                              <Text
                                className="!font-medium text-bluegray_400"
                                size="s"
                              >
                                $10,000
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text className="mt-[25px] text-bluegray_800" size="lg">
                          Rating
                        </Text>
                        <div className="flex flex-row items-center justify-between mt-4 w-full">
                          <CheckBox
                            className="font-medium text-bluegray_800 text-left text-sm"
                            inputClassName="mr-[5px]"
                            name="Remember"
                            id="Remember"
                            label="5 Stars"
                          ></CheckBox>
                          <Img
                            src="images/img_frame_11X77.png"
                            className="h-[11px] md:h-auto object-cover"
                            alt="Frame Four"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-4 w-full">
                          <CheckBox
                            className="font-medium text-bluegray_800 text-left text-sm"
                            inputClassName="mr-[5px]"
                            name="Remember One"
                            id="Remember One"
                            label="4 Stars"
                          ></CheckBox>
                          <Img
                            src="images/img_frame_11X61.png"
                            className="h-[11px] md:h-auto object-cover"
                            alt="Frame Five"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-4 w-full">
                          <CheckBox
                            className="font-medium text-bluegray_800 text-left text-sm"
                            inputClassName="mr-[5px]"
                            name="Remember Two"
                            id="Remember Two"
                            label="3 Stars"
                          ></CheckBox>
                          <Img
                            src="images/img_frame_11X45.png"
                            className="h-[11px] md:h-auto object-cover"
                            alt="Frame Six"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-4 w-full">
                          <CheckBox
                            className="font-medium text-bluegray_800 text-left text-sm"
                            inputClassName="mr-[5px]"
                            name="Remember Three"
                            id="Remember Three"
                            label="2 Stars"
                          ></CheckBox>
                          <Img
                            src="images/img_frame_11X28.png"
                            className="h-[11px] md:h-auto object-cover"
                            alt="Frame Seven"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-4 w-full">
                          <CheckBox
                            className="font-medium text-bluegray_800 text-left text-sm"
                            inputClassName="mr-[5px]"
                            name="Remember Four"
                            id="Remember Four"
                            label="1 Star"
                          ></CheckBox>
                          <Img
                            src="images/img_vector_11X12.png"
                            className="h-[11px] md:h-auto object-cover w-3"
                            alt="Vector One"
                          />
                        </div>
                        <div className="flex flex-col gap-[19px] items-start justify-start mt-6 w-[73%] md:w-full">
                          <Text className="text-bluegray_800" size="lg">
                            Color
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-between w-full">
                            <Img
                              src="images/img_icon_bluegray_400.svg"
                              className="h-6 w-6"
                              alt="Icon Seven"
                            />
                            <div className="bg-light_blue_A700 flex flex-col h-6 items-center justify-start p-1.5 rounded-[50%] w-6">
                              <div className="bg-white_A700 h-3 rounded-[50%] w-3"></div>
                            </div>
                            <div className="bg-pink_400 h-6 rounded-[50%] w-6"></div>
                            <div className="bg-amber_302 h-6 rounded-[50%] w-6"></div>
                            <div className="bg-pink_A100 h-6 rounded-[50%] w-6"></div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 items-center justify-start mt-8 w-full">
                          <Button
                            className="bg-deep_orange_300 cursor-pointer flex h-12 items-center justify-center px-[50px] py-[9px] rounded-[24px] w-[210px]"
                            rightIcon={
                              <Img
                                src="images/img_plus.svg"
                                className="ml-[15px] mr-[35px] my-3.5"
                                alt="plus"
                              />
                            }
                          >
                            <div className="font-semibold md:px-10 sm:px-5 text-left text-sm text-white_A700">
                              Apply filter
                            </div>
                          </Button>
                          <div className="bg-gray_51 flex flex-row gap-2.5 h-12 md:h-auto items-center justify-between md:px-10 sm:px-5 px-[54px] py-[9px] rounded-[24px] w-[210px]">
                            <Text
                              className="!font-semibold text-bluegray_900 w-auto"
                              size="md"
                            >
                              Clear all
                            </Text>
                            <Img
                              src="images/img_trash2.svg"
                              className="h-5 w-5"
                              alt="trashTwo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:mt-0 mt-14 w-3/4 md:w-full">
                  <Input
                    value={frameeightvalue}
                    onChange={(e) => setFrameeightvalue(e)}
                    wrapClassName="bg-white_A700 flex pb-4 pt-[21px] rounded shadow-bs w-full"
                    className="font-normal p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left w-full"
                    name="frame Eight"
                    placeholder="Seach name, type,..."
                    prefix={
                      <Img
                        src="images/img_search_bluegray_900.svg"
                        className="cursor-pointer ml-8 mr-4 my-4"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        className="cursor-pointer my-auto"
                        onClick={() => setFrameeightvalue("")}
                        fillColor="#828fa2"
                        style={{
                          visibility:
                            frameeightvalue?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={24}
                        width={24}
                        viewBox="0 0 24 24"
                      />
                    }
                  ></Input>
                  <div className="h-[1186px] md:h-[2399px] sm:h-[3579px] mt-[19px] relative w-full">
                    <div className="absolute bg-white_A700 h-[308px] inset-x-[0] mx-auto rounded shadow-bs top-[1%] w-[32%]"></div>
                    <div className="bg-white_A700 h-[308px] ml-auto mt-[9px] rounded shadow-bs w-[32%]"></div>
                    <div className="absolute md:gap-5 gap-[0] grid grid-cols-1 inset-[0] justify-center m-auto min-h-[auto] w-full">
                      <div className="flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-bs w-full">
                          <div className="h-[353px] relative w-full">
                            <Img
                              src="images/img_3427408800611.png"
                              className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                              alt="3427408800611"
                            />
                            <div className="absolute flex flex-row gap-2 items-center justify-center right-[7%] top-[6%] w-[69%]">
                              <Button
                                className="bg-red_400_19 cursor-pointer flex h-[30px] items-center justify-center px-4 py-[9px] rounded w-[82px]"
                                rightIcon={
                                  <Img
                                    src="images/img_zap.svg"
                                    className="ml-[11px] mr-2 my-[9px]"
                                    alt="zap"
                                  />
                                }
                              >
                                <div className="font-normal text-left text-red_600 text-xs">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="bg-indigo_400_19 cursor-pointer flex h-[30px] items-center justify-center px-4 py-[9px] rounded w-[98px]"
                                rightIcon={
                                  <Img
                                    src="images/img_tag.svg"
                                    className="ml-[13px] mr-2 my-[9px]"
                                    alt="tag"
                                  />
                                }
                              >
                                <div className="font-normal text-indigo_400 text-left text-xs">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                            <div className="flex flex-col gap-8 items-center justify-start w-full">
                              <div className="flex flex-col gap-4 items-center justify-start w-[96%] md:w-full">
                                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                                  <Text className="text-bluegray_900" size="md">
                                    Avo T-Shirt
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-full">
                                    <Text
                                      className="font-inter text-bluegray_900"
                                      as="h6"
                                      size="xl"
                                    >
                                      $120.0
                                    </Text>
                                    <Text
                                      className="!font-normal font-poppins line-through mt-0.5 text-bluegray_400"
                                      size="md"
                                    >
                                      $140.0
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_11X77.png"
                                  className="h-[11px] md:h-auto object-cover"
                                  alt="Frame Eleven"
                                />
                              </div>
                              <div className="flex flex-row gap-4 items-center justify-between w-full">
                                <Button className="bg-deep_orange_300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-5"
                                    alt="ButtonPrimary"
                                  />
                                </Button>
                                <Button className="bg-gray_51 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                  <Img
                                    src="images/img_buttonprimary_10.svg"
                                    className="h-5"
                                    alt="ButtonPrimary One"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-bs w-full">
                          <div className="h-[353px] relative w-full">
                            <Img
                              src="images/img_3427408800611_353X273.png"
                              className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                              alt="3427408800611 One"
                            />
                            <div className="absolute flex flex-row gap-2 items-center justify-center right-[7%] top-[6%] w-[69%]">
                              <Button
                                className="bg-red_400_19 cursor-pointer flex h-[30px] items-center justify-center px-4 py-[9px] rounded w-[82px]"
                                rightIcon={
                                  <Img
                                    src="images/img_zap.svg"
                                    className="ml-[11px] mr-2 my-[9px]"
                                    alt="zap"
                                  />
                                }
                              >
                                <div className="font-normal text-left text-red_600 text-xs">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="bg-indigo_400_19 cursor-pointer flex h-[30px] items-center justify-center px-4 py-[9px] rounded w-[98px]"
                                rightIcon={
                                  <Img
                                    src="images/img_tag.svg"
                                    className="ml-[13px] mr-2 my-[9px]"
                                    alt="tag"
                                  />
                                }
                              >
                                <div className="font-normal text-indigo_400 text-left text-xs">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                            <div className="flex flex-col gap-8 items-center justify-start w-full">
                              <div className="flex flex-col gap-4 items-center justify-start w-[96%] md:w-full">
                                <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                                  <Text className="text-bluegray_900" size="md">
                                    Basic T-Shirt
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-full">
                                    <Text
                                      className="font-inter text-bluegray_900"
                                      as="h6"
                                      size="xl"
                                    >
                                      $120.0
                                    </Text>
                                    <Text
                                      className="!font-normal font-poppins line-through mt-0.5 text-bluegray_400"
                                      size="md"
                                    >
                                      $140.0
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_11X77.png"
                                  className="h-[11px] md:h-auto object-cover"
                                  alt="Frame One"
                                />
                              </div>
                              <div className="flex flex-row gap-4 items-center justify-between w-full">
                                <Button className="bg-deep_orange_300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-5"
                                    alt="ButtonPrimary Two"
                                  />
                                </Button>
                                <Button className="bg-gray_51 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                  <Img
                                    src="images/img_buttonprimary_10.svg"
                                    className="h-5"
                                    alt="ButtonPrimary Three"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[37px] items-center justify-start pb-8 rounded-lg shadow-bs w-full">
                          <div className="h-[353px] relative w-full">
                            <Img
                              src="images/img_3427408800611_1.png"
                              className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                              alt="3427408800611 Two"
                            />
                            <div className="absolute flex flex-row gap-2 items-center justify-center right-[7%] top-[6%] w-[69%]">
                              <Button
                                className="bg-red_400_19 cursor-pointer flex h-[30px] items-center justify-center px-4 py-[9px] rounded w-[82px]"
                                rightIcon={
                                  <Img
                                    src="images/img_zap.svg"
                                    className="ml-[11px] mr-2 my-[9px]"
                                    alt="zap"
                                  />
                                }
                              >
                                <div className="font-normal text-left text-red_600 text-xs">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="bg-indigo_400_19 cursor-pointer flex h-[30px] items-center justify-center px-4 py-[9px] rounded w-[98px]"
                                rightIcon={
                                  <Img
                                    src="images/img_tag.svg"
                                    className="ml-[13px] mr-2 my-[9px]"
                                    alt="tag"
                                  />
                                }
                              >
                                <div className="font-normal text-indigo_400 text-left text-xs">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                            <div className="flex flex-col gap-8 items-center justify-start w-full">
                              <div className="flex flex-col gap-4 items-center justify-start w-[96%] md:w-full">
                                <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                                  <Text className="text-bluegray_900" size="md">
                                    Trendy Polo
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-full">
                                    <Text
                                      className="font-inter text-bluegray_900"
                                      as="h6"
                                      size="xl"
                                    >
                                      $120.0
                                    </Text>
                                    <Text
                                      className="!font-normal font-poppins line-through mt-0.5 text-bluegray_400"
                                      size="md"
                                    >
                                      $140.0
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_11X77.png"
                                  className="h-[11px] md:h-auto object-cover"
                                  alt="Frame Two"
                                />
                              </div>
                              <div className="flex flex-row gap-4 items-center justify-between w-full">
                                <Button className="bg-deep_orange_300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-5"
                                    alt="ButtonPrimary Four"
                                  />
                                </Button>
                                <Button className="bg-gray_51 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                  <Img
                                    src="images/img_buttonprimary_10.svg"
                                    className="h-5"
                                    alt="ButtonPrimary Five"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-bs w-full">
                          <div className="h-[353px] relative w-full">
                            <Img
                              src="images/img_3427408800611_2.png"
                              className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                              alt="3427408800611 One"
                            />
                            <div className="absolute flex flex-row gap-2 items-center justify-center right-[7%] top-[6%] w-[69%]">
                              <Button
                                className="bg-red_400_19 cursor-pointer flex h-[30px] items-center justify-center px-4 py-[9px] rounded w-[82px]"
                                rightIcon={
                                  <Img
                                    src="images/img_zap.svg"
                                    className="ml-[11px] mr-2 my-[9px]"
                                    alt="zap"
                                  />
                                }
                              >
                                <div className="font-normal text-left text-red_600 text-xs">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="bg-indigo_400_19 cursor-pointer flex h-[30px] items-center justify-center px-4 py-[9px] rounded w-[98px]"
                                rightIcon={
                                  <Img
                                    src="images/img_tag.svg"
                                    className="ml-[13px] mr-2 my-[9px]"
                                    alt="tag"
                                  />
                                }
                              >
                                <div className="font-normal text-indigo_400 text-left text-xs">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                            <div className="flex flex-col gap-8 items-center justify-start w-full">
                              <div className="flex flex-col gap-4 items-center justify-start w-[96%] md:w-full">
                                <div className="flex flex-col gap-[17px] justify-start w-full">
                                  <Text
                                    className="ml-3.5 md:ml-[0] text-bluegray_900"
                                    size="md"
                                  >
                                    Polo Shirt
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-full">
                                    <Text
                                      className="font-inter text-bluegray_900"
                                      as="h6"
                                      size="xl"
                                    >
                                      $120.0
                                    </Text>
                                    <Text
                                      className="!font-normal font-poppins line-through mt-0.5 text-bluegray_400"
                                      size="md"
                                    >
                                      $140.0
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_11X77.png"
                                  className="h-[11px] md:h-auto object-cover"
                                  alt="Frame Twelve"
                                />
                              </div>
                              <div className="flex flex-row gap-4 items-center justify-between w-full">
                                <Button className="bg-deep_orange_300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-5"
                                    alt="ButtonPrimary One"
                                  />
                                </Button>
                                <Button className="bg-gray_51 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                  <Img
                                    src="images/img_buttonprimary_10.svg"
                                    className="h-5"
                                    alt="ButtonPrimary One One"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-bs w-full">
                          <div className="h-[353px] relative w-full">
                            <Img
                              src="images/img_3427408800611_3.png"
                              className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                              alt="3427408800611 One One"
                            />
                            <div className="absolute flex flex-row gap-2 items-center justify-center right-[7%] top-[6%] w-[69%]">
                              <Button
                                className="bg-red_400_19 cursor-pointer flex h-[30px] items-center justify-center px-4 py-[9px] rounded w-[82px]"
                                rightIcon={
                                  <Img
                                    src="images/img_zap.svg"
                                    className="ml-[11px] mr-2 my-[9px]"
                                    alt="zap"
                                  />
                                }
                              >
                                <div className="font-normal text-left text-red_600 text-xs">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="bg-indigo_400_19 cursor-pointer flex h-[30px] items-center justify-center px-4 py-[9px] rounded w-[98px]"
                                rightIcon={
                                  <Img
                                    src="images/img_tag.svg"
                                    className="ml-[13px] mr-2 my-[9px]"
                                    alt="tag"
                                  />
                                }
                              >
                                <div className="font-normal text-indigo_400 text-left text-xs">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                            <div className="flex flex-col gap-8 items-center justify-start w-full">
                              <div className="flex flex-col gap-4 items-center justify-start w-[96%] md:w-full">
                                <div className="flex flex-col gap-[17px] justify-start w-full">
                                  <Text
                                    className="ml-3.5 md:ml-[0] text-bluegray_900"
                                    size="md"
                                  >
                                    Bomber
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-full">
                                    <Text
                                      className="font-inter text-bluegray_900"
                                      as="h6"
                                      size="xl"
                                    >
                                      $120.0
                                    </Text>
                                    <Text
                                      className="!font-normal font-poppins line-through mt-0.5 text-bluegray_400"
                                      size="md"
                                    >
                                      $140.0
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_11X77.png"
                                  className="h-[11px] md:h-auto object-cover"
                                  alt="Frame One One"
                                />
                              </div>
                              <div className="flex flex-row gap-4 items-center justify-between w-full">
                                <Button className="bg-deep_orange_300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-5"
                                    alt="ButtonPrimary Two One"
                                  />
                                </Button>
                                <Button className="bg-gray_51 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                  <Img
                                    src="images/img_buttonprimary_10.svg"
                                    className="h-5"
                                    alt="ButtonPrimary Three One"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-bs w-full">
                          <div className="h-[353px] relative w-full">
                            <Img
                              src="images/img_3427408800611_4.png"
                              className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                              alt="3427408800611 Two One"
                            />
                            <div className="absolute flex flex-row gap-2 items-center justify-center right-[7%] top-[6%] w-[69%]">
                              <Button
                                className="bg-red_400_19 cursor-pointer flex h-[30px] items-center justify-center px-4 py-[9px] rounded w-[82px]"
                                rightIcon={
                                  <Img
                                    src="images/img_zap.svg"
                                    className="ml-[11px] mr-2 my-[9px]"
                                    alt="zap"
                                  />
                                }
                              >
                                <div className="font-normal text-left text-red_600 text-xs">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="bg-indigo_400_19 cursor-pointer flex h-[30px] items-center justify-center px-4 py-[9px] rounded w-[98px]"
                                rightIcon={
                                  <Img
                                    src="images/img_tag.svg"
                                    className="ml-[13px] mr-2 my-[9px]"
                                    alt="tag"
                                  />
                                }
                              >
                                <div className="font-normal text-indigo_400 text-left text-xs">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                            <div className="flex flex-col gap-8 items-center justify-start w-full">
                              <div className="flex flex-col gap-4 items-center justify-start w-[96%] md:w-full">
                                <div className="flex flex-col gap-[17px] justify-start w-full">
                                  <Text
                                    className="ml-3.5 md:ml-[0] text-bluegray_900"
                                    size="md"
                                  >
                                    Over Shirt
                                  </Text>
                                  <div className="flex flex-row items-start justify-evenly w-full">
                                    <Text
                                      className="font-inter text-bluegray_900"
                                      as="h6"
                                      size="xl"
                                    >
                                      $120.0
                                    </Text>
                                    <Text
                                      className="!font-normal font-poppins line-through mt-0.5 text-bluegray_400"
                                      size="md"
                                    >
                                      $140.0
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_11X77.png"
                                  className="h-[11px] md:h-auto object-cover"
                                  alt="Frame Two One"
                                />
                              </div>
                              <div className="flex flex-row gap-4 items-center justify-between w-full">
                                <Button className="bg-deep_orange_300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-5"
                                    alt="ButtonPrimary Four One"
                                  />
                                </Button>
                                <Button className="bg-gray_51 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                  <Img
                                    src="images/img_buttonprimary_10.svg"
                                    className="h-5"
                                    alt="ButtonPrimary Five One"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-center mt-[41px] w-[28%] md:w-full">
                    <div className="border border-indigo_51 border-solid md:h-5 h-8 p-1.5 relative w-8">
                      <Img
                        src="images/img_chevronleft_20X20.svg"
                        className="absolute h-5 inset-[0] justify-center m-auto w-5"
                        alt="chevronleft"
                      />
                    </div>
                    <Button className="border border-bluegray_900 border-solid cursor-pointer font-medium h-8 py-[9px] text-bluegray_900 text-center text-sm w-8">
                      1
                    </Button>
                    <Button className="border border-indigo_51 border-solid cursor-pointer font-medium h-8 py-[9px] text-bluegray_800 text-center text-sm w-8">
                      2
                    </Button>
                    <Button className="border border-indigo_51 border-solid cursor-pointer font-medium h-8 py-[9px] text-bluegray_800 text-center text-sm w-8">
                      ...
                    </Button>
                    <Button className="border border-indigo_51 border-solid cursor-pointer font-medium h-8 py-2 text-bluegray_800 text-center text-sm w-8">
                      9
                    </Button>
                    <div className="border border-indigo_51 border-solid md:h-5 h-8 p-1.5 relative rotate-[180deg] w-8">
                      <Img
                        src="images/img_chevronright.svg"
                        className="absolute h-5 inset-[0] justify-center m-auto w-5"
                        alt="chevronright"
                      />
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

export default ShopSearchPage;
