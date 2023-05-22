import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  ReactTable,
  SelectBox,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardThreePage = () => {
  const tableData = React.useRef([
    {
      rowno: "1",
      rowcustomer: "Ackerman",
      rowdate: "12.02.2022",
      rowamount: "$20.0",
      roworderno: "#21033",
      rowpaymenttype: "images/img_morehorizontal.svg",
    },
    {
      rowno: "2",
      rowcustomer: "Avori",
      rowdate: "12.02.2022",
      rowamount: "$32.0",
      roworderno: "#21034",
      rowpaymenttype: "images/img_morehorizontal.svg",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowno", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center p-[5px]">
            <Text className="mt-[34px] text-bluegray_800" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[95px] p-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              No.
            </Text>
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowcustomer", {
        cell: (info) => (
          <div className="flex flex-row gap-3 items-start justify-center pr-0.5 py-0.5">
            <Img
              src="images/img_robototoyfacefinal2.png"
              className="h-6 md:h-auto mt-[34px] rounded-[50%] w-6"
              alt="RobotoToyFaceFinalTwo"
            />
            <Text className="mr-[63px] mt-[38px] text-bluegray_800" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[178px]">
            <Text className="!font-normal my-[3px] text-bluegray_400" size="lg">
              Customer
            </Text>
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowdate", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-[5px] py-[5px]">
            <Text className="mt-[34px] text-bluegray_800" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[148px] pr-[3px] py-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Date
            </Text>
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowamount", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-0.5 py-0.5">
            <Text className="mt-[38px] text-bluegray_800" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[132px] pr-[3px] py-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Amount
            </Text>
          </div>
        ),
      }),
      tableColumnHelper.accessor("roworderno", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-[5px] py-[5px]">
            <Text className="mt-[34px] text-bluegray_800" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[133px] pr-[3px] py-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Order No.
            </Text>
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowpaymenttype", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-between pr-0.5 py-0.5">
            <Text className="mt-[38px] text-bluegray_800" size="lg">
              Visa Card
            </Text>
            <Img
              src={info?.getValue()}
              className="h-6 mr-[18px] mt-[34px] w-6"
              alt="morevertical"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-between min-w-[225px] pr-[5px] pt-[5px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Payment type
            </Text>
          </div>
        ),
      }),
    ];
  }, []);

  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[84px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-white_A700 flex flex-col gap-9 items-center justify-start p-[29px] sm:px-5 w-full">
              <Img
                src="images/img_group18018.svg"
                className="h-7 mt-[7px]"
                alt="Group18018"
              />
              <div className="flex flex-col gap-[34px] items-center justify-start mb-[930px] w-full">
                <Img
                  src="images/img_icon_3.svg"
                  className="h-5 w-5"
                  alt="Icon"
                />
                <Img
                  src="images/img_icon_4.svg"
                  className="h-5 w-5"
                  alt="Icon One"
                />
                <Img
                  src="images/img_icon_5.svg"
                  className="h-5 w-5"
                  alt="Icon Two"
                />
                <Img
                  src="images/img_icon_6.svg"
                  className="h-5 w-5"
                  alt="Icon Three"
                />
                <Img
                  src="images/img_icon_7.svg"
                  className="h-5 w-5"
                  alt="Icon Four"
                />
                <Img
                  src="images/img_icon_8.svg"
                  className="h-5 w-5"
                  alt="Icon Five"
                />
                <Img
                  src="images/img_icon_9.svg"
                  className="h-5 w-5"
                  alt="Icon Six"
                />
                <div className="bg-white_A700 flex flex-col h-[26px] items-center justify-start p-[3px] w-[26px]">
                  <div className="bg-bluegray_400 h-5 rounded-[50%] w-5"></div>
                </div>
              </div>
            </div>
          </Sidebar>
          <Line className="bg-indigo_51 h-[1463px] md:h-px md:w-full w-px" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
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
                  wrapClassName="bg-white_A700 border border-bluegray_200 border-solid flex sm:hidden md:ml-[0] ml-[305px] pr-[35px] py-[13px] rounded w-[33%] md:w-full"
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
                  className="h-6 sm:hidden md:ml-[0] ml-[211px] w-6"
                  alt="shoppingbag"
                />
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-6 sm:hidden items-end justify-start ml-6 md:ml-[0] w-6"
                  style={{ backgroundImage: "url('images/img_group2653.svg')" }}
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
            <div className="bg-gray_51 flex flex-col font-poppins items-center justify-start pl-3 py-3 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[74%] md:w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <Text className="text-bluegray_900" size="2xl">
                        Overview
                      </Text>
                      <div className="flex flex-row font-inter gap-3 items-center justify-between w-1/5">
                        <Button className="bg-white_A700 flex items-center justify-center p-[13px] rounded">
                          <Img
                            src="images/img_buttonprimary.svg"
                            className="h-5"
                            alt="ButtonPrimary"
                          />
                        </Button>
                        <SelectBox
                          className="bg-white_A700 font-medium pl-4 py-4 rounded text-bluegray_800 text-left text-sm w-[70%] sm:w-full"
                          placeholderClassName="text-bluegray_800"
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-5 mr-4 w-5"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="dropdown"
                          options={dropdownOptionsList}
                          isSearchable={false}
                          placeholder="Last week"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-inter gap-5 items-center justify-between mt-6 w-full">
                      <List
                        className="md:flex-1 flex-col gap-5 grid w-[21%] md:w-full"
                        orientation="vertical"
                      >
                        <div className="bg-white_A700 flex flex-col items-center justify-end my-0 p-9 sm:px-5 rounded shadow-bs w-full">
                          <div className="flex flex-col gap-8 items-center justify-start mt-[5px] w-[59%] md:w-full">
                            <Img
                              src="images/img_frame.svg"
                              className="h-[43px]"
                              alt="Frame"
                            />
                            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                              <Text
                                className="!font-normal text-bluegray_400"
                                size="md"
                              >
                                Total Tasks
                              </Text>
                              <Text
                                className="text-bluegray_800"
                                as="h6"
                                size="xl"
                              >
                                120
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-end my-0 p-9 sm:px-5 rounded shadow-bs w-full">
                          <div className="flex flex-col gap-[33px] items-center justify-start mt-[5px] w-[57%] md:w-full">
                            <Img
                              src="images/img_frame_43X73.svg"
                              className="h-[43px]"
                              alt="Frame One"
                            />
                            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                              <Text
                                className="!font-normal text-bluegray_400"
                                size="md"
                              >
                                New Tasks
                              </Text>
                              <Text
                                className="text-bluegray_800"
                                as="h6"
                                size="xl"
                              >
                                60
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-[44%] md:w-full">
                        <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                          <div className="flex flex-col gap-7 items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-bluegray_900"
                                as="h6"
                                size="xl"
                              >
                                Statistics
                              </Text>
                              <Img
                                src="images/img_morehorizontal.svg"
                                className="h-8 w-8"
                                alt="morehorizontal"
                              />
                            </div>
                            <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                              <Img
                                src="images/img_frame_amber_300.svg"
                                className="h-[139px]"
                                alt="Frame Two"
                              />
                              <div className="flex flex-row gap-[34px] items-start justify-between pb-0.5 px-0.5 w-full">
                                <Text className="text-bluegray_400" size="s">
                                  Mon
                                </Text>
                                <Text className="text-bluegray_400" size="s">
                                  Tue
                                </Text>
                                <Text className="text-bluegray_400" size="s">
                                  Wed
                                </Text>
                                <Text className="text-bluegray_400" size="s">
                                  Thu
                                </Text>
                                <Text className="text-bluegray_400" size="s">
                                  Fri
                                </Text>
                                <Text className="text-bluegray_400" size="s">
                                  Sat
                                </Text>
                                <Text className="text-bluegray_400" size="s">
                                  Sun
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray_104 flex flex-col items-center justify-start p-4 rounded w-full">
                            <div className="flex flex-row gap-5 items-center justify-between w-[96%] md:w-full">
                              <div className="flex flex-col items-start justify-start pb-1 pr-1">
                                <Text
                                  className="!font-semibold text-bluegray_900"
                                  as="h6"
                                  size="lg"
                                >
                                  Data project report
                                </Text>
                                <Text
                                  className="!font-normal mt-1 text-bluegray_900"
                                  size="md"
                                >
                                  • In process
                                </Text>
                              </div>
                              <div className="bg-indigo_52 flex flex-col h-16 items-center justify-start p-1 rounded-[50%] w-16">
                                <div className="bg-indigo_400 h-14 rounded-[50%] shadow-bs3 w-14"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-[32%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-bluegray_900"
                              as="h6"
                              size="xl"
                            >
                              Sales
                            </Text>
                            <Img
                              src="images/img_morehorizontal.svg"
                              className="h-8 w-8"
                              alt="morehorizontal One"
                            />
                          </div>
                          <div className="h-[190px] md:h-[222px] mt-8 relative w-[190px]">
                            <div className="!w-[190px] border-solid h-[190px] m-auto overflow-visible">
                              <CircularProgressbar
                                className="!w-[190px] border-solid h-[190px] m-auto overflow-visible"
                                value={28}
                                strokeWidth={1}
                                styles={{
                                  trail: { strokeWidth: 1, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(225deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <div className="absolute flex flex-col gap-2 h-max inset-[0] items-center justify-center m-auto">
                              <Text
                                className="!font-normal text-bluegray_800"
                                size="md"
                              >
                                Total
                              </Text>
                              <Text
                                className="text-bluegray_800"
                                as="h4"
                                size="3xl"
                              >
                                $2,000
                              </Text>
                            </div>
                          </div>
                          <List
                            className="flex-col gap-5 grid items-center mt-[37px] w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row gap-[11px] items-start justify-between w-full">
                              <Radio
                                value="CurrentWeek"
                                className="font-normal text-bluegray_400 text-left text-sm"
                                inputClassName="bg-red_600 h-2 mr-[5px] w-2"
                                checked={false}
                                name="profileViewsTwo"
                                label="Current Week"
                                id="CurrentWeek"
                              ></Radio>
                              <Text className="text-bluegray_800" size="md">
                                $1,200
                              </Text>
                              <div className="bg-green_700_63 flex flex-row items-start justify-center pr-0.5 py-0.5 rounded">
                                <Img
                                  src="images/img_line.svg"
                                  className="h-4 w-4"
                                  alt="line One"
                                />
                                <Text
                                  className="!font-semibold mt-0.5 text-green_700"
                                  size="md"
                                >
                                  0.2%
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-row gap-[19px] items-start justify-between w-full">
                              <Radio
                                value="LastWeek"
                                className="font-normal sm:pr-5 text-bluegray_400 text-left text-sm"
                                inputClassName="bg-green_700 h-2 mr-[5px] w-2"
                                checked={false}
                                name="profileViewsThree"
                                label="Last Week"
                                id="LastWeek"
                              ></Radio>
                              <Text className="text-bluegray_800" size="md">
                                $800
                              </Text>
                              <div className="bg-green_700_63 flex flex-row items-start justify-center pr-0.5 py-0.5 rounded">
                                <Img
                                  src="images/img_line.svg"
                                  className="h-4 w-4"
                                  alt="line Two"
                                />
                                <Text
                                  className="!font-semibold mt-0.5 text-green_700"
                                  size="md"
                                >
                                  0.2%
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-inter gap-5 items-center justify-between mt-5 w-full">
                      <div className="flex h-[465px] sm:h-[750px] justify-end relative w-[55%] md:w-full">
                        <div className="flex flex-col gap-[11px] h-full items-start justify-start mb-[101px] ml-auto mr-[158px] mt-auto pr-1 pt-1">
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
                        <div className="absolute bg-white_A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 rounded shadow-bs w-full">
                          <div className="flex flex-col items-center justify-start mb-[9px] mt-0.5 w-[99%] md:w-full">
                            <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                              <Text
                                className="text-bluegray_900"
                                as="h6"
                                size="xl"
                              >
                                Statistics
                              </Text>
                              <Button
                                className="bg-white_A700 border border-bluegray_200 border-solid cursor-pointer flex items-center justify-center min-w-[172px] pr-4 py-[11px] rounded shadow-bs"
                                leftIcon={
                                  <Img
                                    src="images/img_calendar.svg"
                                    className="ml-4 mr-2.5 my-2.5"
                                    alt="calendar"
                                  />
                                }
                              >
                                <div className="font-semibold text-bluegray_800 text-left text-sm">
                                  13 Aug - 20 Aug
                                </div>
                              </Button>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[26px] w-full">
                              <div className="flex flex-col gap-5 items-center justify-start w-full">
                                <div className="flex sm:flex-col flex-row sm:gap-[42px] items-center justify-between w-full">
                                  <div className="flex flex-col gap-[27px] items-start justify-start">
                                    <Text
                                      className="text-bluegray_400"
                                      size="s"
                                    >
                                      Su
                                    </Text>
                                    <Text
                                      className="text-bluegray_400"
                                      size="s"
                                    >
                                      Sa
                                    </Text>
                                    <Text
                                      className="text-bluegray_400"
                                      size="s"
                                    >
                                      Fr
                                    </Text>
                                    <Text
                                      className="text-bluegray_400"
                                      size="s"
                                    >
                                      Th
                                    </Text>
                                    <Text
                                      className="text-bluegray_400"
                                      size="s"
                                    >
                                      We
                                    </Text>
                                    <Text
                                      className="text-bluegray_400"
                                      size="s"
                                    >
                                      Tu
                                    </Text>
                                    <Text
                                      className="text-bluegray_400"
                                      size="s"
                                    >
                                      Mo
                                    </Text>
                                  </div>
                                  <div className="font-poppins h-64 md:h-[246px] relative w-[88%] sm:w-full">
                                    <div
                                      className="absolute bg-cover bg-no-repeat h-64 md:h-[246px] inset-y-[0] left-[0] my-auto p-[3px] w-[90%] sm:w-full"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group2652.svg')",
                                      }}
                                    >
                                      <Img
                                        src="images/img_frame_246X252.svg"
                                        className="absolute h-[246px] inset-y-[0] left-[9%] my-auto"
                                        alt="Frame Three"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-12 items-center justify-end p-4 right-[0] shadow-bs2 top-[11%] w-[35%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group_white_A700_48X145.svg')",
                                      }}
                                    >
                                      <div className="flex flex-row gap-[21px] items-center justify-between mt-0.5 w-[98%] md:w-full">
                                        <div className="flex flex-row gap-2 items-start justify-start w-[41%]">
                                          <div className="bg-indigo_400 h-1.5 mb-[5px] mt-0.5 rounded-[50%] w-1.5"></div>
                                          <Text
                                            className="!font-semibold text-bluegray_900"
                                            size="s"
                                          >
                                            150.0
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-2 items-start justify-start w-2/5">
                                          <div className="bg-amber_300 h-1.5 mb-[5px] mt-0.5 rounded-[50%] w-1.5"></div>
                                          <Text
                                            className="!font-semibold text-bluegray_900"
                                            size="s"
                                          >
                                            120.0
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-between w-[85%] md:w-full">
                                  <Text className="text-bluegray_400" size="s">
                                    -300
                                  </Text>
                                  <Text className="text-bluegray_400" size="s">
                                    -200
                                  </Text>
                                  <Text className="text-bluegray_400" size="s">
                                    -100
                                  </Text>
                                  <Text className="text-bluegray_400" size="s">
                                    0
                                  </Text>
                                  <Text className="text-bluegray_400" size="s">
                                    100
                                  </Text>
                                  <Text className="text-bluegray_400" size="s">
                                    200
                                  </Text>
                                  <Text className="text-bluegray_400" size="s">
                                    300
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-6 items-start justify-center mt-8 w-[32%] md:w-full">
                              <div className="flex flex-row gap-2 items-start justify-start w-[38%]">
                                <div className="bg-amber_300 h-1.5 mb-0.5 mt-[5px] rounded-[50%] w-1.5"></div>
                                <Text
                                  className="!font-medium text-bluegray_400"
                                  size="s"
                                >
                                  Income
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-start w-[47%]">
                                <div className="bg-indigo_400 h-1.5 my-[5px] rounded-[50%] w-1.5"></div>
                                <Text
                                  className="!font-medium text-bluegray_400"
                                  size="s"
                                >
                                  Expenses
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-[44%] md:w-full">
                        <div className="flex flex-col gap-[29px] items-center justify-start mb-[5px] w-full">
                          <div className="flex flex-row items-end justify-between w-full">
                            <Text
                              className="my-[5px] text-bluegray_900"
                              as="h6"
                              size="xl"
                            >
                              Total projects
                            </Text>
                            <Img
                              src="images/img_morehorizontal.svg"
                              className="h-8 w-8"
                              alt="morehorizontal Two"
                            />
                          </div>
                          <List
                            className="flex-col gap-[22.91px] grid items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-full">
                              <Text
                                className="!font-semibold text-bluegray_900"
                                as="h6"
                                size="lg"
                              >
                                Mobile app (4/12)
                              </Text>
                              <div className="flex flex-row gap-[25px] items-end justify-between w-full">
                                <div className="h-2 mt-[9px] overflow-hidden relative">
                                  <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-indigo_400  rounded-[4px]"
                                    style={{ width: "27%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="!font-normal text-bluegray_900"
                                  size="lg"
                                >
                                  34%
                                </Text>
                              </div>
                            </div>
                            <Line className="self-center h-px bg-indigo_51 w-full" />
                            <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-full">
                              <Text
                                className="!font-semibold text-bluegray_900"
                                as="h6"
                                size="lg"
                              >
                                Landing page (2/4)
                              </Text>
                              <div className="flex flex-row gap-[26px] items-end justify-between w-full">
                                <div className="h-2 mt-[9px] overflow-hidden relative">
                                  <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-green_700  rounded-[4px]"
                                    style={{ width: "62%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="!font-normal text-bluegray_900"
                                  size="lg"
                                >
                                  50%
                                </Text>
                              </div>
                            </div>
                            <Line className="self-center h-px bg-indigo_51 w-full" />
                            <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-full">
                              <Text
                                className="!font-semibold text-bluegray_900"
                                as="h6"
                                size="lg"
                              >
                                Branding (2/2)
                              </Text>
                              <div className="flex flex-row gap-[7px] items-end justify-between w-full">
                                <div className="h-2 mt-[9px] overflow-hidden relative">
                                  <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-amber_300  rounded-[4px]"
                                    style={{ width: "96%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="!font-normal text-bluegray_900"
                                  size="lg"
                                >
                                  100%
                                </Text>
                              </div>
                            </div>
                            <Line className="self-center h-px bg-indigo_51 w-full" />
                            <div className="flex flex-1 flex-col gap-[7px] items-start justify-start w-full">
                              <Text
                                className="!font-semibold text-bluegray_900"
                                as="h6"
                                size="lg"
                              >
                                Branding (2/8)
                              </Text>
                              <div className="flex flex-row gap-[15px] items-end justify-between w-full">
                                <div className="h-2 mt-[9px] overflow-hidden relative">
                                  <div className="w-full h-full absolute bg-gray_51 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-red_600  rounded-[4px]"
                                    style={{ width: "17%" }}
                                  ></div>
                                </div>
                                <Text
                                  className="!font-normal text-bluegray_900"
                                  size="lg"
                                >
                                  25%
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mt-5 p-[26px] sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start mb-1.5 w-[99%] md:w-full">
                        <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                          <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                            <Text
                              className="text-bluegray_900"
                              as="h6"
                              size="xl"
                            >
                              Transactions history
                            </Text>
                            <Button
                              className="bg-white_A700 border border-bluegray_200 border-solid cursor-pointer flex items-center justify-center min-w-[172px] pr-4 py-[11px] rounded shadow-bs"
                              leftIcon={
                                <Img
                                  src="images/img_calendar.svg"
                                  className="ml-4 mr-2.5 my-2.5"
                                  alt="calendar"
                                />
                              }
                            >
                              <div className="font-semibold text-bluegray_800 text-left text-sm">
                                13 Aug - 20 Aug
                              </div>
                            </Button>
                          </div>
                          <div className="overflow-auto w-full">
                            <ReactTable
                              columns={tableColumns}
                              data={tableData.current}
                              rowClass={""}
                              headerClass=""
                            />
                          </div>
                        </div>
                        <div className="bg-gray_51 flex flex-col items-center justify-start p-5 w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <Text className="text-bluegray_800" size="lg">
                              3
                            </Text>
                            <div className="flex md:flex-1 flex-row gap-3 items-center justify-center ml-16 md:ml-[0] w-[13%] md:w-full">
                              <Img
                                src="images/img_vangoghbyamrit1.png"
                                className="h-6 md:h-auto rounded-[50%] w-6"
                                alt="VanGoghByAmritOne"
                              />
                              <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                                <Text className="text-bluegray_800" size="lg">
                                  Benjamin
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[65px] text-bluegray_800"
                              size="lg"
                            >
                              24.01.2022
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[62px] text-bluegray_800"
                              size="lg"
                            >
                              $16.0
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[90px] text-bluegray_800"
                              size="lg"
                            >
                              #21030
                            </Text>
                            <Text
                              className="md:ml-[0] ml-[74px] text-bluegray_800"
                              size="lg"
                            >
                              MasterCard
                            </Text>
                            <Img
                              src="images/img_morehorizontal.svg"
                              className="h-6 md:ml-[0] ml-[91px] w-6"
                              alt="morevertical Two"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col font-inter items-center justify-end p-8 sm:px-5 rounded shadow-bs w-[26%] md:w-full">
                    <div className="flex flex-col gap-[37px] items-center justify-start mt-[11px] w-full">
                      <div className="flex flex-col gap-[41px] items-center justify-start w-full">
                        <div className="flex flex-col gap-[23px] items-center justify-start w-[88%] md:w-full">
                          <div className="flex flex-row gap-[29px] items-start justify-between w-[99%] md:w-full">
                            <Button className="bg-gray_51 flex h-10 items-center justify-center p-[13px] rounded-[50%] w-10">
                              <Img
                                src="images/img_buttonprimary_40X40.svg"
                                className="h-3.5"
                                alt="ButtonPrimary One"
                              />
                            </Button>
                            <Text
                              className="!font-semibold mt-3.5 text-bluegray_800"
                              size="md"
                            >
                              <span className="text-bluegray_800 font-inter text-left text-sm">
                                Febuary{" "}
                              </span>
                              <span className="text-bluegray_400 font-inter text-left text-sm">
                                2022
                              </span>
                            </Text>
                            <Button className="bg-gray_51 flex h-10 items-center justify-center p-[13px] rounded-[50%] w-10">
                              <Img
                                src="images/img_buttonprimary_4.svg"
                                alt="ButtonPrimary Two"
                              />
                            </Button>
                          </div>
                          <div className="w-full"></div>
                        </div>
                        <div className="flex flex-col font-poppins items-center justify-start w-full">
                          <Line className="bg-indigo_51 h-px w-full" />
                          <div className="flex flex-row items-center justify-between mt-[31px] w-full">
                            <Text
                              className="!font-medium text-bluegray_900"
                              size="xl"
                            >
                              Recent activities
                            </Text>
                            <Img
                              src="images/img_morehorizontal.svg"
                              className="h-8 w-8"
                              alt="morehorizontal Three"
                            />
                          </div>
                          <div className="flex flex-col font-inter gap-6 items-start justify-start mt-[37px] w-full">
                            <Text className="text-bluegray_400" size="md">
                              Feb 24, 2022
                            </Text>
                            <List
                              className="flex-col grid items-center w-full"
                              orientation="vertical"
                            >
                              <div className="flex flex-1 flex-row gap-4 items-center justify-between pr-1 pt-1 w-full">
                                <Img
                                  src="images/img_robototoyfacefinal2.png"
                                  className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                  alt="RobotoToyFaceFinalTwo One"
                                />
                                <div className="flex flex-col gap-2 items-start justify-start mr-1.5">
                                  <Text
                                    className="!font-normal text-bluegray_900"
                                    size="md"
                                  >
                                    Ackerman
                                  </Text>
                                  <Text
                                    className="leading-[24.00px] text-bluegray_900 w-full"
                                    size="lg"
                                  >
                                    <span className="text-bluegray_900 font-inter text-left text-base font-medium">
                                      Changelog Revamp{" "}
                                    </span>
                                    <span className="text-red_600 font-inter text-left text-base font-medium">
                                      #ver 1.0
                                    </span>
                                    <span className="text-bluegray_900 font-inter text-left text-base font-medium">
                                      {" "}
                                      Homescreen{" "}
                                    </span>
                                  </Text>
                                  <Text
                                    className="!font-normal text-bluegray_400"
                                    size="md"
                                  >
                                    2min ago
                                  </Text>
                                </div>
                              </div>
                              <Line className="self-center h-px bg-indigo_51 w-full" />
                              <div className="flex flex-1 flex-col items-start justify-start pr-1 pt-1 w-full">
                                <div className="flex flex-row gap-4 items-center justify-start w-[98%] md:w-full">
                                  <Img
                                    src="images/img_punktoyface1.png"
                                    className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                    alt="PunkToyFaceOne"
                                  />
                                  <div className="flex flex-col gap-2 items-start justify-start">
                                    <Text
                                      className="!font-normal text-bluegray_800"
                                      size="md"
                                    >
                                      Blanker
                                    </Text>
                                    <Text
                                      className="leading-[24.00px] text-bluegray_900 w-full"
                                      size="lg"
                                    >
                                      Create user flow for Data Projects
                                    </Text>
                                    <Text
                                      className="!font-normal text-bluegray_400"
                                      size="md"
                                    >
                                      2min ago
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-px bg-indigo_51 w-full" />
                              <div className="flex md:flex-1 flex-col items-center justify-start w-[93%] md:w-full">
                                <div className="flex flex-row gap-4 items-center justify-between w-full">
                                  <Img
                                    src="images/img_vangoghbyamrit1.png"
                                    className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                    alt="VanGoghByAmritOne One"
                                  />
                                  <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                                    <Text
                                      className="!font-normal text-bluegray_400"
                                      size="md"
                                    >
                                      Lee Ri
                                    </Text>
                                    <Text
                                      className="mt-[13px] text-bluegray_900"
                                      size="lg"
                                    >
                                      Revision design system
                                    </Text>
                                    <Text
                                      className="!font-normal mt-[9px] text-bluegray_400"
                                      size="md"
                                    >
                                      2min ago
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-px bg-indigo_51 w-full" />
                              <div className="flex md:flex-1 flex-col items-center justify-start w-[96%] md:w-full">
                                <div className="flex flex-row gap-4 items-center justify-between w-full">
                                  <Img
                                    src="images/img_rarepepenakamototoyface.png"
                                    className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                    alt="RarePepeNakamotoToyFace"
                                  />
                                  <div className="flex flex-col items-start justify-start pr-1 pt-1">
                                    <Text
                                      className="!font-normal text-bluegray_400"
                                      size="md"
                                    >
                                      Jackson
                                    </Text>
                                    <Text
                                      className="mt-[13px] text-bluegray_900"
                                      size="lg"
                                    >
                                      Changelog Scan ID Card
                                    </Text>
                                    <Text
                                      className="!font-normal mt-[9px] text-bluegray_400"
                                      size="md"
                                    >
                                      2min ago
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Line className="self-center h-px bg-indigo_51 w-full" />
                              <div className="flex md:flex-1 flex-col items-center justify-start w-[79%] md:w-full">
                                <div className="flex flex-row gap-4 items-center justify-between w-full">
                                  <Img
                                    src="images/img_tintin22.png"
                                    className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                    alt="TinTinTwentyTwo"
                                  />
                                  <div className="flex flex-col items-start justify-start pr-1 pt-1">
                                    <Text
                                      className="!font-normal text-bluegray_400"
                                      size="md"
                                    >
                                      Yomaha
                                    </Text>
                                    <Text
                                      className="mt-[13px] text-bluegray_900"
                                      size="lg"
                                    >
                                      Pitching with client
                                    </Text>
                                    <Text
                                      className="!font-normal mt-[9px] text-bluegray_400"
                                      size="md"
                                    >
                                      2min ago
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6 h-[272px] items-start justify-start w-[272px]">
                        <Text className="text-bluegray_400" size="md">
                          Feb 23, 2022
                        </Text>
                        <List
                          className="flex-col grid items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-row gap-4 items-center justify-between pr-1 pt-1 w-full">
                            <Img
                              src="images/img_robototoyfacefinal2.png"
                              className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                              alt="RobotoToyFaceFinalTwo Two"
                            />
                            <div className="flex flex-col gap-2 items-start justify-start mr-1.5">
                              <Text
                                className="!font-normal text-bluegray_900"
                                size="md"
                              >
                                Ackerman
                              </Text>
                              <Text
                                className="leading-[24.00px] text-bluegray_900 w-full"
                                size="lg"
                              >
                                <span className="text-bluegray_900 font-inter text-left text-base font-medium">
                                  Changelog Revamp{" "}
                                </span>
                                <span className="text-red_600 font-inter text-left text-base font-medium">
                                  #ver 1.0
                                </span>
                                <span className="text-bluegray_900 font-inter text-left text-base font-medium">
                                  {" "}
                                  Homescreen{" "}
                                </span>
                              </Text>
                              <Text
                                className="!font-normal text-bluegray_400"
                                size="md"
                              >
                                2min ago
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo_51 w-full" />
                          <div className="flex flex-1 flex-col items-start justify-start pr-1 pt-1 w-full">
                            <div className="flex flex-row gap-4 items-center justify-start w-[98%] md:w-full">
                              <Img
                                src="images/img_punktoyface1.png"
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                alt="PunkToyFaceOne One"
                              />
                              <div className="flex flex-col gap-2 items-start justify-start">
                                <Text
                                  className="!font-normal text-bluegray_800"
                                  size="md"
                                >
                                  Blanker
                                </Text>
                                <Text
                                  className="leading-[24.00px] text-bluegray_900 w-full"
                                  size="lg"
                                >
                                  Create user flow for Data Projects
                                </Text>
                                <Text
                                  className="!font-normal text-bluegray_400"
                                  size="md"
                                >
                                  2min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
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

export default DashboardThreePage;
