import * as FaIcons from "react-icons/fa";
import * as IoIcons  from "react-icons/io"
import * as AiIcons from "react-icons/ai"


export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<IoIcons.IoIosPaper />,
        cName:'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<FaIcons.FaCartPlus />,
        cName:'nav-text'
    },
    {
        title:'Team',
        path:'/team',
        icon:<IoIcons.IoMdPeople />,
        cName:'nav-text'
    },
    {
        title:'Messages',
        path:'/messages',
        icon:<FaIcons.FaEnvelopeOpenText />,
        cName:'nav-text'
    },
    {
        title:'Support',
        path:'/support',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },

]