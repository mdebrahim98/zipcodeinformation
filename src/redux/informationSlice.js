import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostalInfo = createAsyncThunk(
  "info/fetchpostalinfo",
  async (postal, { dispatch, getState }) => {
    try {
      const res = await axios.get(`https://api.zippopotam.us/in/${postal}`);
      // dispatch(fetchPostalInfo.fulfilled(res.data));
      return res.data;
    } catch (error) {
      console.log(error.message);
      throw error; // Re-throw the error for further handling
    }
  }
);

const initialState = {
  status: "idle",
  loading: false,
  error: "",
  data: [],
};

const informationslice = createSlice({
  name: "info",
  initialState,
  reducers: {
    clearData: (state) => {
      state.data = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPostalInfo.pending, (state) => {
        state.loading = true;
        state.error = ""; // Reset error when starting a new request
        state.status = "running";
      })
      .addCase(fetchPostalInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.data.splice(0, state.data.length);
        state.data.push(action.payload);
        state.status = "idle";
      })
      .addCase(fetchPostalInfo.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.status = "idle";
        console.error("Rejected:", action.error);
      });
  },
});
export const { clearData } = informationslice.actions;
export default informationslice.reducer;
