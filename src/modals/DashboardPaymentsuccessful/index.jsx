import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const DashboardPaymentsuccessfulModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[28%]"
      overlayClassName="bg-bluegray_900_97 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col items-center justify-end mt-[63px] p-8 md:px-5 rounded shadow-bs1 w-full">
          <Img
            src="images/img_layer2.svg"
            className="h-[152px] mt-[86px]"
            alt="LayerTwo"
          />
          <div className="flex flex-col gap-4 items-center justify-start mt-[45px]">
            <Text className="text-bluegray_800" as="h4" size="3xl">
              Payment Successful
            </Text>
            <Text
              className="!font-normal leading-[22.00px] text-bluegray_800 text-center"
              size="md"
            >
              <span className="text-bluegray_800 font-inter text-sm">Add</span>
              <span className="text-green_700 font-inter text-sm font-medium">
                {" "}
                200.000đ
              </span>
              <span className="text-bluegray_800 font-inter text-sm">
                <>
                  {" "}
                  to your wallet already
                  <br />
                  Check your new balance!
                </>
              </span>
            </Text>
          </div>
          <Text className="!font-normal mt-[21px] text-bluegray_400" size="md">
            Send receipt to
          </Text>
          <div className="flex flex-row gap-4 items-center justify-center mt-4 w-[53%] md:w-full">
            <Button className="border border-indigo_51 border-solid flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
              <Img
                src="images/img_group_48X48.svg"
                className="h-5"
                alt="Group"
              />
            </Button>
            <Button className="border border-indigo_51 border-solid flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
              <Img
                src="images/img_group_2.svg"
                className="h-5"
                alt="Group One"
              />
            </Button>
            <Button className="border border-indigo_51 border-solid flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
              <Img
                src="images/img_group_3.svg"
                className="h-5"
                alt="Group Two"
              />
            </Button>
          </div>
          <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[336px] mt-8 py-[19px] rounded-[28px] text-center text-sm text-white_A700">
            Yes, I understand
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DashboardPaymentsuccessfulModal;
