import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Text } from "components";

const CartemptyModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[29%]"
      overlayClassName="bg-bluegray_900_97 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col justify-start p-12 md:px-5 w-full">
          <div className="flex flex-row items-end justify-between mt-1 w-full">
            <Text className="mt-1.5 text-bluegray_800" as="h4" size="3xl">
              My Cart
            </Text>
            <Img src="images/img_plus_1.svg" className="h-8 w-8" alt="x" />
          </div>
          <Img
            src="images/img_20.svg"
            className="h-[152px] md:ml-[0] ml-[119px] mt-[77px]"
            alt="Twenty"
          />
          <Text
            className="!font-normal mb-[92px] md:ml-[0] ml-[127px] mt-11 text-bluegray_400"
            size="lg"
          >
            No item. Add more
          </Text>
        </div>
      </div>
    </ModalProvider>
  );
};

export default CartemptyModal;
