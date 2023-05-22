import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ProfilePage = () => {
  const table2Data = React.useRef([
    {
      rowno: "1",
      rowprojects: "Branding guideline",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,000",
    },
    {
      rowno: "2",
      rowprojects: "Mobile design",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,200",
    },
    {
      rowno: "3",
      rowprojects: "Landing pages",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,800",
    },
    {
      rowno: "2",
      rowprojects: "Mobile design",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,200",
    },
    {
      rowno: "3",
      rowprojects: "Landing pages",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,800",
    },
    {
      rowno: "2",
      rowprojects: "Mobile design",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,200",
    },
    {
      rowno: "3",
      rowprojects: "Landing pages",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,800",
    },
    {
      rowno: "2",
      rowprojects: "Mobile design",
      rowstart: "2 Sep, 2020",
      rowlinetwo: "10 Sep, 2020",
      rowbudget: "$1,200",
    },
  ]);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("rowno", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center p-[5px]">
            <Text className="mt-[34px] text-bluegray_800" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[115px] p-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              No.
            </Text>
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowprojects", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center">
            <Text className="mt-[39px] text-bluegray_800" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[193px]">
            <Text className="!font-normal mt-[5px] text-bluegray_400" size="lg">
              Projects
            </Text>
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowstart", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center">
            <Text className="mt-[39px] text-bluegray_800" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[136px] pr-[3px] py-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Start
            </Text>
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowlinetwo", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center">
            <Text className="mt-[39px] text-bluegray_800" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[143px] pr-[3px] py-[3px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Deadline
            </Text>
          </div>
        ),
      }),
      table2ColumnHelper.accessor("rowbudget", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center">
            <Text className="mt-[38px] text-bluegray_800" size="lg">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[110px] pr-[5px] pt-[5px]">
            <Text className="!font-normal text-bluegray_400" size="lg">
              Budget
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
          <Sidebar className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-white_A700 flex flex-col gap-9 items-center justify-start p-[29px] sm:px-5 w-full">
              <Img
                src="images/img_logo.svg"
                className="h-7 mt-[7px]"
                alt="Logo"
              />
              <div className="flex flex-col items-start justify-start mb-[507px] w-[87%] md:w-full">
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[3px] w-[70%] md:w-full">
                  <Img
                    src="images/img_icon_3.svg"
                    className="h-5 w-5"
                    alt="Icon"
                  />
                  <Text className="text-bluegray_800" size="md">
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
                  <Text className="mb-0.5 mt-[7px] text-bluegray_400" size="md">
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </Sidebar>
          <Line className="bg-indigo_51 h-[1038px] md:h-px md:w-full w-px" />
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
              <div className="flex md:flex-col flex-row gap-[21px] items-end justify-between mt-3.5 w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[33%] md:w-full">
                  <Text className="text-bluegray_900" size="2xl">
                    Profile
                  </Text>
                  <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mt-[37px] pb-9 rounded shadow-bs w-full">
                    <div className="flex flex-col relative w-full">
                      <Img
                        src="images/img_imglibimg15.png"
                        className="h-[136px] mx-auto object-cover w-full"
                        alt="ImgLibIMGFifteen"
                      />
                      <Img
                        src="images/img_sherlocktoyfacelow.png"
                        className="h-[120px] mt-[-60px] mx-auto object-cover rounded-[24px] w-[120px] z-[1]"
                        alt="SherlockToyFacelow One"
                      />
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-start mt-6 w-[72%] md:w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start pt-1 px-1 w-full">
                        <Text className="text-bluegray_900" as="h4" size="3xl">
                          Sam Brown
                        </Text>
                        <Text
                          className="!font-normal text-bluegray_400"
                          size="md"
                        >
                          sambrown@gmail.com
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center w-1/2 md:w-full">
                        <Img
                          src="images/img_group_3.svg"
                          className="h-5 w-5"
                          alt="globe"
                        />
                        <Text
                          className="ml-[5px] mr-0.5 text-bluegray_800"
                          size="md"
                        >
                          sambrown.com
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_600 cursor-pointer font-bold min-w-[147px] mt-10 py-[15px] rounded-[24px] text-center text-sm text-white_A700">
                      Logout
                    </Button>
                    <Img
                      src="images/img_socialicons.svg"
                      className="h-5 mt-6"
                      alt="socialicons"
                    />
                    <Line className="bg-indigo_51 h-px mt-8 w-[83%]" />
                    <Text
                      className="!font-normal mt-[34px] text-bluegray_400"
                      size="md"
                    >
                      Member since 2021
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-col font-inter items-center justify-end mt-[21px] p-6 sm:px-5 rounded shadow-bs4 w-full">
                    <div className="flex flex-col gap-7 items-center justify-start mt-2 w-[96%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text className="text-bluegray_900" as="h6" size="xl">
                          Personal info.
                        </Text>
                        <Img
                          src="images/img_morehorizontal.svg"
                          className="h-8 w-8"
                          alt="morehorizontal"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between pl-[3px] py-[3px] w-full">
                          <Text
                            className="!font-normal text-bluegray_400"
                            size="lg"
                          >
                            Full name
                          </Text>
                          <Text className="text-bluegray_800" size="lg">
                            Avori
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="!font-normal my-0.5 text-bluegray_400"
                            size="lg"
                          >
                            Mobile
                          </Text>
                          <Text className="my-0.5 text-bluegray_800" size="lg">
                            701-565-0439
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[63px] items-center justify-start pl-0.5 pt-0.5 w-full">
                          <Text
                            className="!font-normal text-bluegray_400"
                            size="lg"
                          >
                            E-mail
                          </Text>
                          <Text
                            className="mt-[3px] text-bluegray_800"
                            size="lg"
                          >
                            ackermanlhn@gmail.com
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="!font-normal text-bluegray_400"
                            size="lg"
                          >
                            Location
                          </Text>
                          <Text className="mt-1 text-bluegray_800" size="lg">
                            Hanoi, Vietnam
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-inter gap-[21px] items-center justify-start md:mt-0 mt-[57px] w-[67%] md:w-full">
                  <List
                    className="sm:flex-col flex-row gap-[18px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-8 sm:px-5 rounded shadow-bs4 w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-5 items-center justify-between w-[62%]">
                          <Button className="bg-gray_51 flex h-12 items-center justify-center my-[5px] p-3.5 rounded w-12">
                            <Img
                              src="images/img_buttonprimary_6.svg"
                              className="h-5"
                              alt="ButtonPrimary"
                            />
                          </Button>
                          <div className="flex flex-col gap-3.5 items-start justify-end pr-1 py-1">
                            <Text
                              className="!font-normal text-bluegray_800"
                              size="md"
                            >
                              Completed tasks
                            </Text>
                            <Text
                              className="text-bluegray_800"
                              as="h6"
                              size="xl"
                            >
                              125
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_morehorizontal.svg"
                          className="h-8 w-8"
                          alt="morehorizontal One"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-8 sm:px-5 rounded shadow-bs4 w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-5 items-center justify-between w-[62%]">
                          <Button className="bg-gray_51 flex h-12 items-center justify-center my-[5px] p-3.5 rounded w-12">
                            <Img
                              src="images/img_buttonprimary_6.svg"
                              className="h-5"
                              alt="ButtonPrimary One"
                            />
                          </Button>
                          <div className="flex flex-col gap-[18px] items-start justify-start pr-1 pt-1">
                            <Text
                              className="!font-normal text-bluegray_800"
                              size="md"
                            >
                              Total revenue
                            </Text>
                            <Text
                              className="text-bluegray_800"
                              as="h6"
                              size="xl"
                            >
                              $10,000
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_morehorizontal.svg"
                          className="h-8 w-8"
                          alt="morehorizontal Two"
                        />
                      </div>
                    </div>
                  </List>
                  <div className="bg-white_A700 flex flex-col items-center justify-end p-[29px] sm:px-5 rounded shadow-bs4 w-full">
                    <div className="flex flex-col gap-[31px] items-center justify-start mt-[3px] w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                        <Text
                          className="md:mt-0 my-[5px] text-bluegray_900"
                          as="h6"
                          size="xl"
                        >
                          My projects
                        </Text>
                        <Img
                          src="images/img_search_bluegray_400.svg"
                          className="h-8 md:ml-[0] ml-[505px] w-8"
                          alt="search"
                        />
                        <Img
                          src="images/img_morehorizontal.svg"
                          className="h-8 ml-6 md:ml-[0] w-8"
                          alt="morehorizontal Three"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="overflow-auto w-full">
                          <ReactTable
                            columns={table2Columns}
                            data={table2Data.current}
                            rowClass={""}
                            headerClass=""
                          />
                        </div>
                        <div className="h-6 w-6"></div>
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

export default ProfilePage;
