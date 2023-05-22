import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Line, List, Text } from "components";

const CartModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[29%]"
      overlayClassName="bg-bluegray_900_97 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col gap-12 items-center justify-center p-12 md:px-5 w-full">
          <div className="flex flex-row items-end justify-between mt-1 w-full">
            <Text className="mt-1.5 text-bluegray_800" as="h4" size="3xl">
              My Cart
            </Text>
            <Img src="images/img_plus_1.svg" className="h-8 w-8" alt="x" />
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full">
            <List
              className="flex-col gap-[34.05px] grid items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row gap-6 items-start justify-between my-0 w-full">
                <Img
                  src="images/img_rectangle_118X110.png"
                  className="h-[118px] md:h-auto object-cover"
                  alt="Rectangle"
                />
                <div className="flex flex-col items-start justify-start sm:mt-0 mt-0.5">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text className="text-bluegray_900" as="h6" size="xl">
                        Polo Shirt
                      </Text>
                      <Img
                        src="images/img_minus.svg"
                        className="h-6 w-6"
                        alt="minus"
                      />
                    </div>
                    <Text className="!font-normal text-bluegray_400" size="md">
                      Color: Grey, S
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-6 w-[43%] md:w-full">
                    <div className="border border-indigo_51 border-solid md:h-5 h-8 p-1.5 relative w-8">
                      <Img
                        src="images/img_minus.svg"
                        className="absolute h-5 inset-[0] justify-center m-auto w-5"
                        alt="minus One"
                      />
                    </div>
                    <Text className="ml-5 text-bluegray_900" size="md">
                      1
                    </Text>
                    <div className="border border-indigo_51 border-solid md:h-5 h-8 ml-[21px] p-1.5 relative w-8">
                      <Img
                        src="images/img_plus_1.svg"
                        className="absolute h-5 inset-[0] justify-center m-auto w-5"
                        alt="plus"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[27px] w-full">
                    <Text className="!font-normal text-bluegray_400" size="md">
                      Price
                    </Text>
                    <Text
                      className="!font-semibold text-bluegray_800"
                      size="md"
                    >
                      $120.0
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-indigo_51 w-full" />
              <div className="flex flex-1 sm:flex-col flex-row gap-6 items-start justify-between my-0 w-full">
                <Img
                  src="images/img_3427408800611_353X273.png"
                  className="h-[118px] md:h-auto object-cover"
                  alt="Rectangle One"
                />
                <div className="flex flex-col items-start justify-start sm:mt-0 mt-0.5">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text className="text-bluegray_900" as="h6" size="xl">
                        Basic T-shirt
                      </Text>
                      <Img
                        src="images/img_minus.svg"
                        className="h-6 w-6"
                        alt="minus One"
                      />
                    </div>
                    <Text className="!font-normal text-bluegray_400" size="md">
                      Color: Grey, S
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-6 w-[43%] md:w-full">
                    <div className="border border-indigo_51 border-solid md:h-5 h-8 p-1.5 relative w-8">
                      <Img
                        src="images/img_minus.svg"
                        className="absolute h-5 inset-[0] justify-center m-auto w-5"
                        alt="minus One One"
                      />
                    </div>
                    <Text className="ml-5 text-bluegray_900" size="md">
                      1
                    </Text>
                    <div className="border border-indigo_51 border-solid md:h-5 h-8 ml-[21px] p-1.5 relative w-8">
                      <Img
                        src="images/img_plus_1.svg"
                        className="absolute h-5 inset-[0] justify-center m-auto w-5"
                        alt="plus One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[27px] w-full">
                    <Text className="!font-normal text-bluegray_400" size="md">
                      Price
                    </Text>
                    <Text
                      className="!font-semibold text-bluegray_800"
                      size="md"
                    >
                      $120.0
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-row items-start justify-between mt-[68px] w-full">
              <Text
                className="!font-normal mt-[3px] text-bluegray_400"
                size="lg"
              >
                Total
              </Text>
              <Text className="mt-1 text-bluegray_800" as="h6" size="xl">
                $240.0
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-between mt-8 w-[98%] md:w-full">
              <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[186px] py-[17px] rounded-[24px] text-center text-sm text-white_A700">
                Purchase now
              </Button>
              <Button className="bg-deep_orange_50 cursor-pointer font-bold min-w-[185px] py-[17px] rounded-[24px] text-center text-deep_orange_300 text-sm">
                Add to cart
              </Button>
            </div>
            <div className="flex flex-row gap-6 items-center justify-start mt-8 w-[65%] md:w-full">
              <Img src="images/img_truck.svg" className="h-6 w-6" alt="truck" />
              <div className="flex flex-col gap-2 items-start justify-end pr-[5px] pt-[5px]">
                <Text
                  className="!font-bold text-bluegray_900"
                  as="h6"
                  size="lg"
                >
                  Free nationwide shipping
                </Text>
                <Text className="!font-normal text-bluegray_900" size="md">
                  (For order begin $100.0)
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default CartModal;
