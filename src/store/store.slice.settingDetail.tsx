import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

interface Step1 {
  description: any;
  nameOfCollection: any;
  imageURL: any;
  totalNftCount: any;
  dailyRewardAmount: any;
  duration: any;
  rewardToken: any;
}
interface Step2 {
  twitterLink: any;
  discordLink: any;
  telegramLink: any;
  mediumLink: any;
  githubLink: any;
}
interface UserState {
  step1: Step1;
  step2: Step2;
}

const initialState = {
  step1: {
    description: "",
    nameOfCollection: "",
    imageURL: "",
    totalNftCount: "",
    dailyRewardAmount: "",
    duration: "",
    rewardToken: "",
  },
  step2: {
    twitterLink: "",
    discordLink: "",
    telegramLink: "",
    mediumLink: "",
    githubLink: "",
  },
} as UserState;

export const settingDetailSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDetailSettingStep1Value: (state: UserState, action: PayloadAction<Step1>) => {
      state.step1 = action.payload;
    },
    setDetailSettingStep2Value: (state: UserState, action: PayloadAction<Step2>) => {
      state.step2 = action.payload;
    },
  },
});

export const { setDetailSettingStep1Value, setDetailSettingStep2Value } = settingDetailSlice.actions;
// export const selectCount = (state: RootState) => state.user.value;
export default settingDetailSlice.reducer;
