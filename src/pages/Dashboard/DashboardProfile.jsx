import { useSelector } from "react-redux";
import { useState } from "react";
import { request } from "../../helpers/requestHelper";
import { useDispatch } from "react-redux";
import { saveUser } from "../../services/userSlice";
import { useForm } from "react-hook-form";

import { message } from "antd";

function deriveInitials(name) {
  let initials = "";
  const nameArray = name?.trim()?.split(" ");
  for (let i in nameArray) initials += nameArray[i][0]?.toUpperCase();

  return initials;
}



function DashboardProfile() {
  let user =  useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const {register: register1, handleSubmit: handleSubmit1, formState: {errors: errors1}, reset: reset1} = useForm()
  const {register: register2, handleSubmit: handleSubmit2, formState: {errors: errors2}, reset: reset2} = useForm()

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingPassword, setIsLoadingPassword] = useState(false)

  async function refreshUser() {
    const res = await request(
      `https://api.quickvalide.com/api/Auth/${user.id}`
    );
    dispatch(saveUser(res.data));
  }


  async function handleNameChange(data) {
      const { name } = data

      setIsLoading(true)
      const res = await request(`https://api.quickvalide.com/api/Auth/${user.id}`, 'PUT', { name })

      if (res.status) {
        message.success('Profile updated successfully')
        refreshUser()
       
      } else {
        message.error('An error occured while updating profile')
      }

      setIsLoading(false)
  }

  async function handlePasswordChange(data) {
    if (data.password !== data.passwordConfirm) return message.error('Passwords don\'t match')
    setIsLoadingPassword(true)
    const res = await request('https://api.quickvalide.com/api/Auth/change-password', 'PATCH', {password: data.password, confirmPassword: data.passwordConfirm})
    setIsLoadingPassword(false)
    
    if (res.status) {
      message.success('Password changed successfully')
    } else {
      message.error('An error occured while changing password')
    }
    reset2()
  }
  return (
    <div className="w-full overflow-y-scroll h-[calc(100vh-157px)]">
      <div className="w-full h-32 bg-gray-50 border-b-2 relative">
        <div className="absolute w-24 h-24 md:w-28 md:h-28 left-5 top-full -translate-y-1/2  bg-gradient-to-r from-accent-1 to-accent-2 rounded-full">

      <div className="w-[93%] h-[93%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white  p-4   rounded-full text-2xl font-semibold text-text-primary  flex items-center justify-center shadow-md">{deriveInitials(user?.name)}</div>
        </div>
    
      </div>
      <div className="px-6 sm:px-8 sm:w-[75%]  md:w-auto lg:px-32 my-16 flex flex-col gap-24 md:gap-32">
        <form className="flex flex-col f w-full gap-3" onSubmit={handleSubmit1(handleNameChange)}>
          <div className="text-text-primary text-3xl tracking-wider font-bold">
            <h2 className="">Profile

            </h2>
          </div>


          <div className="flex flex-col gap-1 items-start w-full">
            <label htmlFor="name" className="text-sm text-text-secondary">Name:</label>
            <input type="text" placeholder="Name" id="name" defaultValue={user.name}  className="w-full md:w-1/2 p-3 rounded-md border-[1px] text-sm  text-text-primary focus:outline-none focus:border-accent-2" {...register1('name', {
              required: 'Name is required',
              minLength: 3,
              value: user.name
            })}/>
            {errors1?.name && errors1.name.type === "required" && <p className="text-xs text-error font-medium">Name is required</p>}
            {errors1?.name && errors1.name.type === "minLength" && <p className="text-xs text-error font-medium">Name cannot be less than 3 characters</p>}
          </div>

          <div className="flex flex-col gap-1 items-start w-full">
            <label htmlFor="name" className="text-sm text-text-secondary">Email address:</label>
            <input type="text" placeholder="Email address" id="email" name="email" defaultValue={user.email} disabled className="w-full md:w-1/2 p-3 rounded-md border-[1px] text-sm text-text-secondary"/>
          </div>

          <div className="flex items-center gap-2 text-text-primary text-sm w-full md:w-1/2">
            <button className=" p-2 px-3 rounded-md border-[1px] w-1/2">Cancel</button>
            <button type="submit" className="p-2 px-3 rounded-md bg-accent-1 text-white w-1/2 flex items-center justify-center gap-2 disabled:bg-gray-600" disabled={isLoading}>{isLoading ? 'Loading...' : 'Update'}</button>
          </div>
        </form>
        
        
        <form className="flex flex-col f w-full gap-3" onSubmit={handleSubmit2(handlePasswordChange)}>
          <div className="text-text-primary text-3xl tracking-wider font-bold">
            <h2 className="">Change Password

            </h2>
          </div>

          <div className="flex flex-col gap-1 items-start w-full">
            <label htmlFor="password" className="text-sm text-text-secondary">Password:</label>
            <input type={isPasswordShown ? 'text' : 'password'} placeholder="Password" id="password"  className="w-full md:w-1/2 p-3 rounded-md border-[1px] text-sm text-text-primary focus:outline-none focus:border-accent-2" {...register2('password', {
              required: 'Password is required',
              minLength: 8
            })}/>
            {errors2?.password && errors2.password.type === "required" && <p className="text-xs text-error font-medium">Password is required</p>}
            {errors2?.password && errors2.password.type === "minLength" && <p className="text-xs text-error font-medium">Password cannot be less than 8 characters</p>}
          </div>

          <div className="flex flex-col gap-1 items-start w-full">
            <label htmlFor="password" className="text-sm text-text-secondary">Confirm:</label>
            <input type={isPasswordShown ? 'text' : 'password'} placeholder="Password Confirm" id="passwordConfirm"  className="w-full md:w-1/2 p-3 rounded-md border-[1px] text-sm  text-text-primary focus:outline-none focus:border-accent-2" {...register2('passwordConfirm', {
              required: 'Password confirmation is required',
              minLength: 8
            })}/>
            {errors2?.passwordConfirm && errors2.passwordConfirm.type === "required" && <p className="text-xs text-error font-medium">Password confirmation is required</p>}
            {errors2?.passwordConfirm && errors2.passwordConfirm.type === "minLength" && <p className="text-xs text-error font-medium">Password confirmation cannot be less than 8 characters</p>}
          </div>
           
          <div className="flex items-center text-sm gap-2 text-text-primary">
            <input type="checkbox" id="showPassword" onChange={() => setIsPasswordShown(prev => !prev)}/>
            <label htmlFor="showPassword">Show password</label>
          </div>

          <div className="flex items-center gap-2 text-text-primary text-sm w-full md:w-1/2">
            <button className=" p-2 px-3 rounded-md border-[1px] w-1/2">Cancel</button>
            <button type="submit" className="p-2 px-3 rounded-md bg-accent-1 text-white w-1/2 disabled:bg-gray-700 " disabled={isLoadingPassword}>{isLoadingPassword ?  'Loading...' : 'Change'}</button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default DashboardProfile;
