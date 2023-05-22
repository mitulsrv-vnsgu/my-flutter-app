import React from "react";

import { Sidebar } from "react-pro-sidebar";

import {
  Button,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
  TextArea,
} from "components";

import { CloseSVG } from "../../assets/images";

const countryOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShippingInfoPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-60 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-white_A700 flex flex-col gap-9 items-center justify-start p-7 sm:px-5 w-full">
              <Img src="images/img_logo.svg" className="h-7 mt-2" alt="Logo" />
              <div className="flex flex-col items-start justify-start mb-[460px] w-[86%] md:w-full">
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
          <Line className="bg-indigo_51 h-[990px] md:h-px md:w-full w-px" />
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
              <div className="flex flex-col gap-[35px] items-center justify-start mb-[9px] mt-3.5 w-full">
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
                  <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-[67%] md:w-full">
                    <div className="flex flex-col items-start justify-start mb-1 w-full">
                      <div className="flex flex-col gap-3 items-start justify-end pr-1 py-1">
                        <Text
                          className="mt-0.5 text-bluegray_900"
                          as="h6"
                          size="xl"
                        >
                          Shipping information
                        </Text>
                        <Text
                          className="!font-normal text-bluegray_900"
                          size="md"
                        >
                          Fill form below
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-start justify-start mt-9 w-full">
                        <Text className="text-bluegray_800" size="md">
                          Name
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid pb-4 pl-5 pr-3 pt-[21px] rounded w-full"
                          className="p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left w-full"
                          type="text"
                          name="Group2340"
                          placeholder="Enter your name"
                        ></Input>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between mt-[27px] w-full">
                        <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[49%] md:w-full">
                          <Text className="text-bluegray_800" size="md">
                            Email address
                          </Text>
                          <Input
                            wrapClassName="bg-white_A700 border border-indigo_51 border-solid pb-4 pl-5 pr-[35px] pt-[21px] rounded w-full"
                            className="p-0 placeholder:text-bluegray_400 sm:pr-5 text-base text-bluegray_400 text-left w-full"
                            type="email"
                            name="group One"
                            placeholder="Enter your email"
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[49%] md:w-full">
                          <Text className="text-bluegray_800" size="md">
                            Phone number
                          </Text>
                          <Input
                            wrapClassName="bg-white_A700 border border-indigo_51 border-solid pb-4 pl-5 pr-[35px] pt-[21px] rounded w-full"
                            className="p-0 placeholder:text-bluegray_400 sm:pr-5 text-base text-bluegray_400 text-left w-full"
                            type="number"
                            name="group Two"
                            placeholder="Enter your phone number"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[13px] items-start justify-start mt-7 w-full">
                        <Text className="text-bluegray_800" size="md">
                          Your address
                        </Text>
                        <TextArea
                          className="bg-white_A700 border border-indigo_51 border-solid pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-5 rounded text-base placeholder:text-bluegray_400 text-bluegray_400 text-left w-full"
                          name="group Three"
                          placeholder="Enter full address"
                        ></TextArea>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start mt-[29px] w-full">
                        <Text className="text-bluegray_800" size="md">
                          Country
                        </Text>
                        <SelectBox
                          className="bg-white_A700 border border-indigo_51 border-solid font-semibold pl-5 py-[19px] rounded text-base text-bluegray_800 text-left w-full"
                          placeholderClassName="text-bluegray_800"
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-1.5 mr-6 w-[11px]"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="country One"
                          options={countryOneOptionsList}
                          isSearchable={false}
                          placeholder="Vietnam"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start mt-[27px] w-full">
                        <Text className="text-bluegray_800" size="md">
                          Note
                        </Text>
                        <TextArea
                          className="bg-white_A700 border border-indigo_51 border-solid pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-[21px] rounded text-base placeholder:text-bluegray_400 text-bluegray_400 text-left w-full"
                          name="group Four"
                          placeholder="Write somethhing for us..."
                        ></TextArea>
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
                            <div className="flex flex-col gap-[19px] items-start justify-start">
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
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid mt-[31px] pl-5 pr-[35px] py-5 rounded-lg w-full"
                          className="p-0 placeholder:text-bluegray_400 sm:pr-5 text-base text-bluegray_400 text-left w-full"
                          name="group Five"
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

export default ShippingInfoPage;
