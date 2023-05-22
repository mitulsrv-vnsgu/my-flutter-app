import React from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { loginDeviceAuth } from "service/api";
import * as yup from "yup";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

import useForm from "hooks/useForm";

import "react-toastify/dist/ReactToastify.css";

const SigninDefaultPage = () => {
  const [login, setLogin] = React.useState();
  const formValidationSchema = yup
    .object()
    .shape({
      username: yup
        .string()
        .required("Username is required")
        .email("Please enter valid email"),
      password: yup.string().required("Password is required"),
    });
  const form = useForm(
    { username: "", password: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );
  const navigate = useNavigate();

  function login1(data) {
    const req = {
      data: { username: data?.username, password: data?.password },
    };

    loginDeviceAuth(req)
      .then((res) => {
        setLogin(res?.data);

        localStorage.setItem("token", JSON.stringify(res?.data?.data?.token));

        navigate("/dashboardone", { state: {} });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Invalid username or password!");
      });
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="bg-red_50 flex flex-row items-center justify-start p-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1356px] mb-[38px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[143px] items-center justify-start md:mt-0 mt-[18px] w-[47%] md:w-full">
              <Text
                className="leading-[40.00px] text-bluegray_900 text-center w-1/2 sm:w-full"
                as="h3"
                size="4xl"
              >
                Manage your work more effectively
              </Text>
              <Img
                src="images/img_workingtime.svg"
                className="h-[483px]"
                alt="WorkingTime"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 flex-col gap-[46px] items-center justify-end p-11 md:px-10 sm:px-5 rounded-[20px] shadow-bs1 w-[43%] md:w-full">
              <Text className="mt-[22px] text-bluegray_800" as="h4" size="3xl">
                Login to Avori
              </Text>
              <div className="flex flex-col items-center justify-start w-[88%] md:w-full">
                <div className="bg-white_A700 border border-indigo_51 border-solid flex flex-col items-start justify-end p-[17px] rounded w-[98%] md:w-full">
                  <div className="flex flex-row items-start justify-between ml-1.5 md:ml-[0] w-[65%] md:w-full">
                    <Img
                      src="images/img_group.svg"
                      className="h-[18px] w-[18px]"
                      alt="Group"
                    />
                    <Text className="mt-[3px] text-bluegray_800" size="md">
                      Login with Google
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between mt-[54px] w-full">
                  <Line className="bg-indigo_51 h-px my-1.5 w-[39%]" />
                  <Text className="!font-normal text-bluegray_800" size="md">
                    Or
                  </Text>
                  <Line className="bg-indigo_51 h-px my-1.5 w-[39%]" />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-14 w-[98%] md:w-full">
                  <Text className="text-bluegray_800" size="md">
                    Email
                  </Text>
                  <Input
                    wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex pb-4 pr-[35px] pt-[21px] rounded w-full"
                    className="font-normal p-0 placeholder:text-bluegray_400 sm:pr-5 text-base text-bluegray_400 text-left w-full"
                    type="email"
                    onChange={(e) => {
                      form.handleChange("username", e);
                    }}
                    errors={form?.errors?.username}
                    value={form?.values?.username}
                    name="email One"
                    placeholder="Infor@gmail.com"
                    prefix={
                      <Img
                        src="images/img_icon.svg"
                        className="ml-5 mr-4 my-[18px]"
                        alt="Icon "
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start mt-[31px] w-[98%] md:w-full">
                  <Text className="text-bluegray_800" size="md">
                    Password
                  </Text>
                  <Input
                    wrapClassName="bg-white_A700 border border-indigo_51 border-solid flex pr-[35px] py-[19px] rounded w-full"
                    className="font-normal p-0 placeholder:text-bluegray_400 sm:pr-5 text-base text-bluegray_400 text-left w-full"
                    type="password"
                    onChange={(e) => {
                      form.handleChange("password", e);
                    }}
                    errors={form?.errors?.password}
                    value={form?.values?.password}
                    name="password"
                    placeholder="************"
                    prefix={
                      <Img
                        src="images/img_icon_20X20.svg"
                        className="ml-5 mr-4 my-[18px]"
                        alt="Icon "
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-row items-start justify-between mt-[113px] w-[99%] md:w-full">
                  <CheckBox
                    className="font-medium text-bluegray_800 text-left text-sm"
                    inputClassName="mr-[5px]"
                    name="Remember"
                    id="Remember"
                    label="Remember"
                  ></CheckBox>
                  <Text
                    className="mt-[5px] text-bluegray_800 underline"
                    size="md"
                  >
                    Forgot password?
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-deep_orange_300 cursor-pointer font-bold min-w-[414px] sm:min-w-full mt-20 py-[21px] rounded-[28px] text-center text-sm text-white_A700"
                  onClick={() => {
                    form.handleSubmit(login1);
                  }}
                >
                  LOGIN
                </Button>
                <Text className="mt-14 text-bluegray_800" size="md">
                  <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                    You don’t have an account yet?
                  </span>
                  <span className="text-bluegray_800 font-inter text-left text-sm font-medium">
                    {" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-deep_orange_300 font-inter text-left text-sm font-medium underline"
                  >
                    Sign up
                  </a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SigninDefaultPage;
