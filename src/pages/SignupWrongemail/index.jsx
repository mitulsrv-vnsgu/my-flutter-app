import React from "react";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

const SignupWrongemailPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-lime_50 flex md:flex-col flex-row md:gap-10 gap-[154px] items-start justify-start p-[61px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[137px] justify-start md:ml-[0] ml-[43px] md:mt-0 mt-[38px] w-[39%] md:w-full">
            <Text
              className="leading-[40.00px] md:ml-[0] ml-[27px] text-bluegray_900 text-center w-1/2 sm:w-full"
              as="h3"
              size="4xl"
            >
              Manage your work more effectively
            </Text>
            <Img
              src="images/img_workingtime_1.svg"
              className="h-[483px]"
              alt="WorkingTime"
            />
          </div>
          <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-end p-[50px] md:px-5 rounded-[20px] shadow-bs1 w-[36%] md:w-full">
            <div className="flex flex-col gap-[46px] justify-start w-[93%] md:w-full">
              <Text
                className="md:ml-[0] ml-[152px] text-bluegray_800"
                as="h4"
                size="3xl"
              >
                Login to Avori
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white_A700 border border-indigo_51 border-solid flex flex-col items-start justify-end p-[17px] rounded w-[95%] md:w-full">
                  <div className="flex flex-row items-start justify-between md:ml-[0] ml-[7px] mt-0.5 w-[65%] md:w-full">
                    <Img
                      src="images/img_group.svg"
                      className="h-[18px] mb-0.5 w-[18px]"
                      alt="Group"
                    />
                    <Text className="mt-[3px] text-bluegray_800" size="md">
                      Login with Google
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between mt-[61px] w-[98%] md:w-full">
                  <Line className="bg-indigo_51 h-px my-1.5 w-[39%]" />
                  <Text className="!font-normal text-bluegray_800" size="md">
                    Or
                  </Text>
                  <Line className="bg-indigo_51 h-px my-1.5 w-[39%]" />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-[54px] w-[95%] md:w-full">
                  <Text className="text-bluegray_800" size="md">
                    Email
                  </Text>
                  <Input
                    wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex pb-4 pr-[35px] pt-[21px] rounded w-full"
                    className="font-medium p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                    type="email"
                    name="email One"
                    placeholder="Ackermanlhn@gmail.com"
                    prefix={
                      <Img
                        src="images/img_icon.svg"
                        className="ml-5 mr-4 my-[18px]"
                        alt="Icon "
                      />
                    }
                  ></Input>
                </div>
                <Text className="mt-[11px] text-red_600" size="s">
                  Please enter a valid email address
                </Text>
                <Text className="mt-14 text-bluegray_800" size="md">
                  Password
                </Text>
                <Input
                  wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex mt-3 pr-[35px] py-[19px] rounded w-[95%]"
                  className="font-medium p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                  type="password"
                  name="password"
                  placeholder="************"
                  prefix={
                    <Img
                      src="images/img_icon_1.svg"
                      className="ml-5 mr-4 my-[18px]"
                      alt="Icon "
                    />
                  }
                ></Input>
                <div className="flex flex-row items-start justify-between ml-5 md:ml-[0] mt-16 w-[96%] md:w-full">
                  <CheckBox
                    className="font-medium text-bluegray_800 text-left text-sm"
                    inputClassName="mr-[5px]"
                    name="Remember"
                    id="Remember"
                    label="Remember"
                  ></CheckBox>
                  <Text
                    className="mt-[5px] text-bluegray_800 underline"
                    size="md"
                  >
                    Forgot password?
                  </Text>
                </div>
                <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[414px] sm:min-w-full mt-[82px] py-[21px] rounded-[28px] text-center text-sm text-white_A700">
                  LOGIN
                </Button>
                <Text
                  className="md:ml-[0] ml-[92px] mt-[43px] text-bluegray_800"
                  size="md"
                >
                  <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                    You don’t have an account yet?
                  </span>
                  <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                    {" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-deep_orange_300 font-inter text-left text-sm font-medium underline"
                  >
                    Sign up
                  </a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupWrongemailPage;
