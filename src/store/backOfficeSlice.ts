import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  Education,
  Experience,
  PerosnalInfo,
  ResponseFormApi,
  Skills,
} from "../pages/Home/type";
import { BASE_API, pathUrl } from "../configs/configs";
import { AboutMeContent, MainContent } from "../pages/Back-Office/type";

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
    const response = await axios.patch<ResponseFormApi<MainContent>>(
      `${BASE_API}${pathUrl.aboutMe.get}/${params.id}`,
      {
        ...params.data,
      }
    );

    return response.data;
  }
);

export const updateAboutMe = createAsyncThunk(
  "backoffice/updateAboutMe",
  async (params: { id: string; data: AboutMeContent }) => {
    console.log(params.data);
    const response = await axios.patch<ResponseFormApi<AboutMeContent>>(
      `${BASE_API}${pathUrl.aboutMe.get}/${params.id}`,
      {
        ...params.data,
      }
    );

    return response.data.data;
  }
);

export const updatePersonalInfo = createAsyncThunk(
  "backoffice/updatePersonalInfo",
  async (params: { id: string; data: PerosnalInfo[]; removeId: string[] }) => {
    console.log(params.data);
    const response = await axios.patch<ResponseFormApi<PerosnalInfo[]>>(
      `${BASE_API}${pathUrl.personalInfo.patch}/${params.id}`,
      {
        data: [...params.data],
        removeId: params.removeId,
      }
    );

    return response.data.data;
  }
);

export const updateEducation = createAsyncThunk(
  "backoffice/updateEducation",
  async (params: { id: string; data: Education[]; removeId: string[] }) => {
    console.log(params.data);
    const response = await axios.patch<ResponseFormApi<Education[]>>(
      `${BASE_API}${pathUrl.education.patch}/${params.id}`,
      {
        education: [...params.data],
        removeIdsEducation: params.removeId,
      }
    );

    return response.data.data;
  }
);

export const updateExperience = createAsyncThunk(
  "backoffice/updateExperience",
  async (params: { id: string; data: Experience[]; removeId: string[] }) => {
    console.log(params.data);
    const response = await axios.patch<ResponseFormApi<Experience[]>>(
      `${BASE_API}${pathUrl.experience.patch}/${params.id}`,
      {
        exp: [...params.data],
        removeIdsExperience: params.removeId,
      }
    );

    return response.data.data;
  }
);

export const updateSkill = createAsyncThunk(
  "backoffice/updateSkill",
  async (params: { id: string; data: Skills[]; removeId: string[] }) => {
    console.log(params.data);
    const response = await axios.patch<ResponseFormApi<Skills[]>>(
      `${BASE_API}${pathUrl.skill.patch}/${params.id}`,
      {
        data: [...params.data],
        removeIds: params.removeId,
      }
    );

    return response.data.data;
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
