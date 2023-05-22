import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, SelectBox, Switch, Text } from "components";

import { CloseSVG } from "../../assets/images";

const paypalOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SettingsPage = () => {
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
              <div className="flex flex-col items-start justify-start mb-[339px] w-[87%] md:w-full">
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
          <Line className="bg-indigo_51 h-[870px] md:h-px md:w-full w-px" />
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
              <div className="flex md:flex-col flex-row gap-[19px] items-end justify-between mt-4 w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[67%] md:w-full">
                  <Text className="text-bluegray_900" size="2xl">
                    Settings
                  </Text>
                  <div className="bg-white_A700 flex flex-col font-inter gap-[35px] items-start justify-start mt-8 p-8 sm:px-5 rounded shadow-bs w-full">
                    <div className="flex flex-col gap-[17px] items-start justify-start pr-[5px] pt-[5px]">
                      <Text className="text-bluegray_900" as="h6" size="xl">
                        Account info.
                      </Text>
                      <Text
                        className="!font-normal text-bluegray_900"
                        size="md"
                      >
                        <span className="text-bluegray_900 font-inter text-left text-sm">
                          Verify your information to proctect your account.{" "}
                        </span>
                        <span className="text-deep_orange_300 font-inter text-left text-sm font-semibold">
                          Verify now
                        </span>
                      </Text>
                    </div>
                    <div className="gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text className="text-bluegray_800" size="md">
                          Username
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-[35px] py-[19px] rounded w-full"
                          className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                          name="Group2524"
                          placeholder="Sam"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Text className="text-bluegray_800" size="md">
                          Email address
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid pb-4 pl-5 pr-[35px] pt-[21px] rounded w-full"
                          className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                          name="email"
                          placeholder="sambrown@gmail.com"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Text className="text-bluegray_800" size="md">
                          First name
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-[35px] py-[19px] rounded w-full"
                          className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                          name="Group2526"
                          placeholder="Sam"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text className="text-bluegray_800" size="md">
                          Last name
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-[35px] py-[19px] rounded w-full"
                          className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                          name="Group2527"
                          placeholder="Brown"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-inter gap-[21px] items-center justify-between mt-5 w-full">
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[37px] items-start justify-start p-8 sm:px-5 rounded shadow-bs w-[49%] md:w-full">
                      <div className="flex flex-col items-center justify-end pr-1 py-1">
                        <Text className="text-bluegray_900" as="h6" size="xl">
                          Password Reset
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text className="text-bluegray_800" size="md">
                            Current password
                          </Text>
                          <Input
                            wrapClassName="bg-white_A700 border border-indigo_51 border-solid pb-[22px] pl-5 pr-[35px] pt-[17px] rounded w-full"
                            className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                            type="password"
                            name="password"
                            placeholder="************"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text className="text-bluegray_800" size="md">
                            New password
                          </Text>
                          <Input
                            wrapClassName="bg-white_A700 border border-indigo_51 border-solid pb-[22px] pl-5 pr-[35px] pt-[17px] rounded w-full"
                            className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                            type="password"
                            name="password One"
                            placeholder="************"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs w-[49%] md:w-full">
                      <div className="flex flex-col gap-[17px] items-start justify-start pr-[5px] pt-[5px]">
                        <Text className="text-bluegray_900" as="h6" size="xl">
                          Notifications
                        </Text>
                        <Text
                          className="!font-normal text-bluegray_400"
                          size="md"
                        >
                          Open notification to receive our news fastly
                        </Text>
                      </div>
                      <div className="flex flex-row gap-6 items-center justify-start mt-[42px] w-[84%] md:w-full">
                        <Switch value={true} className="w-[19%]" />
                        <Text
                          className="!font-normal text-bluegray_800"
                          size="lg"
                        >
                          Send notification to mail
                        </Text>
                      </div>
                      <div className="flex flex-row gap-6 items-end justify-start mt-8 w-3/4 md:w-full">
                        <Switch value={true} className="w-[21%]" />
                        <Text
                          className="!font-normal mt-[5px] text-bluegray_800"
                          size="lg"
                        >
                          Send new promotion
                        </Text>
                      </div>
                      <div className="flex flex-row gap-6 items-end justify-start mb-5 mt-8 w-[70%] md:w-full">
                        <Switch value={false} className="w-[23%]" />
                        <Text
                          className="!font-normal mt-[5px] text-bluegray_800"
                          size="lg"
                        >
                          Notice my balance
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col font-inter items-start justify-start md:mt-0 mt-14 p-8 sm:px-5 rounded shadow-bs w-[33%] md:w-full">
                  <div className="flex flex-col items-start justify-end">
                    <Text
                      className="mt-[7px] text-bluegray_900"
                      as="h6"
                      size="xl"
                    >
                      Payment
                    </Text>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start mt-8 w-full">
                    <SelectBox
                      className="font-semibold pb-4 pl-5 pt-[21px] text-base text-bluegray_800 text-left w-full"
                      placeholderClassName="text-bluegray_800"
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-5 mr-[0] pl-[35px] pr-5 sm:pl-5 border-indigo_51 border border-solid w-5 rounded py-[18px]"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group One"
                      options={paypalOptionsList}
                      isSearchable={false}
                      placeholder="Paypal"
                    />
                    <div className="bg-indigo_400 flex flex-row items-start justify-between pt-1.5 rounded w-full">
                      <div className="md:h-[177px] h-[83px] mt-[94px] relative w-3/5">
                        <Text
                          className="absolute bottom-[33%] right-[0] text-white_A700"
                          size="lg"
                        >
                          1234 **** 4567 8901{" "}
                        </Text>
                        <Img
                          src="images/img_group_83X96.png"
                          className="absolute h-[83px] inset-y-[0] left-[0] my-auto object-cover rounded"
                          alt="Group Two"
                        />
                      </div>
                      <div className="h-[161px] md:h-[177px] mb-4 relative w-[26%]">
                        <Img
                          src="images/img_group_12X40.svg"
                          className="h-3 mt-[13px] mx-auto rounded"
                          alt="Group Three"
                        />
                        <Img
                          src="images/img_group_161X77.png"
                          className="absolute h-[161px] inset-[0] justify-center m-auto object-cover rounded"
                          alt="Group Four"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start mt-[37px] w-full">
                    <Text className="text-bluegray_800" size="md">
                      Type your email
                    </Text>
                    <Input
                      wrapClassName="bg-white_A700 border border-indigo_51 border-solid pb-4 pl-5 pr-[35px] pt-[21px] rounded w-full"
                      className="font-medium p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                      type="email"
                      name="email One"
                      placeholder="Ackermanlhn@gmail.com"
                    ></Input>
                  </div>
                  <Text
                    className="!font-normal leading-[22.00px] md:ml-[0] ml-[45px] mt-8 text-bluegray_400 text-center w-[70%] sm:w-full"
                    size="md"
                  >
                    Please make sure that all your information precisely
                  </Text>
                  <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[306px] mt-[60px] py-[15px] rounded-[24px] text-center text-sm text-white_A700">
                    Save change
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

export default SettingsPage;
