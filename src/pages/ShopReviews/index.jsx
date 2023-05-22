import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ShopReviewsPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
          <div className="h-[1979px] md:px-5 relative w-[17%] md:w-full">
            <Line className="bg-indigo_51 h-[690px] ml-auto mr-[21px] mt-[60px] w-px" />
            <Sidebar className="!sticky !w-[241px] flex h-screen md:hidden inset-[0] justify-center m-auto overflow-auto top-[0]">
              <div className="bg-white_A700 flex flex-col gap-9 items-center justify-start p-[29px] sm:px-5 w-full">
                <Img
                  src="images/img_logo.svg"
                  className="h-7 mt-[7px]"
                  alt="Logo"
                />
                <div className="flex flex-col items-start justify-start mb-[1448px] w-[87%] md:w-full">
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
                    <Text
                      className="mb-0.5 mt-[7px] text-bluegray_400"
                      size="md"
                    >
                      Settings
                    </Text>
                  </div>
                </div>
              </div>
            </Sidebar>
          </div>
          <Line className="bg-indigo_51 h-[1979px] md:h-px md:w-full w-px" />
          <div className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-[84%] md:w-full">
            <header className="bg-white_A700 flex items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mx-auto my-2.5 w-[97%]">
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
            <div className="bg-gray_51 flex flex-col items-center justify-end p-[22px] sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mb-2.5 mt-[17px] w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
                  <Text className="font-poppins text-bluegray_900" size="2xl">
                    Shopping centre
                  </Text>
                  <Text
                    className="!font-normal font-inter text-bluegray_400"
                    size="lg"
                  >
                    <span className="text-bluegray_400 text-left text-base">
                      Shop Central/
                    </span>
                    <span className="text-bluegray_800 text-left text-base">
                      {" "}
                      Product detail
                    </span>
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start mt-8 p-8 sm:px-5 rounded shadow-bs w-full">
                  <div className="flex flex-col gap-12 items-center justify-start mb-12 w-full">
                    <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between w-full">
                      <div className="flex md:flex-1 md:flex-col flex-row gap-5 items-center justify-between w-[61%] md:w-full">
                        <List className="flex-col grid" orientation="vertical">
                          <Img
                            src="images/img_rectangle_126X116.png"
                            className="h-[126px] md:h-auto my-0 object-cover w-full"
                            alt="Rectangle"
                          />
                          <Img
                            src="images/img_rectangle_1.png"
                            className="h-[126px] md:h-auto my-0 object-cover w-full"
                            alt="Rectangle One"
                          />
                          <Img
                            src="images/img_rectangle_2.png"
                            className="h-[126px] md:h-auto my-0 object-cover w-full"
                            alt="Rectangle Two"
                          />
                          <Img
                            src="images/img_rectangle_3.png"
                            className="h-[126px] md:h-auto my-0 object-cover w-full"
                            alt="Rectangle Three"
                          />
                        </List>
                        <Img
                          src="images/img_rectangle_118X110.png"
                          className="h-[564px] md:h-auto object-cover"
                          alt="Rectangle Four"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[36%] md:w-full">
                        <div className="flex flex-col gap-[26px] items-start justify-start md:ml-[0] ml-[3px] w-[53%] md:w-full">
                          <Text
                            className="text-bluegray_900"
                            as="h3"
                            size="4xl"
                          >
                            Polo Shirt
                          </Text>
                          <div className="flex flex-row gap-[18px] items-center justify-between w-full">
                            <Text
                              className="!font-normal text-bluegray_400"
                              size="lg"
                            >
                              Code: #1230
                            </Text>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="h-3.5 md:h-auto object-cover"
                              alt="Frame"
                            />
                          </div>
                        </div>
                        <Text
                          className="mt-[35px] text-indigo_400"
                          as="h4"
                          size="3xl"
                        >
                          $120.0
                        </Text>
                        <div className="flex flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[3px] mt-8 pr-1 pt-1 w-[28%] md:w-full">
                          <Text className="text-bluegray_800" size="lg">
                            Choose color
                          </Text>
                          <Img
                            src="images/img_frame_24X52.svg"
                            className="h-6"
                            alt="Frame One"
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[3px] mt-8 pr-[5px] pt-[5px] w-[35%] md:w-full">
                          <Text className="text-bluegray_800" size="lg">
                            Choose quantity
                          </Text>
                          <div className="flex flex-row items-center justify-start w-[87%] md:w-full">
                            <div className="border border-indigo_51 border-solid flex flex-col h-8 items-center justify-start p-[9px] w-8">
                              <div className="bg-bluegray_900 h-px my-[5px] rounded-[1px] w-[93%]"></div>
                            </div>
                            <Text className="ml-5 text-bluegray_900" size="md">
                              1
                            </Text>
                            <Img
                              src="images/img_pagedisabled.svg"
                              className="h-8 ml-[21px] w-8"
                              alt="pagedisabled"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[3px] mt-8 w-[39%] md:w-full">
                          <Text
                            className="mt-[3px] text-bluegray_800"
                            size="lg"
                          >
                            Choose size
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start w-3/4 md:w-full">
                            <Button className="border border-indigo_51 border-solid cursor-pointer font-medium h-8 py-2 text-bluegray_800 text-center text-sm w-8">
                              S
                            </Button>
                            <Button className="border border-indigo_51 border-solid cursor-pointer font-medium h-8 py-[9px] text-bluegray_800 text-center text-sm w-8">
                              M
                            </Button>
                            <Button className="border border-indigo_51 border-solid cursor-pointer font-medium h-8 py-[9px] text-bluegray_800 text-center text-sm w-8">
                              L
                            </Button>
                          </div>
                          <Text
                            className="!font-normal ml-0.5 md:ml-[0] text-indigo_400"
                            size="md"
                          >
                            How to find your size?
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-4 items-center justify-between md:ml-[0] ml-[3px] mt-8 w-full">
                          <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[186px] py-[17px] rounded-[24px] text-center text-sm text-white_A700">
                            Purchase now
                          </Button>
                          <Button className="bg-deep_orange_50 cursor-pointer font-bold min-w-[185px] py-[17px] rounded-[24px] text-center text-deep_orange_300 text-sm">
                            Add to cart
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-[27px] items-start justify-start md:mt-0 mt-1 w-[11%] md:w-full">
                        <Text
                          className="!font-normal text-bluegray_400"
                          size="lg"
                        >
                          Product Detail
                        </Text>
                        <div className="flex flex-row gap-3 items-center justify-start pr-0.5 py-0.5 w-full">
                          <div className="bg-indigo_400 h-0.5 my-[9px] w-[36%]"></div>
                          <Text className="text-indigo_400" size="lg">
                            Reviews
                          </Text>
                        </div>
                      </div>
                      <List
                        className="md:flex-1 flex-col md:gap-5 grid w-[66%] md:w-full"
                        orientation="vertical"
                      >
                        <div className="border border-indigo_51 border-solid flex flex-col items-center justify-start my-0 p-8 sm:px-5 rounded w-full">
                          <div className="flex flex-col gap-10 items-end justify-start w-full">
                            <div className="flex md:flex-col flex-row md:gap-[52px] items-start justify-between w-full">
                              <div className="flex md:flex-1 sm:flex-col flex-row gap-5 items-start justify-between w-[78%] md:w-full">
                                <Img
                                  src="images/img_tintin22.png"
                                  className="h-12 md:h-auto rounded-[50%] w-12"
                                  alt="TinTinTwentyTwo"
                                />
                                <div className="flex flex-col gap-[15px] items-start justify-end pr-[5px] pt-[5px]">
                                  <Text
                                    className="text-bluegray_800"
                                    as="h6"
                                    size="xl"
                                  >
                                    Jimo
                                  </Text>
                                  <Text
                                    className="!font-normal text-bluegray_800"
                                    size="lg"
                                  >
                                    <>
                                      Nice T-Shirt, I have a soft spot for
                                      buying this stuff &lt;3 &lt;3
                                    </>
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="!font-normal md:mt-0 mt-[5px] text-bluegray_400"
                                size="lg"
                              >
                                20 mins ago
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[30px] items-center justify-end w-[35%] md:w-full">
                              <div className="flex flex-row gap-2 items-center justify-start w-3/5">
                                <Img
                                  src="images/img_messagecircle.svg"
                                  className="h-6 w-6"
                                  alt="messagecircle"
                                />
                                <Text
                                  className="!font-normal text-bluegray_800"
                                  size="lg"
                                >
                                  10 comments
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-between w-[28%]">
                                <Img
                                  src="images/img_heart.svg"
                                  className="h-6 w-6"
                                  alt="heart"
                                />
                                <Text
                                  className="!font-normal text-bluegray_800"
                                  size="lg"
                                >
                                  200
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-indigo_51 border-solid flex flex-col items-center justify-start my-0 p-8 sm:px-5 rounded w-full">
                          <div className="flex flex-col gap-4 items-end justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                              <div className="flex sm:flex-1 sm:flex-col flex-row gap-5 items-start justify-between w-[74%] sm:w-full">
                                <Img
                                  src="images/img_indiahigh.png"
                                  className="h-12 md:h-auto rounded-[50%] w-12"
                                  alt="Indiahigh"
                                />
                                <div className="flex flex-col items-start justify-start sm:mt-0 mt-1.5">
                                  <Text
                                    className="text-bluegray_800"
                                    as="h6"
                                    size="xl"
                                  >
                                    Ackerman_lhn
                                  </Text>
                                  <Text
                                    className="!font-normal leading-[24.00px] mt-1 text-bluegray_800 w-full"
                                    size="lg"
                                  >
                                    Oh my god, i am really addicted to this
                                    brand a lot. I define myself as a big fan
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="!font-normal sm:mt-0 mt-[5px] text-bluegray_400"
                                size="lg"
                              >
                                20 mins ago
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[30px] items-center justify-end w-[35%] md:w-full">
                              <div className="flex flex-row gap-2 items-center justify-start w-3/5">
                                <Img
                                  src="images/img_messagecircle.svg"
                                  className="h-6 w-6"
                                  alt="messagecircle One"
                                />
                                <Text
                                  className="!font-normal text-bluegray_800"
                                  size="lg"
                                >
                                  10 comments
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-between w-[28%]">
                                <Img
                                  src="images/img_heart.svg"
                                  className="h-6 w-6"
                                  alt="heart One"
                                />
                                <Text
                                  className="!font-normal text-bluegray_800"
                                  size="lg"
                                >
                                  200
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-poppins md:gap-10 items-start justify-between mt-9 w-full">
                  <Text className="mt-1 text-bluegray_900" size="2xl">
                    Related product
                  </Text>
                  <div className="flex flex-row font-inter gap-4 items-center justify-between mb-1 w-[8%]">
                    <Text className="text-bluegray_400" size="lg">
                      See all
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_400_24X24.svg"
                      className="h-6 w-6"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row font-inter gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-8 w-full"
                  orientation="horizontal"
                >
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
                          <div className="text-left text-red_600 text-xs">
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
                          <div className="text-indigo_400 text-left text-xs">
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
                            alt="Frame Two"
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
                          <div className="text-left text-red_600 text-xs">
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
                          <div className="text-indigo_400 text-left text-xs">
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
                            alt="Frame Three"
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
                          <div className="text-left text-red_600 text-xs">
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
                          <div className="text-indigo_400 text-left text-xs">
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
                            alt="Frame Four"
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
                              alt="ButtonPrimary One Two"
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
                        alt="3427408800611 Three"
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
                          <div className="text-left text-red_600 text-xs">
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
                          <div className="text-indigo_400 text-left text-xs">
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
                            alt="Frame Five"
                          />
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Button className="bg-deep_orange_300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                            <Img
                              src="images/img_plus.svg"
                              className="h-5"
                              alt="ButtonPrimary Three"
                            />
                          </Button>
                          <Button className="bg-gray_51 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                            <Img
                              src="images/img_buttonprimary_10.svg"
                              className="h-5"
                              alt="ButtonPrimary One Three"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopReviewsPage;
