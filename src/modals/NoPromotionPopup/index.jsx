import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const NoPromotionPopupModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[34%]"
      overlayClassName="bg-bluegray_900_97 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col items-center justify-start pb-8 pl-8 md:px-5 rounded shadow-bs1 w-full">
          <div className="flex sm:flex-col flex-row gap-[50px] items-start justify-end w-[87%] md:w-full">
            <div className="bg-white_A700 md:h-[194px] h-[298px] p-[47px] md:px-10 sm:px-5 relative w-[298px]">
              <Img
                src="images/img_group_bluegray_900.svg"
                className="absolute h-[194px] inset-[0] justify-center m-auto"
                alt="Group"
              />
            </div>
            <Img
              src="images/img_xcircle.svg"
              className="h-10 sm:mt-0 mt-1 w-10"
              alt="xcircle"
            />
          </div>
          <div className="flex flex-col gap-[21px] items-center justify-start">
            <Text className="text-bluegray_800" as="h4" size="3xl">
              No promotion
            </Text>
            <Text className="!font-normal text-bluegray_800" size="md">
              Follow us to review lattest promotion
            </Text>
          </div>
          <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[199px] mt-12 py-[19px] rounded-[28px] text-center text-sm text-white_A700">
            Yes, I understand
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default NoPromotionPopupModal;
