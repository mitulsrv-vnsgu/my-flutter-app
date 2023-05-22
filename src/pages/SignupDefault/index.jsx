import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const SignupDefaultPage = () => {
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
              src="images/img_group7.svg"
              className="h-[597px]"
              alt="GroupSeven"
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start mr-[189px] w-[36%] md:w-full">
            <div className="bg-white_A700 flex flex-col gap-[39px] items-center justify-start p-[38px] sm:px-5 rounded-[20px] shadow-bs1 w-full">
              <div className="flex flex-col gap-[46px] items-center justify-start w-[90%] md:w-full">
                <Text className="text-bluegray_800" as="h4" size="3xl">
                  Sign up to Avori
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="bg-white_A700 border border-indigo_51 border-solid flex flex-col items-start justify-end p-[17px] rounded w-[93%] md:w-full">
                    <div className="flex flex-row gap-[98px] items-start justify-start md:ml-[0] ml-[7px] mt-0.5 w-[67%] md:w-full">
                      <Img
                        src="images/img_group.svg"
                        className="h-[18px] mb-0.5 w-[18px]"
                        alt="Group"
                      />
                      <Text className="mt-[3px] text-bluegray_800" size="md">
                        Sign up with Google
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end ml-5 md:ml-[0] mt-[61px] w-[96%] md:w-full">
                    <Line className="bg-indigo_51 h-px sm:mt-0 my-1.5 w-[39%]" />
                    <Text
                      className="!font-normal sm:ml-[0] ml-[67px] text-bluegray_800"
                      size="md"
                    >
                      Or
                    </Text>
                    <Line className="bg-indigo_51 h-px sm:ml-[0] ml-[17px] sm:mt-0 my-1.5 w-[39%]" />
                  </div>
                  <Input
                    wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex mt-[51px] pr-[35px] py-[19px] rounded w-[93%]"
                    className="p-0 placeholder:text-bluegray_400 sm:pr-5 text-base text-bluegray_400 text-left w-full"
                    type="text"
                    name="Textinput"
                    placeholder="Full name"
                    prefix={
                      <Img
                        src="images/img_icon_2.svg"
                        className="ml-5 mr-4 my-[18px]"
                        alt="Icon "
                      />
                    }
                  ></Input>
                  <Input
                    wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex mt-[53px] pr-[35px] py-[19px] rounded w-[93%]"
                    className="p-0 placeholder:text-bluegray_400 sm:pr-5 text-base text-bluegray_400 text-left w-full"
                    type="email"
                    name="Textinput One"
                    placeholder="Email"
                    prefix={
                      <Img
                        src="images/img_icon.svg"
                        className="ml-5 mr-4 my-[18px]"
                        alt="Icon "
                      />
                    }
                  ></Input>
                  <Input
                    wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex mt-[43px] py-[19px] rounded w-[93%]"
                    className="p-0 placeholder:text-bluegray_400 text-base text-bluegray_400 text-left w-full"
                    type="password"
                    name="Textinput Two"
                    placeholder="Password"
                    prefix={
                      <Img
                        src="images/img_icon_1.svg"
                        className="ml-5 mr-4 my-[18px]"
                        alt="Icon "
                      />
                    }
                    suffix={
                      <Img
                        src="images/img_icon_icon_eye_property_3298.svg"
                        className="ml-[35px] mr-5 my-[18px]"
                        alt="Icon /Icon/Eye/Property 3298"
                      />
                    }
                  ></Input>
                  <Text
                    className="leading-[22.00px] md:ml-[0] ml-[50px] mt-[74px] text-bluegray_800 text-center w-[71%] sm:w-full"
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
                </div>
              </div>
              <Text className="mb-1 text-bluegray_800" size="md">
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
    </>
  );
};

export default SignupDefaultPage;
