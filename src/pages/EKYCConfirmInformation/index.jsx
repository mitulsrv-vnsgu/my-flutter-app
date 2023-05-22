import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const EKYCConfirmInformationPage = () => {
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
                <div className="bg-white_A700 flex flex-col items-center justify-start p-12 md:px-10 sm:px-5 rounded shadow-bs w-full">
                  <div className="flex flex-col gap-[21px] justify-start">
                    <Text
                      className="md:ml-[0] ml-[25px] text-bluegray_900"
                      as="h4"
                      size="3xl"
                    >
                      Confirm Information
                    </Text>
                    <Text className="!font-normal text-bluegray_400" size="md">
                      Make sure that all your information are precise
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[27px] items-center justify-start mt-9 w-[67%] md:w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <Text className="text-bluegray_800" size="md">
                        <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                          Full name{" "}
                        </span>
                        <span className="text-red_600 font-inter text-left text-sm font-medium">
                          *
                        </span>
                      </Text>
                      <Input
                        wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-[35px] py-[19px] rounded w-full"
                        className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                        name="group18068"
                        placeholder="Mustermann Galer"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text className="text-bluegray_800" size="md">
                        <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                          ID number{" "}
                        </span>
                        <span className="text-red_600 font-inter text-left text-sm font-medium">
                          *
                        </span>
                      </Text>
                      <Input
                        wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-[35px] py-[19px] rounded w-full"
                        className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                        name="group18068 One"
                        placeholder="L01X00T47"
                      ></Input>
                    </div>
                    <div className="md:gap-5 gap-[23px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Text className="text-bluegray_800" size="md">
                          <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                            Gender{" "}
                          </span>
                          <span className="text-red_600 font-inter text-left text-sm font-medium">
                            *
                          </span>
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-[35px] py-[19px] rounded w-full"
                          className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                          name="gender One"
                          placeholder="Female"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text className="text-bluegray_800" size="md">
                          <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                            Nationality{" "}
                          </span>
                          <span className="text-red_600 font-inter text-left text-sm font-medium">
                            *
                          </span>
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-[35px] py-[19px] rounded w-full"
                          className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                          name="group18068 Two"
                          placeholder="Deitsch"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Text className="text-bluegray_800" size="md">
                          <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                            Date of birth{" "}
                          </span>
                          <span className="text-red_600 font-inter text-left text-sm font-medium">
                            *
                          </span>
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-[35px] py-[19px] rounded w-full"
                          className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                          name="group18068 Three"
                          placeholder="12.08.1983"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Text className="text-bluegray_800" size="md">
                          <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                            Place of birth{" "}
                          </span>
                          <span className="text-red_600 font-inter text-left text-sm font-medium">
                            *
                          </span>
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-[35px] py-[19px] rounded w-full"
                          className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                          name="group18068 Four"
                          placeholder="Berlin"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <CheckBox
                    className="font-normal mt-12 text-bluegray_400 text-left text-sm"
                    inputClassName="mr-[5px]"
                    name="Remember"
                    id="Remember"
                    label='&lt;&gt;By clicking button “Confirm", I take all responsibility of the information above&lt;/&gt;'
                  ></CheckBox>
                  <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[270px] mt-[39px] py-[17px] rounded-[24px] text-center text-sm text-white_A700">
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EKYCConfirmInformationPage;
