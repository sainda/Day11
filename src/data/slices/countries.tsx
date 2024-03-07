import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState={
    searchCountries:[],
    filterCountries:[]
}

const slice=createSlice({
    name:'countries',
    initialState:initialState,
    reducers:{
        handleFilter(state,action:PayloadAction<{region:string}>){
            const {region}=action.payload
            
        }
    }

})
export const {handleFilter}=slice.actions
export const reducer=slice.reducer
export default slice