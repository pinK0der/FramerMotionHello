import { motion } from "framer-motion"

export default function TabBtn()
{
    const textInBtn = "Click";

    return(<div className="center-box">
        <motion.button
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, y: -25 }}
            transition={{type: "spring", stiffness: 400, damping: 10 }}
        >{textInBtn}</motion.button>
    </div>);
}