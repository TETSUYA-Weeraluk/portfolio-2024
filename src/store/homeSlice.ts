import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AboutMe, ResponseFormApi } from "../pages/Home/type";
import { BASE_API, pathUrl } from "../configs/configs";

export interface PortfolioState {
  portfolio: AboutMe;
  loading?: "idle" | "pending" | "succeeded" | "failed";
  error?: string;
}

const initialState: PortfolioState = {
  portfolio: {
    id: "",
    name: "",
    nickname: "",
    position: "",
    welcomeText: "",
    image: "",
    content: "",
    imageAboutMe: "",
    PersonalInfo: [],
    Education: [],
    Experience: [],
    Skills: [],
    Projects: [],
    User: {
      id: "",
      email: "",
    },
  },
  loading: "idle",
  error: "",
};

export const fetchPortfolio = createAsyncThunk<AboutMe>(
  "home/fetchPortfolio",
  async () => {
    const response = await axios.get<ResponseFormApi<AboutMe[]>>(
      `${BASE_API}${pathUrl.aboutMe.get}`
    );

    return response.data.data[0];
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPortfolio.pending, (state, action) => {
      state.loading = action.payload;
    });
    builder.addCase(fetchPortfolio.fulfilled, (state, action) => {
      state.portfolio = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(fetchPortfolio.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "";
    });
  },
});

export default homeSlice.reducer;
