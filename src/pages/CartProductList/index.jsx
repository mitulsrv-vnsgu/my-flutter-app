import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  ReactTable,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const CartProductListPage = () => {
  const table4Data = React.useRef([
    {
      rowprice: "Color: Grey, S",
      rowquantity: "$120.0",
      rowtotal: "images/img_vector.svg",
      "": "$120.0",
    },
    {
      rowprice: "Color: Grey, S",
      rowquantity: "$120.0",
      rowtotal: "images/img_vector.svg",
      "": "$120.0",
    },
    {
      rowprice: "Color: Grey, S",
      rowquantity: "$120.0",
      rowtotal: "images/img_vector.svg",
      "": "$120.0",
    },
    {
      rowprice: "Color: Grey, S",
      rowquantity: "$120.0",
      rowtotal: "images/img_vector.svg",
      "": "$120.0",
    },
    {
      rowprice: "Color: Grey, S",
      rowquantity: "$120.0",
      rowtotal: "images/img_vector.svg",
      "": "$120.0",
    },
    {
      rowprice: "Color: Grey, S",
      rowquantity: "$120.0",
      rowtotal: "images/img_vector.svg",
      "": "$120.0",
    },
  ]);
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("rowproduct", {
        cell: (info) => (
          <CheckBox
            className="sm:mt-0 mt-[34px]"
            inputClassName="mr-[5px]"
            name="vector One"
            id="vector One"
          ></CheckBox>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[132px] pl-[3px] py-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Product
            </Text>
          </div>
        ),
      }),
      table4ColumnHelper.accessor("rowprice", {
        cell: (info) => (
          <div className="flex flex-row gap-6 items-start justify-center sm:ml-[0] ml-[33px]">
            <Img
              src="images/img_rectangle_118X110.png"
              className="h-[86px] md:h-auto object-cover w-[35%]"
              alt="Rectangle"
            />
            <div className="flex flex-col gap-[19px] items-start justify-start pr-[5px] pt-[5px]">
              <Text className="text-bluegray_900" as="h6" size="xl">
                Polo Shirt
              </Text>
              <Text className="!font-normal text-bluegray_400" size="md">
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[39px] py-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Price
            </Text>
          </div>
        ),
      }),
      table4ColumnHelper.accessor("rowquantity", {
        cell: (info) => (
          <Text
            className="!font-semibold sm:mt-0 mt-[3px] text-bluegray_800"
            size="md"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-start min-w-[65px]">
            <Text className="!font-normal mt-[5px] text-bluegray_400" size="lg">
              Quantity
            </Text>
          </div>
        ),
      }),
      table4ColumnHelper.accessor("rowtotal", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center sm:ml-[0] ml-[66px]">
            <div className="border border-indigo_51 border-solid h-8 w-8"></div>
            <Text className="ml-5 text-bluegray_900" size="md">
              1
            </Text>
            <div className="border border-indigo_51 border-solid h-8 md:h-[13px] ml-[21px] p-[9px] relative w-8">
              <Img
                src={info?.getValue()}
                className="absolute h-[13px] inset-[0] justify-center m-auto w-[13px]"
                alt="Vector Two"
              />
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[90px] pr-[3px] py-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Total
            </Text>
          </div>
        ),
      }),
    ];
  }, []);

  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
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
        <div className="flex-1 h-[1071px] md:h-[1687px] md:px-5 relative w-full">
          <div className="absolute bg-gray_51 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-6 sm:px-5 w-full">
            <div className="flex flex-col gap-[35px] items-center justify-start mt-3.5 w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="font-poppins mb-0.5 text-bluegray_900"
                  size="2xl"
                >
                  Cart
                </Text>
                <Text
                  className="!font-normal font-inter mt-[3px] text-bluegray_400"
                  size="lg"
                >
                  <span className="text-bluegray_400 text-left text-base">
                    Ecommerce/
                  </span>
                  <span className="text-bluegray_800 text-left text-base">
                    {" "}
                    Cart
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
                <div className="bg-white_A700 flex md:flex-1 flex-col gap-10 items-start justify-end p-6 sm:px-5 rounded shadow-bs w-[67%] md:w-full">
                  <Text
                    className="ml-2 md:ml-[0] mt-[13px] text-bluegray_900"
                    as="h6"
                    size="xl"
                  >
                    Product List
                  </Text>
                  <div className="overflow-auto ml-2 md:ml-[0] w-[98%]">
                    <ReactTable
                      columns={table4Columns}
                      data={table4Data.current}
                      rowClass={"bg-white_A700"}
                      headerClass=""
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[33%] md:w-full">
                  <div className="bg-white_A700 flex flex-col gap-6 items-center justify-end p-8 sm:px-5 rounded shadow-bs w-full">
                    <div className="flex flex-col gap-3 items-start justify-start mt-[3px] w-full">
                      <Text className="text-bluegray_800" size="md">
                        Promotion
                      </Text>
                      <Input
                        wrapClassName="bg-white_A700 border border-indigo_51 border-solid pl-5 pr-3 py-[19px] rounded w-full"
                        className="font-normal p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left w-full"
                        name="Group2329"
                        placeholder="Enter code"
                      ></Input>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-center w-[70%] md:w-full">
                      <Img
                        src="images/img_tag.svg"
                        className="h-5 w-5"
                        alt="tag"
                      />
                      <Text className="mr-[27px] text-indigo_400" size="md">
                        Click to find Promotion
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-end p-8 sm:px-5 rounded shadow-bs w-full">
                    <div className="flex flex-col items-center justify-start mt-1 w-full">
                      <div className="flex flex-col gap-[25px] items-center justify-start w-full">
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
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="!font-normal text-bluegray_400"
                            size="lg"
                          >
                            Shipping fee
                          </Text>
                          <Text className="text-bluegray_800" size="lg">
                            $0
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-16 w-full">
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
                          $120.0
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
                        By clicking “Purchase” button, I agree with RiriBa Term
                        and Policy
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header className="absolute bg-white_A700 flex inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[96%]">
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
          <Line className="absolute bg-indigo_51 h-[1071px] inset-y-[0] left-[0] my-auto w-px" />
        </div>
      </div>
    </>
  );
};

export default CartProductListPage;
