import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Input, Text } from "components";

const DashboardSubcribleModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[34%]"
      overlayClassName="bg-bluegray_900_97 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col gap-[35px] items-start justify-start mt-[65px] p-8 md:px-5 rounded shadow-bs1 w-full">
          <div className="flex flex-col gap-[21px] items-start justify-start">
            <Text className="text-bluegray_800" as="h4" size="3xl">
              Subcrible
            </Text>
            <Text className="!font-normal text-bluegray_800" size="md">
              Subcribe our newletter and get notification to stay update
            </Text>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start w-full">
            <Text className="text-bluegray_800" size="md">
              Email
            </Text>
            <div className="h-14 relative w-full">
              <Img
                src="images/img_iconsendglyph.svg"
                className="h-5 ml-auto mr-5 my-auto w-5"
                alt="IconSendGlyph"
              />
              <Input
                wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex inset-[0] justify-center m-auto pb-4 pr-[35px] pt-[21px] rounded w-full"
                className="font-medium p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                type="email"
                name="email One"
                placeholder="Ackermanlhn@gmail.com"
                prefix={
                  <Img
                    src="images/img_icon.svg"
                    className="ml-5 mr-4 left-[5%] right-[4%] absolute my-[18px] inset-y-[32%]"
                    alt="Icon "
                  />
                }
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DashboardSubcribleModal;
