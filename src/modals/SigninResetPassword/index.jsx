import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Text } from "components";

const SigninResetPasswordModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[37%]"
      overlayClassName="bg-red_52 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex sm:flex-col flex-row gap-11 items-start justify-start p-12 md:px-5 rounded-[20px] shadow-bs1 w-full">
          <Img
            src="images/img_iconiconline294.svg"
            className="h-6 sm:mt-0 mt-[11px] w-6"
            alt="IconIconLine294"
          />
          <div className="flex sm:flex-1 flex-col md:gap-10 gap-[68px] items-center justify-start mb-2.5 sm:mt-0 mt-1.5 w-[76%] sm:w-full">
            <Img
              src="images/img_group_182X168.svg"
              className="h-[182px]"
              alt="Group"
            />
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[70px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[133px] text-bluegray_800"
                  as="h4"
                  size="3xl"
                >
                  Forgot Password
                </Text>
                <Text
                  className="!font-normal leading-[22.00px] text-bluegray_800 text-center"
                  size="md"
                >
                  <>
                    Enter the email address you used when you joined and we’ll
                    send you instructions to reset your password.
                    <br />
                    For security reasons, we do NOT store your password. So rest
                    assured that we will never send your password via email.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-[82px] w-full">
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
              <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[414px] sm:min-w-full mt-[102px] py-[21px] rounded-[28px] text-center text-sm text-white_A700">
                SEND RESET INSTRUCTIONS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default SigninResetPasswordModal;
