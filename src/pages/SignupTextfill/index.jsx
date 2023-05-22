import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const SignupTextfillPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-red_53 flex md:flex-col flex-row md:gap-10 items-start justify-between p-[69px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[101px] items-start justify-start md:ml-[0] ml-[69px] md:mt-0 mt-6 w-[31%] md:w-full">
            <Text
              className="leading-[40.00px] ml-0.5 md:ml-[0] text-bluegray_900 text-center w-[72%] sm:w-full"
              as="h3"
              size="4xl"
            >
              <>Don&#39;t worry about overwhelming tasks</>
            </Text>
            <Img
              src="images/img_group7_597X493.svg"
              className="h-[597px]"
              alt="GroupSeven"
            />
          </div>
          <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start mr-[189px] p-[38px] md:px-5 rounded-[20px] shadow-bs1 w-[36%] md:w-full">
            <div className="flex flex-col items-center justify-start mb-1 w-[86%] md:w-full">
              <Text className="text-bluegray_800" as="h4" size="3xl">
                Sign up to Avori
              </Text>
              <div className="bg-white_A700 border border-indigo_51 border-solid flex flex-col items-start justify-end mt-[46px] p-[17px] rounded w-[98%] md:w-full">
                <div className="flex flex-row gap-[98px] items-start justify-start md:ml-[0] ml-[7px] mt-0.5 w-[67%] md:w-full">
                  <Img
                    src="images/img_group_18X18.svg"
                    className="h-[18px] mb-0.5 w-[18px]"
                    alt="Group"
                  />
                  <Text className="mt-[3px] text-bluegray_800" size="md">
                    Sign up with Google
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-start justify-between mt-[61px] w-full">
                <Line className="bg-indigo_51 h-px my-1.5 w-[39%]" />
                <Text className="!font-normal text-bluegray_800" size="md">
                  Or
                </Text>
                <Line className="bg-indigo_51 h-px my-1.5 w-[39%]" />
              </div>
              <div className="flex flex-col items-center justify-start mt-[51px] w-[98%] md:w-full">
                <Input
                  wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex pr-[35px] py-[19px] rounded w-full"
                  className="font-medium p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                  name="Textinput"
                  placeholder="Avo Lee"
                  prefix={
                    <Img
                      src="images/img_icon_2.svg"
                      className="ml-5 mr-4 my-[18px]"
                      alt="Icon "
                    />
                  }
                ></Input>
                <Input
                  wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex mt-[53px] pb-4 pr-[35px] pt-[21px] rounded w-full"
                  className="font-medium p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                  type="email"
                  name="email"
                  placeholder="Ackermanlhn@gmail.com"
                  prefix={
                    <Img
                      src="images/img_icon.svg"
                      className="ml-5 mr-4 my-[18px]"
                      alt="Icon "
                    />
                  }
                ></Input>
                <Input
                  wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex mt-[43px] py-[19px] rounded w-full"
                  className="font-medium p-0 placeholder:text-bluegray_800 text-base text-bluegray_800 text-left w-full"
                  name="Textinput One"
                  placeholder="Avoooo21"
                  prefix={
                    <Img
                      src="images/img_icon_1.svg"
                      className="ml-5 mr-4 my-[18px]"
                      alt="Icon "
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_icon_icon_eye_property_3297.svg"
                      className="ml-[35px] mr-5 my-[18px]"
                      alt="Icon /Icon/Eye/Property 3297"
                    />
                  }
                ></Input>
                <Text
                  className="leading-[22.00px] mt-[74px] text-bluegray_800 text-center w-[76%] sm:w-full"
                  size="md"
                >
                  <span className="text-bluegray_400 font-inter text-sm font-medium">
                    <>By clicking “SIGN UP&quot; button, I agree with your</>
                  </span>
                  <span className="text-bluegray_800 font-inter text-sm font-medium">
                    {" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-bluegray_800 font-inter text-sm font-medium underline"
                  >
                    Term and Policy
                  </a>
                </Text>
                <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[414px] sm:min-w-full mt-[54px] py-[21px] rounded-[28px] text-center text-sm text-white_A700">
                  SIGN UP
                </Button>
                <Text className="mt-[39px] text-bluegray_800" size="md">
                  <span className="text-bluegray_800 font-inter text-left text-sm font-normal">
                    You have an account already?
                  </span>
                  <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                    {" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-deep_orange_300 font-inter text-left text-sm font-medium underline"
                  >
                    Sign in
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

export default SignupTextfillPage;
