import { create } from "zustand";
import { INITIAL_EVENTS } from "../data";

const useCalender = create((set) => ({
  currentEvents: INITIAL_EVENTS,
  setCurrentEvents: (events) => set({ currentEvents: events }),
}));

export default useCalender;
