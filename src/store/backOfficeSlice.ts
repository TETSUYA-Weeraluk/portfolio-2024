import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ResponseFormApi } from "../pages/Home/type";
import { BASE_API, pathUrl } from "../configs/configs";
import { MainContent } from "../pages/Back-Office/type";

export interface backofficeState {
  loading?: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState: backofficeState = {
  loading: "idle",
  error: "",
};

export const updateMainContent = createAsyncThunk(
  "backoffice/updateMainContent",
  async (params: { id: string; data: MainContent }) => {
    console.log(params.data);
    const mainContent = await axios.patch<ResponseFormApi<MainContent>>(
      `${BASE_API}${pathUrl.aboutMe.get}/${params.id}`,
      {
        ...params.data,
      }
    );

    return mainContent.data;
  }
);

const backofficeSlice = createSlice({
  name: "backoffice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateMainContent.pending, (state, action) => {
      state.loading = action.payload;
    });
    builder.addCase(updateMainContent.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(updateMainContent.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "";
    });
  },
});

export default backofficeSlice.reducer;
