import React, { useEffect, useState } from "react";
import './index.css'
import axiosInstance from "../../Util/axios";
import { useDispatch } from "react-redux";
import { handleFilter } from "../../data/slices/countries";

export default function SelectElement() {
  const dispatch= useDispatch()
  const handleSelect=(region:string)=>{
    dispatch(handleFilter(({region:region})))
  }

  return (
    <div className="selectContainer">
      <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-400 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
 >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
  );
}
