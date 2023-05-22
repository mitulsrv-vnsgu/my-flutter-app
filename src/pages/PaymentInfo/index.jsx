import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const PaymentInfoPage = () => {
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
              <div className="flex flex-col items-start justify-start mb-[459px] w-[87%] md:w-full">
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[3px] w-[70%] md:w-full">
                  <Img
                    src="images/img_icon_3.svg"
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
          <Line className="bg-indigo_51 h-[750px] md:h-px mb-60 md:w-full w-px" />
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
                  wrapClassName="bg-gray_51 flex sm:hidden md:ml-[0] ml-[227px] pr-[35px] py-[13px] rounded w-[38%] md:w-full"
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
              <div className="flex flex-col gap-[35px] items-center justify-start mb-2 mt-3.5 w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                  <Text
                    className="font-poppins mb-[3px] text-bluegray_900"
                    size="2xl"
                  >
                    Checkout
                  </Text>
                  <Text
                    className="!font-normal font-inter sm:mt-0 mt-1 text-bluegray_400"
                    size="lg"
                  >
                    <span className="text-bluegray_400 text-left text-base">
                      Shop Central/
                    </span>
                    <span className="text-bluegray_800 text-left text-base">
                      {" "}
                    </span>
                    <span className="text-bluegray_400 text-left text-base">
                      Product detail/
                    </span>
                    <span className="text-bluegray_800 text-left text-base">
                      {" "}
                      Checkout
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                  <div className="sm:h-[797px] h-[803px] md:h-[903px] relative w-[67%] md:w-full">
                    <div className="absolute bottom-[0] flex flex-col gap-[11px] items-start justify-start left-[7%] pr-1 pt-1">
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
                    <div className="absolute bg-white_A700 flex flex-col gap-8 h-max inset-[0] items-start justify-center m-auto p-[31px] sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-col gap-[11px] items-start justify-end pr-1 py-1">
                        <Text
                          className="mt-0.5 text-bluegray_900"
                          as="h6"
                          size="xl"
                        >
                          Payment information
                        </Text>
                        <Text
                          className="!font-normal text-bluegray_900"
                          size="md"
                        >
                          Fill form below
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[277px] w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-[21%] md:w-full">
                          <CheckBox
                            className="font-medium text-bluegray_800 text-left text-sm"
                            inputClassName="mr-[5px]"
                            name="Remember"
                            id="Remember"
                            label="Cash on delivery"
                          ></CheckBox>
                          <CheckBox
                            className="font-medium text-bluegray_800 text-left text-sm"
                            inputClassName="h-[18px] mr-[5px] outline outline-[0.7px] outline-bluegray_400_87 w-[18px]"
                            name="Remember One"
                            id="Remember One"
                            label="Credit card"
                          ></CheckBox>
                          <CheckBox
                            className="font-medium text-bluegray_800 text-left text-sm"
                            inputClassName="mr-[5px]"
                            name="Remember Two"
                            id="Remember Two"
                            label="RiriBa wallet"
                          ></CheckBox>
                        </div>
                        <Line className="bg-indigo_51 h-px mt-8 w-full" />
                        <div className="flex flex-col gap-[27px] items-center justify-start mt-[34px] w-full">
                          <div className="flex flex-col gap-3 items-start justify-start w-full">
                            <Text className="text-bluegray_800" size="md">
                              Card number
                            </Text>
                            <div className="bg-white_A700 border border-indigo_51 border-solid flex flex-col items-start justify-end p-4 rounded w-full">
                              <Input
                                wrapClassName="flex ml-1 md:ml-[0] mt-0.5 pt-[3px] w-[33%]"
                                className="p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left w-full"
                                type="number"
                                name="Frame"
                                placeholder="Enter your card number"
                                prefix={
                                  <Img
                                    src="images/img_icon_18.svg"
                                    className="mt-auto mb-0.5 mr-4"
                                    alt="Icon "
                                  />
                                }
                              ></Input>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[49%] md:w-full">
                              <Text className="text-bluegray_800" size="md">
                                Card holder
                              </Text>
                              <div className="bg-white_A700 border border-indigo_51 border-solid flex flex-col items-start justify-start p-4 rounded w-full">
                                <Input
                                  wrapClassName="flex ml-1 md:ml-[0] pr-[3px] pt-[5px] w-[54%]"
                                  className="p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left w-full"
                                  type="text"
                                  name="Frame One"
                                  placeholder="Enter your name"
                                  prefix={
                                    <Img
                                      src="images/img_icon_19.svg"
                                      className="mr-4 my-0.5"
                                      alt="Icon "
                                    />
                                  }
                                ></Input>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[49%] md:w-full">
                              <Text className="text-bluegray_800" size="md">
                                CVV
                              </Text>
                              <Input
                                wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex pb-[22px] pr-[35px] pt-[17px] rounded w-full"
                                className="p-0 placeholder:text-bluegray_400 sm:pr-5 text-base text-bluegray_400 text-left w-full"
                                name="Frame Two"
                                placeholder="***"
                                prefix={
                                  <Img
                                    src="images/img_icon_20.svg"
                                    className="ml-5 mr-4 my-[18px]"
                                    alt="Icon "
                                  />
                                }
                              ></Input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[33%] md:w-full">
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row gap-6 items-center justify-between w-full">
                          <Img
                            src="images/img_rectangle_118X110.png"
                            className="h-[118px] md:h-auto object-cover"
                            alt="Rectangle"
                          />
                          <div className="flex flex-col gap-[41px] items-start justify-start">
                            <div className="flex flex-col gap-[18px] items-start justify-start">
                              <Text
                                className="mt-1 text-bluegray_900"
                                as="h6"
                                size="xl"
                              >
                                Polo Shirt
                              </Text>
                              <Text
                                className="!font-normal text-bluegray_400"
                                size="md"
                              >
                                Color: Grey, S
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="!font-normal text-bluegray_400"
                                size="md"
                              >
                                Price
                              </Text>
                              <Text
                                className="!font-semibold text-bluegray_800"
                                size="md"
                              >
                                $120.0
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-indigo_51 h-px mt-8 w-full" />
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid mt-[31px] pl-5 pr-3 py-5 rounded-lg w-full"
                          className="p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left w-full"
                          name="Group One"
                          placeholder="Enter reffered code"
                        ></Input>
                        <Line className="bg-indigo_51 h-px mt-8 w-full" />
                        <div className="flex flex-col gap-5 items-center justify-start mt-[35px] w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="!font-normal text-bluegray_400"
                              size="lg"
                            >
                              Price
                            </Text>
                            <Text className="text-bluegray_800" size="lg">
                              $120.0
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between pl-[3px] pt-[3px] w-full">
                            <Text
                              className="!font-normal mt-0.5 text-bluegray_400"
                              size="lg"
                            >
                              Shipping fee
                            </Text>
                            <Text className="text-bluegray_800" size="lg">
                              $10.0
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-indigo_51 h-px mt-8 w-full" />
                        <div className="flex flex-row items-start justify-between mt-[31px] w-full">
                          <Text
                            className="!font-normal mt-[3px] text-bluegray_400"
                            size="lg"
                          >
                            Total
                          </Text>
                          <Text
                            className="mt-1 text-bluegray_800"
                            as="h6"
                            size="xl"
                          >
                            $130.0
                          </Text>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-start mt-8 w-full">
                          <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[306px] py-[17px] rounded-[24px] text-center text-sm text-white_A700">
                            Purchase now
                          </Button>
                          <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[306px] py-[17px] rounded-[24px] text-bluegray_800 text-center text-sm">
                            Scan QR code
                          </Button>
                        </div>
                        <Text
                          className="!font-normal leading-[22.00px] mt-8 text-bluegray_400 text-center w-[98%] sm:w-full"
                          size="md"
                        >
                          By clicking “Purchase” button, I agree with RiriBa
                          Term and Policy
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-end justify-center w-[57%] md:w-full">
                      <Img
                        src="images/img_arrowleft.svg"
                        className="h-6 w-6"
                        alt="arrowleft"
                      />
                      <Text className="mt-[5px] text-indigo_400" size="lg">
                        Back to shopping cart
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

export default PaymentInfoPage;
