import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, SelectBox, Text } from "components";

const group2532OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CreateEventPopupModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[34%]"
      overlayClassName="bg-bluegray_900_97 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col items-center justify-start mt-14 p-8 md:px-5 rounded shadow-bs1 w-full">
          <div className="flex flex-col gap-5 items-start justify-end pr-1 py-1">
            <Text className="text-bluegray_800" as="h4" size="3xl">
              Create new event
            </Text>
            <Text className="!font-normal text-bluegray_800" size="md">
              Add new event in the calendar
            </Text>
          </div>
          <div className="flex flex-col gap-[25px] items-center justify-start mt-9 w-full">
            <div className="flex flex-col gap-[13px] items-start justify-start w-full">
              <Text className="text-bluegray_800" size="md">
                Event name
              </Text>
              <Input
                wrapClassName="bg-white_A700 border border-indigo_51 border-solid pb-4 pl-5 pr-[35px] pt-[21px] rounded w-full"
                className="p-0 placeholder:text-bluegray_400 sm:pr-5 text-base text-bluegray_400 text-left w-full"
                type="text"
                name="Group2531"
                placeholder="Type name"
              ></Input>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text className="text-bluegray_800" size="md">
                Select category
              </Text>
              <SelectBox
                className="bg-white_A700 border border-indigo_51 border-solid font-semibold pb-[15px] pl-5 pt-[21px] rounded text-base text-bluegray_800 text-left w-full"
                placeholderClassName="text-bluegray_800"
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-5 mr-5 w-5"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="Group2532"
                options={group2532OptionsList}
                isSearchable={false}
                placeholder="Data project"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-4 items-center justify-start mt-8 w-full">
            <Button className="bg-deep_orange_300 cursor-pointer font-bold min-w-[199px] py-[21px] rounded-[28px] text-center text-sm text-white_A700">
              Create now
            </Button>
            <Button className="bg-gray_51 cursor-pointer font-semibold min-w-[199px] py-[21px] rounded-[28px] text-bluegray_800 text-center text-sm">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default CreateEventPopupModal;
