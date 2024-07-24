import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import GoogleIcon from "../assets/google.svg";
import EyeOpen from "../assets/eye-open.svg";
import EyeClosed from "../assets/eye-closed.svg";
import Logo from "../assets/logo-no-background.svg";

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

  useEffect(function () {
    document.title = "Register";
  }, []);

  function onSubmit(e) {
    console.log(getValues().password, getValues().passwordConfirm);
    if (getValues().password !== getValues().passwordConfirm)
      setDoPasswordsMatch(false);
    else navigate("/dashboard");
  }

  return (
    <main className="w-full min-h-screen flex justify-center ">
      <div className="md:flex hidden min-h-screen relative overflow-hidden bg-accent-1 bg-opacity-75 w-[30%] lg:w-[45%]">
        <p className="text-text-primary text-9xl top-1/2 -translate-y-1/2 absolute opacity-20 font-bold">
          Ideas to Reality
        </p>
      </div>

      <div className="flex items-center justify-center w-full">
        <Link className="absolute top-5 left-5" to="/">
          <img src={Logo} alt="Logo" className="h-8" />
        </Link>
        <div className="flex md:w-[30rem] flex-col gap-5 px-5 py-8 my-5 bg-white rounded-lg border-[1px] border-gray-300 w-[90%] sm:w-[25rem]">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-3xl text-center font-medium tracking-widest">
              Register
            </h2>

            {!doPasswordsMatch && (
              <p className="text-sm font-medium text-white bg-error rounded-lg p-3">
                Passwords don't match
              </p>
            )}

            <div className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 border-[1px] border-gray-200 rounded-md w-full text-text-primary input focus:outline-none focus:border-accent-2 text-md font-medium"
                  {...register("name", {
                    required: "Name is required",
                    minLength: [3, "Name cannot be less than characters"],
                  })}
                />
                <p className="absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-accent-2 rounded-md text-white">
                  Name
                </p>
                {errors?.name && (
                  <p className="my-1 text-error text-sm font-medium">
                    {errors?.name?.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Email address"
                  className="p-3 border-[1px] border-gray-200 input rounded-md w-full focus:outline-none focus:border-accent-2  text-md font-medium text-text-primary"
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) =>
                      isEmail(value) || "Invalid email provided",
                  })}
                />
                <p className="absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-accent-2 rounded-md text-white">
                  Email address
                </p>
                {errors?.email && (
                  <p className="my-1 text-error text-sm font-medium">
                    {errors?.email?.message}
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center w-full relative">
                  <input
                    type={isPasswordShown ? "text" : "password"}
                    placeholder="Password"
                    className="p-3 border-[1px] border-gray-200 input rounded-md w-full mr-auto focus:outline-none focus:border-accent-2  text-md font-medium text-text-primary"
                    {...register("password", {
                      required: "Password is required",
                      minLength: [
                        8,
                        "Password cannot be less than 8 characters",
                      ],
                    })}
                  />
                  <p className="absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-accent-2 rounded-md text-white">
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
                  <p className="my-1 text-error text-sm font-medium">
                    {errors?.password?.message}
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center w-full relative">
                  <input
                    type={isPasswordConfirmShown ? "text" : "password"}
                    placeholder="Password Confirmation"
                    className="p-3 border-[1px] border-gray-200 input rounded-md w-full mr-auto focus:outline-none focus:border-accent-2 text-md font-medium text-text-primary"
                    {...register("passwordConfirm", {
                      required: "Password confirmation is required",
                      minLength: [
                        8,
                        "Password cannot be less than 8 characters",
                      ],
                    })}
                  />
                  <p className="absolute top-0 transition-all -translate-y-1/2 left-2 text-xs p-1 px-2 bg-accent-2 rounded-md text-white">
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
                  <p className="my-1 text-error text-sm font-medium">
                    {errors?.passwordConfirm?.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="p-2 text-md font-semibold text-white bg-accent-1 rounded-md"
              >
                Register
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 text-sm sm:text-md p-3 border-[1px] border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer">
              <img src={GoogleIcon} alt="Google icon" />
              <p className="text-md font-medium text-text-primary">
                Continue with Google instead
              </p>
            </div>
          </form>

          <div className="flex items-center self-center text-md text-text-primary gap-1">
            <p>Already have an account?</p>
            <Link to="/login" className="text-accent-2 font-semibold ">
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
