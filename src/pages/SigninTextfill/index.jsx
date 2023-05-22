import React from "react";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

const SigninTextfillPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-red_51 flex md:flex-col flex-row md:gap-10 gap-[155px] items-center justify-start p-10 sm:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start ml-16 md:ml-[0] md:px-5 w-[38%] md:w-full">
            <Text
              className="leading-[40.00px] text-bluegray_900 text-center w-1/2 sm:w-full"
              as="h3"
              size="4xl"
            >
              Manage your work more effectively
            </Text>
            <Img
              src="images/img_workingtime_483X627.svg"
              className="h-[483px] mt-[143px]"
              alt="WorkingTime"
            />
            <Text className="mt-[151px] text-bluegray_800" size="md">
              <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                You don’t have an account yet?
              </span>
              <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                {" "}
              </span>
              <a
                href="javascript:"
                className="text-bluegray_701 font-inter text-left text-sm font-medium underline"
              >
                Sign up
              </a>
            </Text>
          </div>
          <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-end mb-[27px] p-11 md:px-5 rounded-[20px] shadow-bs1 w-[35%] md:w-full">
            <Text className="mt-[22px] text-bluegray_800" as="h4" size="3xl">
              Login to Avori
            </Text>
            <div className="bg-white_A700 border border-indigo_51 border-solid flex flex-col items-start justify-end mt-[46px] p-[17px] rounded w-[86%] md:w-full">
              <div className="flex flex-row items-start justify-between ml-1.5 md:ml-[0] w-[65%] md:w-full">
                <Img
                  src="images/img_group_18X18.svg"
                  className="h-[18px] w-[18px]"
                  alt="Group"
                />
                <Text className="mt-[3px] text-bluegray_800" size="md">
                  Login with Google
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center mt-[54px] w-[88%] md:w-full">
              <Line className="bg-indigo_51 h-px sm:mt-0 my-1.5 w-[39%]" />
              <Text
                className="!font-normal sm:ml-[0] ml-[43px] text-bluegray_800"
                size="md"
              >
                Or
              </Text>
              <Line className="bg-indigo_51 h-px sm:ml-[0] ml-[41px] sm:mt-0 my-1.5 w-[39%]" />
            </div>
            <div className="flex flex-col items-start justify-start mt-[54px] w-[86%] md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
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
              <Text className="mt-[31px] text-bluegray_800" size="md">
                Password
              </Text>
              <Input
                wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex mt-3 pr-[35px] py-[19px] rounded w-full"
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
            </div>
            <div className="flex flex-col items-center justify-start mt-[115px] w-[86%] md:w-full">
              <div className="flex flex-row items-start justify-between w-full">
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
              <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[414px] sm:min-w-full mt-20 py-[21px] rounded-[28px] text-center text-sm text-white_A700">
                LOGIN
              </Button>
              <Text className="mt-14 text-bluegray_800" size="md">
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
    </>
  );
};

export default SigninTextfillPage;
