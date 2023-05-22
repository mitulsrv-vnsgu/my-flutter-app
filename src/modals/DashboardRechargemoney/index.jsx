import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Line, Text } from "components";

const DashboardRechargemoneyModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[53%]"
      overlayClassName="bg-bluegray_900_97 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col gap-8 items-start justify-start mt-[65px] p-7 md:px-5 rounded shadow-bs1 w-full">
          <Text className="mt-1 text-bluegray_800" as="h4" size="3xl">
            Pick a wallet
          </Text>
          <Input
            wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex pr-[35px] py-[19px] rounded w-[99%]"
            className="font-medium p-0 placeholder:text-bluegray_400 sm:pr-5 text-base text-bluegray_400 text-left w-full"
            name="Textinput"
            placeholder="0.0"
            prefix={
              <Img
                src="images/img_icon_10.svg"
                className="ml-5 mr-4 my-[18px]"
                alt="Icon "
              />
            }
          ></Input>
          <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-[78%] md:w-full">
            <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[116px] py-[17px] rounded text-bluegray_800 text-center text-sm">
              200.000đ
            </Button>
            <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[116px] py-[17px] rounded text-bluegray_800 text-center text-sm">
              500.000đ
            </Button>
            <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[126px] py-[17px] rounded text-bluegray_800 text-center text-sm">
              1.000.000đ
            </Button>
            <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[129px] py-[17px] rounded text-bluegray_800 text-center text-sm">
              2.000.000đ
            </Button>
          </div>
          <Line className="bg-indigo_51 h-px w-[99%]" />
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
            <div className="flex flex-col items-start justify-start">
              <Text className="text-bluegray_800" size="lg">
                Available Wallet
              </Text>
              <Input
                wrapClassName="border border-indigo_51 border-solid flex mt-[19px] pr-[35px] py-[23px] rounded w-full"
                className="font-semibold p-0 placeholder:text-bluegray_800 sm:pr-5 text-base text-bluegray_800 text-left w-full"
                name="WalletOptions"
                placeholder="Torus"
                prefix={
                  <Img
                    src="images/img_logo_32X32.svg"
                    className="ml-4 mr-2.5 my-4"
                    alt="Logo"
                  />
                }
              ></Input>
              <div className="bg-gray_51 border border-indigo_51 border-solid flex flex-row items-center justify-between mt-4 p-4 rounded w-full">
                <div className="flex flex-row gap-2.5 items-center justify-start">
                  <Img
                    src="images/img_metamaskicon0.png"
                    className="h-8 md:h-auto object-cover rounded-[5px] w-8"
                    alt="MetaMaskIconZero"
                  />
                  <Text
                    className="!font-semibold text-bluegray_800"
                    as="h6"
                    size="lg"
                  >
                    Metamask
                  </Text>
                </div>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-5 w-5"
                  alt="arrowright"
                />
              </div>
              <div className="border border-indigo_51 border-solid flex flex-row gap-2.5 items-center justify-start mt-4 p-4 rounded w-full">
                <div className="h-8 md:h-[26px] p-0.5 relative w-8">
                  <Img
                    src="images/img_portisicon.png"
                    className="absolute h-[26px] inset-[0] justify-center m-auto object-cover w-[26px]"
                    alt="PortisIcon"
                  />
                </div>
                <Text
                  className="!font-semibold text-bluegray_800"
                  as="h6"
                  size="lg"
                >
                  Portis
                </Text>
              </div>
              <div className="border border-indigo_51 border-solid flex flex-row gap-2.5 items-center justify-start mt-4 p-4 rounded w-full">
                <Img
                  src="images/img_logofortmatic.png"
                  className="h-8 md:h-auto object-cover w-8"
                  alt="LogoFortmatic"
                />
                <Text
                  className="!font-semibold text-bluegray_800"
                  as="h6"
                  size="lg"
                >
                  Fortmatic
                </Text>
              </div>
            </div>
            <Line className="bg-indigo_51 h-[344px] md:h-px md:w-full w-px" />
            <div className="flex flex-col gap-[23px] items-center justify-start">
              <div className="md:h-[37px] h-[42px] relative w-full">
                <div className="absolute flex flex-col inset-x-[0] items-end justify-start mx-auto pl-0.5 py-0.5 top-[0] w-full">
                  <div className="flex flex-row gap-2 items-center justify-end w-[31%] md:w-full">
                    <Img
                      src="images/img_icon_11.svg"
                      className="h-5 w-5"
                      alt="Icon One"
                    />
                    <Text className="text-indigo_400" size="lg">
                      Refresh
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-col gap-[7px] items-start justify-start left-[0]">
                  <Text className="text-bluegray_800" size="lg">
                    QR Code
                  </Text>
                  <Text className="!font-normal text-bluegray_400" size="md">
                    Scan this QR code{" "}
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_barcodeqr1.svg"
                className="h-[279px]"
                alt="barcodeqrOne"
              />
            </div>
          </div>
          <Button className="bg-deep_orange_300 cursor-pointer font-bold mb-1 min-w-[699px] md:min-w-full py-[19px] rounded-[28px] text-center text-sm text-white_A700">
            Pay now
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DashboardRechargemoneyModal;
