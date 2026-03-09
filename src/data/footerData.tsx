import { FaHouse, FaFacebookF } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export const socialMediaData = [
  {
    name: "Facebook",
    icon: <FaFacebookF className="footer-icon" />,
    username: "@corteclassico"
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="footer-icon" />,
    username: "@corteclassico"
  },
  {
    name: "Twitter",
    icon: <FaTwitter className="footer-icon" />,
    username: "@corteclassico"
  },
  {
    name: "Tiktok",
    icon: <FaTiktok className="footer-icon" />,
    username: "@corteclassico"
  }
]

export const contactData = [
  {
    type: "Telefone",
    icon: <BsFillTelephoneFill className="footer-icon" />,
    username: "+ 55 987 654 321"
  },
  {
    type: "Email",
    icon: <MdEmail className="footer-icon" />,
    username: "companyemail@gmail.com"
  },
  {
    type: "Endereço",
    icon: <FaHouse className="footer-icon" />,
    username: "123 Vila Mariana, São Paulo, Brasil"
  }
]