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

const dataProjectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddProductPage = () => {
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
              <div className="flex flex-col items-start justify-start mb-[540px] w-[87%] md:w-full">
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
                    src="images/img_icon_21.svg"
                    className="h-5 w-5"
                    alt="Icon Six"
                  />
                  <Text className="text-bluegray_800" size="md">
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
          <Line className="bg-indigo_51 h-[1071px] md:h-px md:w-full w-px" />
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
            <div className="bg-gray_51 flex flex-col items-center justify-start p-[23px] sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start my-[13px] w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="font-poppins mb-[3px] text-bluegray_900"
                    size="2xl"
                  >
                    Add Product
                  </Text>
                  <Text
                    className="!font-normal font-inter mt-1 text-bluegray_400"
                    size="lg"
                  >
                    <span className="text-bluegray_400 text-left text-base">
                      Ecommerce/
                    </span>
                    <span className="text-bluegray_800 text-left text-base">
                      {" "}
                      Add Product
                    </span>
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-end mt-[35px] p-8 sm:px-5 rounded shadow-bs w-full">
                  <div className="flex flex-col items-start justify-start mt-[5px] w-full">
                    <Text className="text-bluegray_900" as="h6" size="xl">
                      Basic information
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between mt-10 w-full">
                      <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[57%] md:w-full">
                        <Text className="text-bluegray_800" size="md">
                          Product name
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid pb-4 pl-5 pr-3 pt-[21px] rounded w-full"
                          className="font-normal p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left w-full"
                          type="text"
                          name="Group2322"
                          placeholder="Enter product’s name"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[39%] md:w-full">
                        <Text className="text-bluegray_800" size="md">
                          Select category
                        </Text>
                        <SelectBox
                          className="bg-white_A700 border border-indigo_51 border-solid font-semibold pb-4 pl-5 pt-[21px] rounded text-base text-bluegray_800 text-left w-full"
                          placeholderClassName="text-bluegray_800"
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-1.5 mr-6 w-[11px]"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group18058"
                          options={dataProjectOptionsList}
                          isSearchable={false}
                          placeholder="Data project"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between mt-7 w-full">
                      <div className="flex md:flex-1 flex-col gap-[27px] items-center justify-start w-[57%] md:w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Text className="text-bluegray_800" size="md">
                            Branch
                          </Text>
                          <Input
                            wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-3 py-[19px] rounded w-full"
                            className="font-normal p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left w-full"
                            name="Group2323"
                            placeholder="Enter brach"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start w-full">
                          <Text className="text-bluegray_800" size="md">
                            Price
                          </Text>
                          <Input
                            wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-3 py-[19px] rounded w-full"
                            className="font-normal p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left w-full"
                            name="Group2324"
                            placeholder="Enter brach"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-2 items-start justify-start w-[39%] md:w-full">
                        <Text className="text-bluegray_800" size="md">
                          Product description
                        </Text>
                        <TextArea
                          className="bg-white_A700 border border-indigo_51 border-solid font-normal pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-[21px] rounded text-base placeholder:text-bluegray_400 text-bluegray_400 text-left w-full"
                          name="Group2325"
                          placeholder="Write something..."
                        ></TextArea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-5 items-center justify-between mt-5 w-full">
                  <div className="bg-white_A700 flex md:flex-1 flex-col gap-8 items-start justify-end p-8 sm:px-5 rounded shadow-bs w-1/2 md:w-full">
                    <Text
                      className="mt-[7px] text-bluegray_900"
                      as="h6"
                      size="xl"
                    >
                      Product image
                    </Text>
                    <div className="border-2 border-dashed border-indigo_51 flex flex-col items-center justify-end p-[87px] md:px-10 sm:px-5 rounded w-full">
                      <div className="flex flex-col gap-10 items-center justify-start mt-2.5 w-[67%] md:w-full">
                        <Img
                          src="images/img_image_bluegray_900.svg"
                          className="h-7 w-7"
                          alt="image"
                        />
                        <div className="flex flex-col gap-[13px] items-center justify-end pt-[5px] px-[5px] w-full">
                          <Text
                            className="!font-bold text-bluegray_800"
                            as="h6"
                            size="lg"
                          >
                            Upload image
                          </Text>
                          <Text
                            className="!font-normal text-bluegray_800"
                            size="md"
                          >
                            Drag or click to upload image
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col justify-end p-[26px] sm:px-5 rounded shadow-bs w-1/2 md:w-full">
                    <Text
                      className="ml-1.5 md:ml-[0] mr-[435px] mt-[11px] text-bluegray_900"
                      as="h6"
                      size="xl"
                    >
                      Add link
                    </Text>
                    <div className="flex flex-col gap-[29px] items-center justify-start mr-1.5 mt-10 w-[99%] md:w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <Text className="text-bluegray_800" size="md">
                          Product Link
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-3 py-[19px] rounded w-full"
                          className="font-normal p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left w-full"
                          name="Group2326"
                          placeholder="Enter link"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text className="text-bluegray_800" size="md">
                          Hashtag
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border border-indigo_51 border-solid pb-4 pl-5 pr-3 pt-[21px] rounded w-full"
                          className="font-normal p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left w-full"
                          name="Group2327"
                          placeholder="Enter tag"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-end mb-1.5 md:ml-[0] ml-[195px] mr-1.5 mt-[62px] w-[61%] md:w-full">
                      <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[148px] py-4 rounded-[24px] text-center text-sm text-white_A700">
                        Save
                      </Button>
                      <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[148px] py-4 rounded-[24px] text-bluegray_800 text-center text-sm">
                        Cancel
                      </Button>
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

export default AddProductPage;
