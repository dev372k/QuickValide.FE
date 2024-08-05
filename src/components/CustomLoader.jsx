import { Spin } from "antd"

function CustomLoader() {
    return <div className="fixed w-full h-screen bg-white z-[2000] inset-0 bg-opacity-70 flex items-center justify-center">
        <Spin size="large" tip="Loading... Please wait" ><div className="p-24 bg-transparent"></div></Spin>

    </div>
}

export default CustomLoader