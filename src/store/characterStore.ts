import {ICharacterStoreData} from "../contract/data";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Simulate} from "react-dom/test-utils";

const initialState:ICharacterStoreData = {
    pagination: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    },
    data: [],
    loading: false
}

export const fetchCharacterData = createAsyncThunk('character/fetchCharacterData', async (page: number = 1) => {
    try{
        let result = await fetch('https://rickandmortyapi.com/graphql', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `query($page: Int) {
                            characters(page: $page) {
                                info {
                                  count,
                                  pages,
                                  next,
                                  prev
                                }
                              results {
                                  id,
                                  name,
                                  status,
                                  species,
                                  gender,
                                  origin {
                                    id,
                                    name,
                                  },
                                  location {
                                    id,
                                    name,
                                  },
                                  image,
                                }
                            }
                }`,
                variables: {
                    page: page
                }
            })
        })
            .then(res => res.json())
        return {
            pagination: result.data?.characters?.info,
            data: result.data?.characters?.results,
        }
    }catch (err){
        return initialState
    }
})

export const characterSlice = createSlice({
    name: 'character',
    initialState: initialState,
    reducers:{},
    extraReducers: {
        [fetchCharacterData.pending.toString()]: (state, action) => {
            state.loading = true
        },
        [fetchCharacterData.fulfilled.toString()]: (state, action:PayloadAction<ICharacterStoreData>) => {
            console.log(action?.payload)
            state.pagination = action?.payload?.pagination
            state.data = action?.payload?.data
            state.loading = false
        },
        [fetchCharacterData.rejected.toString()]: (state, action:PayloadAction<ICharacterStoreData>) => action?.payload,
    }
})

export const {} = characterSlice.actions

export default characterSlice.reducer