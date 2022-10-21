import { defineStore } from "pinia";

export const useEventStore = defineStore('event', () => {
  const events = [
    {uuid: 1, eventName: "Work", eventStartTime: "7:30a", eventEndTime: "4p", slug: "/slug"},
    {uuid: 2, eventName: "Leg Day", eventStartTime: "5p", eventEndTime: "6:30p", slug: "/slug"},
  ]
}) 