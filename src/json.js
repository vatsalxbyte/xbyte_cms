import Img from './assets/xbytesmalllogo.png' 

const TASKS = [
  {
    id: 1,
    status: "new",
    image: Img,
    time: "8 hrs",
    days: "5 days left",
  },
  {
    id: 2,
    status: "pending",
    image: Img,
    time: "6 hrs",
    days: "6 days left",
    done: false,
  },
  {
    id: 3,
    status: "done",
    image: Img,
    time: "13 hrs",
    days: "4 days left",
  },
  {
    id: 4,
    status: "new",
    time: "22 hrs",
    image: Img,
    days: "2 days left",
    done: true,
  },
  {
    id: 5,
    status: "pending",
    image: Img,
    time: "2 hrs",
    days: "1 day left",
    newOrder: true,
    done: false,
  },
  {
    id: 6,
    status: "done",
    time: "20 hrs",
    image: Img,
    days: "11 days left",
    done: true,
  },
  {
    id: 7,
    status: "new",
    image: Img,
    time: "8 hrs",
    days: "5 days left",
  },
  // Add your new task objects here
  {
    id: 8,
    status: "pending",
    image: Img,
    time: "10 hrs",
    days: "3 days left",
    done: false,
  },
  {
    id: 9,
    status: "new",
    time: "12 hrs",
    image: Img,
    days: "7 days left",
    done: false,
  },
];

export default TASKS;
