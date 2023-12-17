/* eslint-disable prettier/prettier */

import { useDispatch } from "react-redux";
import  { ChangeEvent } from 'react'

import { AppDispatch } from "../redux/store";
import { sortProducts } from "../redux/slices/products/ProductSlice";

import SortIcon from '@mui/icons-material/Sort';

const Sort =() => {
    const dispatch =useDispatch<AppDispatch> ();

    const handelChange = (event:ChangeEvent<HTMLSelectElement>)=> {
        const sortKeyword=event.target.value;
        dispatch(sortProducts(sortKeyword));
       }

       return (
        <div>
            
            <select name="sort" id="sort" onChange={handelChange}>
            <option value='sort by' defaultValue='sort by'>sort by..</option>
            <option value='name' defaultValue='name'>name</option>
             <option value='price' >price from law to high</option>  
             <option value='price high' >price from high to law</option>
            </select>
             <SortIcon fontSize='medium' />
        </div>

       )
}
export default Sort
