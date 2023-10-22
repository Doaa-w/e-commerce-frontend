/* eslint-disable prettier/prettier */

import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import  { ChangeEvent } from 'react'
import { sortProducts } from "./slices/products/productSlice";

const Sort =() => {
    const dispatch:AppDispatch =useDispatch();

    const handelChange = (event:ChangeEvent<HTMLSelectElement>)=> {
        const sortKeyword=event.target.value;
        dispatch(sortProducts(sortKeyword));
       }

       return (
        <div>
            <label htmlFor="sort">sort</label>
            <select name="sort"id="sort" onChange={handelChange}>
             <option value='id' defaultValue='id'>id</option>
             <option value='name'>name</option>

            </select>

        </div>

       )
}
export default Sort
