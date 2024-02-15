import { selector } from "recoil";
import { courseState } from "../atoms/course";

export const courseLoading= selector({
    key:'courseLoadingState',
    get:({get})=>{
        const state= get(courseState);
        return state.isLoading;
    }
})

export const courseTitle= selector({
    key:'courseTitleState',
    get:({get})=>{
        const state= get(courseState);
        if(state.course){
        return state.course.title;
    }
    return "";
    }
})



export const courseDetails = selector({
    key: 'courseDetailsState',
    get: ({get}) => {
      const state = get(courseState);
  
      return state.course;
    },
  });
  
  
  export const coursePrice = selector({
    key: 'coursePriceState',
    get: ({get}) => {
      const state = get(courseState);
      if (state.course) {
          return state.course.price;
      }
      return "";
    },
  });
  
  export const courseImage = selector({
    key: 'courseImageState',
    get: ({get}) => {
      const state = get(courseState);
      if (state.course) {
          return state.course.imgageLink;
      }
      return "";
    },
  });

  export const coursePub = selector({
    key: 'coursePubState',
    get: ({get}) => {
      const state = get(courseState);
      if (state.course) {
          return state.course.published;
      }
      return "";
    },
  });