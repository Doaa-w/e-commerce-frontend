/* eslint-disable prettier/prettier */
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {
    
    return (
        <div>
            <p className='bg-white flex justify-center'>Follow Us On :</p>
        <div className='flex items-center justify-center space-x-12 p-5 mb-0 bg-white'>
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
        </div>
    )
}
export default Footer

