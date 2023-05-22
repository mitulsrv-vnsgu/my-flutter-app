import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const DeletePopupModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[34%]"
      overlayClassName="bg-bluegray_900_97 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col justify-start pl-1 md:px-5 py-1 rounded shadow-bs1 w-full">
          <Img
            src="images/img_xcircle.svg"
            className="h-10 md:ml-[0] ml-[434px] w-10"
            alt="xcircle"
          />
          <Img
            src="images/img_12.svg"
            className="h-[175px] md:ml-[0] ml-[149px] mt-5"
            alt="Twelve"
          />
          <div className="flex flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[71px] mt-[58px]">
            <Text className="text-bluegray_800" as="h4" size="3xl">
              Are you sure to delete item?
            </Text>
            <Text className="!font-normal text-bluegray_800" size="md">
              This item will be delete from your cart
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-4 items-center justify-start mb-7 ml-7 md:ml-[0] mr-8 mt-12 w-[88%] md:w-full">
            <Button className="bg-red_600 cursor-pointer font-bold min-w-[199px] py-[19px] rounded-[28px] text-center text-sm text-white_A700">
              Yes, Delete item
            </Button>
            <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[199px] py-5 rounded-[28px] text-bluegray_800 text-center text-sm">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DeletePopupModal;
