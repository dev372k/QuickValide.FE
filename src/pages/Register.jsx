import { useState } from "react";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import GoogleIcon from "../assets/google.svg";
import EyeOpen from "../assets/eye-open.svg";
import EyeClosed from "../assets/eye-closed.svg";

function Register() {
  const navigate = useNavigate();

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPasswordConfirmShown, setIsPasswordConfirmShown] = useState(false);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  function onSubmit(e) {
    console.log(getValues().password, getValues().passwordConfirm);
    if (getValues().password !== getValues().passwordConfirm)
      setDoPasswordsMatch(false);
    else navigate("/dashboard");
  }

  return (
    <main className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 bg-gray-50">
      <div className="absolute top-5 left-5">
        <p className="text-xl md:text-2xl font-semibold tracking-widest text-gray-700">
          LOGO
        </p>
      </div>

      <div className="flex md:w-[30rem] flex-col gap-5 px-5 py-8 my-5 bg-white rounded-lg border-[1px] border-gray-300 w-[90%] sm:w-[25rem]">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-3xl text-center font-medium tracking-widest uppercase">
            Register
          </h2>

          {!doPasswordsMatch && (
            <p className="text-sm font-medium text-white bg-red-500 rounded-sm p-3">
              Passwords don't match
            </p>
          )}

          <div className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border-[1px] border-gray-200 rounded-md w-full text-gray-600 input focus:outline-none focus:border-[#2db2eb] text-md font-medium"
                {...register("name", {
                  required: "Name is required",
                  minLength: [3, "Name cannot be less than characters"],
                })}
              />
              <p className="absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-[#2db2eb] rounded-md text-white">
                Name
              </p>
              {errors?.name && (
                <p className="my-1 text-red-500 text-sm font-medium">
                  {errors?.name?.message}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Email address"
                className="p-3 border-[1px] border-gray-200 input rounded-md w-full focus:outline-none focus:border-[#2db2eb]  text-md font-medium text-gray-600"
                {...register("email", {
                  required: "Email is required",
                  validate: (value) =>
                    isEmail(value) || "Invalid email provided",
                })}
              />
              <p className="absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-[#2db2eb] rounded-md text-white">
                Email address
              </p>
              {errors?.email && (
                <p className="my-1 text-red-500 text-sm font-medium">
                  {errors?.email?.message}
                </p>
              )}
            </div>
            <div>
              <div className="flex items-center w-full relative">
                <input
                  type={isPasswordShown ? "text" : "password"}
                  placeholder="Password"
                  className="p-3 border-[1px] border-gray-200 input rounded-md w-full mr-auto focus:outline-none focus:border-[#2db2eb]  text-md font-medium text-gray-600"
                  {...register("password", {
                    required: "Password is required",
                    minLength: [8, "Password cannot be less than 8 characters"],
                  })}
                />
                <p className="absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-[#2db2eb] rounded-md text-white">
                  Password
                </p>

                <img
                  src={isPasswordShown ? EyeClosed : EyeOpen}
                  alt="Eye open icon"
                  className={`absolute top-1/2 -translate-y-1/2 right-2 ${
                    isPasswordShown ? "mt-3 -mr-[20px]" : "mt-1"
                  }`}
                  width={isPasswordShown ? 48 : 32}
                  height={isPasswordShown ? 48 : 32}
                  onClick={() => setIsPasswordShown(!isPasswordShown)}
                />
              </div>
              {errors?.password && (
                <p className="my-1 text-red-500 text-sm font-medium">
                  {errors?.password?.message}
                </p>
              )}
            </div>
            <div>
              <div className="flex items-center w-full relative">
                <input
                  type={isPasswordConfirmShown ? "text" : "password"}
                  placeholder="Password Confirmation"
                  className="p-3 border-[1px] border-gray-200 input rounded-md w-full mr-auto focus:outline-none focus:border-[#2db2eb] text-md font-medium text-gray-600"
                  {...register("passwordConfirm", {
                    required: "Password confirmation is required",
                    minLength: [8, "Password cannot be less than 8 characters"],
                  })}
                />
                <p className="absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-[#2db2eb] rounded-md text-white">
                  Password Confirmation
                </p>

                <img
                  src={isPasswordConfirmShown ? EyeClosed : EyeOpen}
                  alt="Eye open icon"
                  className={`absolute top-1/2 -translate-y-1/2 right-2 ${
                    isPasswordConfirmShown ? "mt-3 -mr-[20px]" : "mt-1"
                  }`}
                  width={isPasswordConfirmShown ? 48 : 32}
                  height={isPasswordConfirmShown ? 48 : 32}
                  onClick={() =>
                    setIsPasswordConfirmShown(!isPasswordConfirmShown)
                  }
                />
              </div>
              {errors?.passwordConfirm && (
                <p className="my-1 text-red-500 text-sm font-medium">
                  {errors?.passwordConfirm?.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between gap-2 flex-wrap">
              <button
                type="submit"
                className="p-2 w-1/2 text-md font-semibold text-white bg-[#2db2eb] rounded-md"
              >
                Register
              </button>
            </div>
          </div>

          <div className="flex items-center text-md text-gray-600 gap-1">
            <p>Already have an account?</p>
            <Link
              to="/login"
              className="text-[#2db2eb] font-semibold underline"
            >
              Login.
            </Link>
          </div>
        </form>

        <div className="flex items-center justify-center gap-3 text-sm sm:text-md p-3 border-[1px] border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img src={GoogleIcon} alt="Google icon" />
          <p className="text-md font-medium text-gray-600">
            Continue with Google instead
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;
