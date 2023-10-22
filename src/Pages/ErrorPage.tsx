/* eslint-disable prettier/prettier */

import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

const ErrorPage = () => {
  return (
    <div>
      <h2> The Page You Are Looking For Is Not There</h2>
      <Link to='/Home'> <Button variant="outlined" color="error">Go To Home Page</Button> 
      </Link>
    </div>
  )
}
export default ErrorPage