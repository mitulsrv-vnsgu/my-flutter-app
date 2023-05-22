import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const SigninResetPasswordSuModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[36%]"
      overlayClassName="bg-red_52 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col items-center justify-end p-[83px] md:px-5 rounded-[20px] shadow-bs1 w-full">
          <Img
            src="images/img_group5.svg"
            className="h-[132px] mt-[22px]"
            alt="GroupFive"
          />
          <Text
            className="leading-[32.00px] mt-[263px] text-bluegray_800 text-center w-3/5 sm:w-full"
            as="h4"
            size="3xl"
          >
            Password has been recovered
          </Text>
          <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[414px] sm:min-w-full mt-[84px] py-[21px] rounded-[28px] text-center text-sm text-white_A700">
            LOGIN
          </Button>
          <div className="flex flex-row gap-[7px] items-start justify-center mt-[63px] w-[29%] md:w-full">
            <Img
              src="images/img_chevronleft.svg"
              className="h-5 w-5"
              alt="chevronleft"
            />
            <Text className="mt-1 text-indigo_400" size="md">
              Back to Sign in
            </Text>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default SigninResetPasswordSuModal;
