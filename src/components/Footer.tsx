/* eslint-disable prettier/prettier */
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {
    
    return (
        <div className='p-5 mb-0 bg-white space-y-4'>
            <p className=' h-10 flex justify-center text-blue-600 text-xl'>Follow Us On :</p>
        <div className='flex items-center justify-center space-x-12 '>
           <a href='https://twitter.com/'>
            <TwitterIcon />
            </a>
           <a href='https://www.facebook.com/'>
            <InstagramIcon/>
            </a>
            <a href='https://www.instagram.com/'>
            <FacebookIcon/>
            </a>
        </div>
       <i className='flex items-center justify-center  text-blue-600 '> Copyright &copy; 2023 SDA-DOAA.ALOTIBI</i>
        </div>
    )
}
export default Footer

