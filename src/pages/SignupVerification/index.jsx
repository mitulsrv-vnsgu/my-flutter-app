import React from "react";

import { Button, Img, Text } from "components";

const SignupVerificationPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-lime_51 flex flex-col items-center justify-end p-[67px] md:px-10 sm:px-5 w-full">
          <div className="bg-white_A700 flex sm:flex-col flex-row gap-[33px] items-start justify-start p-12 md:px-5 rounded-[20px] shadow-bs1 w-[39%] md:w-full">
            <Img
              src="images/img_iconiconline294.svg"
              className="h-6 sm:mt-0 mt-[11px] w-6"
              alt="IconIconLine294"
            />
            <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start mb-[9px] sm:mt-0 mt-1.5 w-[79%] sm:w-full">
              <Img
                src="images/img_group_4.svg"
                className="h-[182px]"
                alt="Group"
              />
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Text className="text-bluegray_800" as="h4" size="3xl">
                    2-Step Vertification
                  </Text>
                  <Text
                    className="!font-normal leading-[22.00px] text-bluegray_800 text-center w-full"
                    size="md"
                  >
                    We sent a vertìication code to your email. Enter the code
                    from the email in the field below
                  </Text>
                </div>
                <div className="flex gap-5 mt-[124px] w-[92%]"></div>
                <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[414px] sm:min-w-full mt-[103px] py-[21px] rounded-[28px] text-center text-sm text-white_A700">
                  SEND RESET INSTRUCTIONS
                </Button>
                <Text className="mt-[51px] text-indigo_400" size="md">
                  You haven’t received it? Resend a new code
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupVerificationPage;
