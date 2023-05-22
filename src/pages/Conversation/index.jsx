import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ConversationPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");
  const [searchboxonevalue, setSearchboxonevalue] = React.useState("");

  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto pb-[7px] w-full">
        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="flex flex-col gap-9 items-center justify-start mb-[425px] ml-[29px] mr-[54px] mt-9 w-[66%]">
              <Img src="images/img_logo.svg" className="h-7" alt="Logo" />
              <div className="flex flex-col items-start justify-start w-full">
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
                      src="images/img_icon_16.svg"
                      className="h-5 mb-0.5 w-5"
                      alt="Icon Two"
                    />
                    <Text className="mt-[5px] text-bluegray_800" size="md">
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
          <Line className="bg-indigo_51 h-[927px] md:h-px md:w-full w-px" />
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
            <div className="bg-gray_51 flex flex-col font-poppins gap-8 items-start justify-end p-[23px] sm:px-5 w-full">
              <Text className="mt-[17px] text-bluegray_900" size="2xl">
                Message
              </Text>
              <div className="bg-white_A700 flex md:flex-col flex-row font-inter gap-[26px] items-center justify-end sm:pl-5 pl-8 rounded shadow-bs w-full">
                <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-[35%] md:w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[46%] md:w-full">
                    <div className="border-2 border-green_700 border-solid md:h-12 h-[62px] p-[7px] relative rounded-[50%] w-[62px]">
                      <Img
                        src="images/img_robototoyfacefinal2.png"
                        className="absolute h-12 inset-[0] justify-center m-auto rounded-[50%] w-12"
                        alt="RobotoToyFaceFinalTwo"
                      />
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start pr-[5px] pt-[5px]">
                      <Text className="text-bluegray_800" as="h6" size="xl">
                        Ackerman
                      </Text>
                      <Text
                        className="!font-normal text-bluegray_400"
                        size="md"
                      >
                        My accout
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                    <Text className="!font-normal text-bluegray_400" size="md">
                      Online (10)
                    </Text>
                    <div className="flex flex-row gap-6 items-center justify-between w-full">
                      <List
                        className="sm:flex-col flex-row gap-6 grid grid-cols-5"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-3 items-center justify-start mb-[3px] sm:ml-[0] w-full">
                          <div className="md:h-12 h-[51px] relative w-full">
                            <Img
                              src="images/img_punktoyface1.png"
                              className="absolute h-12 inset-x-[0] mx-auto rounded-[50%] top-[0] w-12"
                              alt="PunkToyFaceOne"
                            />
                            <div className="absolute bg-green_700 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                          </div>
                          <Text className="text-bluegray_900" size="lg">
                            Lee
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[11px] items-center justify-start mb-1 sm:ml-[0] w-full">
                          <div className="md:h-12 h-[51px] relative w-full">
                            <Img
                              src="images/img_indiahigh.png"
                              className="absolute h-12 inset-x-[0] mx-auto rounded-[50%] top-[0] w-12"
                              alt="Indiahigh"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                          </div>
                          <Text className="text-bluegray_900" size="lg">
                            Riri
                          </Text>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start mb-[3px] sm:ml-[0] w-full">
                          <div className="md:h-12 h-[51px] relative w-full">
                            <Img
                              src="images/img_tintin22.png"
                              className="absolute h-12 inset-x-[0] mx-auto rounded-[50%] top-[0] w-12"
                              alt="TinTinTwentyTwo"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[3px] text-bluegray_900"
                            size="lg"
                          >
                            Jimo
                          </Text>
                        </div>
                        <div className="flex flex-col gap-3 items-center justify-start mb-[3px] sm:ml-[0] w-full">
                          <div className="md:h-12 h-[51px] relative w-full">
                            <Img
                              src="images/img_vangoghbyamrit1.png"
                              className="absolute h-12 inset-x-[0] mx-auto rounded-[50%] top-[0] w-12"
                              alt="VanGoghByAmritOne"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                          </div>
                          <Text className="text-bluegray_900" size="lg">
                            Acker
                          </Text>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start sm:ml-[0] pb-0.5 pr-0.5 w-full">
                          <div className="md:h-12 h-[51px] ml-0.5 md:ml-[0] relative w-[96%]">
                            <Img
                              src="images/img_punk9252toyfaceedita2.png"
                              className="absolute h-12 inset-x-[0] mx-auto rounded-[50%] top-[0] w-12"
                              alt="Punk9252ToyFaceEditATwo"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                          </div>
                          <Text className="text-bluegray_900" size="lg">
                            Momo
                          </Text>
                        </div>
                      </List>
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="h-6 w-6"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <Input
                    value={searchboxonevalue}
                    onChange={(e) => setSearchboxonevalue(e)}
                    wrapClassName="bg-gray_51 flex pr-[35px] py-[13px] rounded w-[99%]"
                    className="font-medium p-0 placeholder:text-bluegray_400 sm:pr-5 text-bluegray_400 text-left text-xs w-full"
                    name="SearchBox One"
                    placeholder="Search..."
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer ml-4 mr-2 my-2.5"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#828fa2"
                        className="cursor-pointer my-auto"
                        onClick={() => setSearchboxonevalue("")}
                        style={{
                          visibility:
                            searchboxonevalue?.length <= 0
                              ? "hidden"
                              : "visible",
                        }}
                        height={20}
                        width={20}
                        viewBox="0 0 20 20"
                      />
                    }
                  ></Input>
                  <List
                    className="flex-col grid items-center pb-[21px] w-[99%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-5 items-center justify-between w-full">
                      <div className="md:h-12 h-[51px] relative w-[13%]">
                        <Img
                          src="images/img_punktoyface1.png"
                          className="absolute h-12 inset-x-[0] mx-auto rounded-[50%] top-[0] w-12"
                          alt="PunkToyFaceOne One"
                        />
                        <div className="absolute bg-green_700 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[83%]">
                        <div className="flex flex-col gap-[13px] items-start justify-end">
                          <Text
                            className="mt-[5px] text-bluegray_800"
                            as="h6"
                            size="xl"
                          >
                            Lee Ankar
                          </Text>
                          <Text className="text-bluegray_800" size="lg">
                            Hey! Can i meet you for a sec?
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[13px] items-start justify-end pl-0.5 pt-0.5">
                          <Text
                            className="!font-normal mt-[3px] text-bluegray_400"
                            size="md"
                          >
                            now
                          </Text>
                          <Text
                            className="!font-bold bg-red_600 flex h-6 items-center justify-center ml-1 md:ml-[0] rounded-[50%] text-center text-white_A700 w-6"
                            size="s"
                          >
                            3
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-indigo_51 w-[83%]" />
                    <div className="flex flex-row gap-5 items-center justify-between w-full">
                      <div className="md:h-12 h-[51px] relative w-[13%]">
                        <Img
                          src="images/img_tintin22.png"
                          className="absolute h-12 inset-x-[0] mx-auto rounded-[50%] top-[0] w-12"
                          alt="TinTinTwentyTwo One"
                        />
                        <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[83%]">
                        <div className="flex flex-col gap-3.5 items-start justify-end">
                          <Text
                            className="mt-[5px] text-bluegray_800"
                            as="h6"
                            size="xl"
                          >
                            Jimo
                          </Text>
                          <Text
                            className="!font-normal text-bluegray_400"
                            size="lg"
                          >
                            Sorry for my mistaken ✓
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start pl-0.5 py-0.5 w-[55px]">
                          <Text
                            className="!font-normal mb-9 text-bluegray_400"
                            size="md"
                          >
                            23 mins
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-indigo_51 w-[83%]" />
                    <div className="flex flex-row gap-5 items-center justify-between w-full">
                      <div className="md:h-12 h-[51px] relative w-[13%]">
                        <Img
                          src="images/img_punk9252toyfaceedita2.png"
                          className="absolute h-12 inset-x-[0] mx-auto rounded-[50%] top-[0] w-12"
                          alt="Punk9252ToyFaceEditATwo One"
                        />
                        <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[83%]">
                        <div className="flex flex-col gap-[13px] items-start justify-end">
                          <Text
                            className="mt-[5px] text-bluegray_800"
                            as="h6"
                            size="xl"
                          >
                            Momo
                          </Text>
                          <Text
                            className="!font-normal text-bluegray_400"
                            size="lg"
                          >
                            Sorry for my mistaken ✓
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start pl-0.5 py-0.5 w-[55px]">
                          <Text
                            className="!font-normal mb-9 text-bluegray_400"
                            size="md"
                          >
                            23 mins
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-indigo_51 w-[83%]" />
                    <div className="flex flex-row gap-5 items-center justify-between w-full">
                      <div className="md:h-12 h-[51px] relative w-[13%]">
                        <Img
                          src="images/img_indiahigh.png"
                          className="absolute h-12 inset-x-[0] mx-auto rounded-[50%] top-[0] w-12"
                          alt="Indiahigh One"
                        />
                        <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[83%]">
                        <div className="flex flex-col gap-3.5 items-start justify-end">
                          <Text
                            className="mt-[5px] text-bluegray_800"
                            as="h6"
                            size="xl"
                          >
                            Riri Lee
                          </Text>
                          <Text
                            className="!font-normal text-bluegray_400"
                            size="lg"
                          >
                            Sorry for my mistaken ✓
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start pl-0.5 py-0.5 w-[55px]">
                          <Text
                            className="!font-normal mb-9 text-bluegray_400"
                            size="md"
                          >
                            23 mins
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <Line className="bg-indigo_51 h-[747px] md:h-px md:w-full w-px" />
                <div className="flex md:flex-1 flex-col items-center justify-start w-[63%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
                      <div className="flex flex-col gap-3 items-start justify-end pr-[3px] pt-[3px] w-[15%] md:w-full">
                        <Text
                          className="mt-0.5 text-bluegray_800"
                          as="h6"
                          size="xl"
                        >
                          Lee Ankar
                        </Text>
                        <Radio
                          value="Online"
                          className="font-medium text-bluegray_800 text-left text-sm"
                          inputClassName="bg-green_700 h-2 mr-[5px] w-2"
                          checked={false}
                          name="profileViewsOne"
                          label="Online"
                          id="Online"
                        ></Radio>
                      </div>
                      <Button className="bg-gray_51 flex h-12 items-center justify-center mb-2.5 md:ml-[0] ml-[437px] p-3.5 rounded-[50%] w-12">
                        <Img
                          src="images/img_search_bluegray_900.svg"
                          className="h-5"
                          alt="search"
                        />
                      </Button>
                      <Button className="bg-gray_51 flex h-12 items-center justify-center mb-2.5 ml-4 md:ml-[0] p-3.5 rounded-[50%] w-12">
                        <Img
                          src="images/img_buttonprimary_7.svg"
                          className="h-5"
                          alt="ButtonPrimary"
                        />
                      </Button>
                    </div>
                    <Line className="bg-indigo_51 h-px mt-6 w-full" />
                    <div className="flex flex-col items-start justify-start mt-[35px] w-[92%] md:w-full">
                      <div className="flex flex-col relative w-1/2">
                        <div className="flex flex-col gap-3 justify-start mx-auto w-full">
                          <Text
                            className="!font-normal ml-9 md:ml-[0] text-bluegray_400"
                            size="md"
                          >
                            Lee Ankar{" "}
                          </Text>
                          <div className="flex flex-row gap-3 items-start justify-between w-full">
                            <Img
                              src="images/img_punktoyface1.png"
                              className="h-6 md:h-auto rounded-[50%] w-6"
                              alt="PunkToyFaceOne Two"
                            />
                            <div className="bg-gray_51 flex flex-col items-start justify-end p-4 rounded-bl rounded-br rounded-tr">
                              <Text
                                className="mt-[5px] text-bluegray_800"
                                size="lg"
                              >
                                Hey! Can i meet you for a sec?
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="!font-normal bg-gray_51 border-2 border-solid border-white_A700 h-7 justify-center ml-auto mr-[11px] mt-[-10px] px-1.5 py-[5px] rounded-[50%] text-black_900 w-7 z-[1]"
                          size="lg"
                        >
                          😍
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-end justify-end md:ml-[0] ml-[330px] mt-[5px] w-[49%] md:w-full">
                        <Input
                          wrapClassName="bg-deep_orange_300 pb-4 pl-4 pr-[35px] pt-[21px] rounded-bl rounded-br rounded-tr w-[91%]"
                          className="font-medium p-0 placeholder:text-white_A700 sm:pr-5 text-base text-left text-white_A700 w-full"
                          name="Group Three"
                          placeholder="Hey! Can i meet you for a sec?"
                        ></Input>
                        <Img
                          src="images/img_circlecheckfull.svg"
                          className="h-5 mt-9 w-5"
                          alt="circlecheckfull"
                        />
                      </div>
                      <div className="flex flex-row gap-2 items-end justify-end md:ml-[0] ml-[330px] mt-4 w-[49%] md:w-full">
                        <div className="bg-gray_51 flex flex-col gap-4 items-start justify-start p-4 rounded-bl-lg rounded-br-lg rounded-tr-lg w-[91%]">
                          <div className="h-[133px] relative w-full">
                            <Img
                              src="images/img_vector_133X251.png"
                              className="h-[133px] m-auto object-cover rounded-lg w-full"
                              alt="Vector One"
                            />
                            <Button className="absolute bg-black_900_66 bottom-[6%] cursor-pointer font-medium min-w-[41px] py-[5px] right-[3%] rounded-[10px] text-center text-white_A700 text-xs">
                              1:00
                            </Button>
                          </div>
                          <div className="flex flex-col gap-[13px] items-start justify-start">
                            <Text
                              className="!font-semibold text-bluegray_900"
                              as="h6"
                              size="lg"
                            >
                              ☕️ Life Style Coffee
                            </Text>
                            <Text
                              className="!font-normal text-bluegray_402"
                              size="md"
                            >
                              8350 Melrose Ave, Los Angeles
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_circlecheckfull.svg"
                          className="h-5 mt-[215px] w-5"
                          alt="circlecheckfull One"
                        />
                      </div>
                      <div className="bg-gray_51 flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[105px] p-[9px] rounded w-full">
                        <Input
                          wrapClassName="bg-gray_51 md:flex-1 ml-1 md:ml-[0] pb-1.5 pl-[3px] pr-[35px] pt-3 w-3/4 md:w-full"
                          className="font-normal p-0 placeholder:text-bluegray_400 sm:pr-5 text-base text-bluegray_400 text-left w-full"
                          name="frame3801"
                          placeholder="Enter message..."
                        ></Input>
                        <Img
                          src="images/img_share2.svg"
                          className="h-6 md:ml-[0] ml-[17px] w-6"
                          alt="shareTwo"
                        />
                        <Img
                          src="images/img_link2.svg"
                          className="h-6 ml-6 md:ml-[0] w-6"
                          alt="linkTwo"
                        />
                        <Img
                          src="images/img_x.svg"
                          className="h-6 ml-6 md:ml-[0] w-6"
                          alt="plus"
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
    </>
  );
};

export default ConversationPage;
