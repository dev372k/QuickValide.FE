import { motion } from "framer-motion"

function Modal({children, variants, initial, animate, isShown}) {
    return <div  className={`${isShown ?'block' : 'hidden'} w-full p-5 inset-0 h-screen fixed bg-black bg-opacity-30 z-[2000] flex items-center justify-center`}>
        <motion.div variants={variants} initial={initial} animate={animate} className="bg-white border rounded-lg  shadow-sm">
            {children}
        </motion.div>
    </div>
}

export default Modal