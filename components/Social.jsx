import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedinIn,FaInstagram } from "react-icons/fa";

const socials =[
    {icon: <FaGithub/>, path:"https://github.com/AmoghGoel02"},
   {icon: <FaLinkedinIn/>, path:"www.linkedin.com/in/amogh-goel"},
    {icon: <FaInstagram/>, path:"https://www.instagram.com/amoghgoel02/"},
    //{icon: <FaTwitter/>, path:""}
]

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item,index)=> {
        return <Link key = {index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
    })}
  </div>;
}

export default Social;