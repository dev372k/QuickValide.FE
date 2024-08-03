
import { useSelector } from "react-redux";
import EyeOpen from "../../assets/eye-open.svg";
import EyeClosed from "../../assets/eye-closed.svg";
import { useState, useEffect } from "react";
import { request } from "../../helpers/requestHelper";
import { useDispatch } from "react-redux";
import { saveUser } from "../../services/userSlice";

function deriveInitials(name) {
  let initials = "";
  const nameArray = name?.split(" ");
  for (let i in nameArray) initials += nameArray[i][0]?.toUpperCase();

  return initials;
}


function DashboardProfile() {
  let user =  useSelector(state => state.user.user);
  const dispatch = useDispatch();

 
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPasswordConfirmShown, setIsPasswordConfirmShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(function () {
    console.log('Hello world')
    setName(user.name);
    setEmail(user.email);
  }, []);

  async function refreshUser() {
    const res = await request(
      `https://api.quickvalide.com/api/Auth/${user.id}`
    );
    dispatch(saveUser(res.data));
  }

  async function handleChangeProfile(e) {
    e.preventDefault();
    setSuccessMessage("");
    setError("");
    setIsLoading(true);
    const res = await request(
      `https://api.quickvalide.com/api/Auth/${user.id}`,
      "PUT",
      { name }
    );

    if (res.status) {
      setSuccessMessage("success");
      setTimeout(function() {
        setSuccessMessage('')
      }, 3000)
      refreshUser();
    } else {
      setError("error")
      setTimeout(function() {
        setError('')
      }, 3000)
    }
    setIsLoading(false);
  }
  return (
    <div className="h-[calc(100vh-64px)] justify-center w-full">
      <div className="md:w-[45rem] lg:w-[60rem] w-full  p-5 flex gap-5  flex-col md:flex-row items-start  mx-auto">
      <div className="w-full p-5 rounded-lg border-[1px] bg-white flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-text-primary">Profile</h2>
        <div className="w-16 h-16 rounded-full bg-accent-2 flex items-center justify-center text-2xl font-medium text-white">
          {deriveInitials(user.name)}
        </div>

        {successMessage && (
          <p className="text-xs font-medium text-white bg-success p-2 rounded-md w-full">
            Updated Successfully.
          </p>
        )}
        {error && (
          <p className="text-xs font-medium text-white bg-error p-2 rounded-md w-full">
            An error occured while updating.
          </p>
        )}

        <form className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-text-secondary text-sm">
              Name:
            </label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              defaultValue={user.name}
              // value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 rounded-md bg-gray-50 border-[1px] text-sm text-text-primary focus:outline-none focus:border-accent-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-text-secondary text-sm">
              Email address:
            </label>
            <input
              type="text"
              placeholder="Email Address"
              id="email"
              name="email"
              disabled={true}
              defaultValue={user.email}
              // value={email}
              className="p-2 rounded-md bg-gray-50 border-[1px] text-sm text-text-primary focus:outline-none focus:border-accent-2 disabled:text-text-secondary cursor-not-allowed"
            />
          </div>

          <div className="flex items-center gap-2 w-full text-xs font-semibold">
            <button className="w-full p-2 border-[1px] rounded-md hover:bg-gray-50 transition-all">
              Cancel
            </button>
            <button
              onClick={handleChangeProfile}
              className="w-full p-2 bg-accent-2 text-white rounded-md hover:bg-opacity-60 transition-all disabled:bg-text-secondary disabled:text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
      </div>

      <div className="w-full  p-5 rounded-lg border-[1px] bg-white flex flex-col gap-8">
        <h2 className="text-2xl font-medium text-text-primary">
          Change Password
        </h2>

        <form className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-text-secondary text-sm">
              Password:
            </label>
            <div className="relative">
              <input
                type={isPasswordShown ? "text" : "password"}
                placeholder="Enter password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 rounded-md bg-gray-50 border-[1px] text-sm text-text-primary focus:outline-none focus:border-accent-2 w-full"
              />
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
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-text-secondary text-sm">
              Password Confirmation:
            </label>
            <div className="relative">
              <input
                type={isPasswordConfirmShown ? "text" : "password"}
                placeholder="Password Confirmation"
                id="passwordConfirmation"
                name="passwordConfirmation"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="p-2 rounded-md bg-gray-50 border-[1px] text-sm text-text-primary focus:outline-none focus:border-accent-2 w-full"
              />
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
          </div>

          <div className="flex items-center gap-2 w-full text-xs font-semibold">
            <button className="w-full p-2 border-[1px] rounded-md hover:bg-gray-50 transition-all">
              Cancel
            </button>
            <button className="w-full p-2 bg-accent-2 text-white rounded-md hover:bg-opacity-60 transition-all">
              Update
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default DashboardProfile;
