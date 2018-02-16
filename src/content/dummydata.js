// dummy data simulating NoSQL database schema

/*
SCHEMA
pages = [
  { name: String,
    id: Integer,
    blog_title: String,
    blog_text: String,
    isHome: boolean,
    left_icons: [ Integer, ... ],
    right_icons: [ // if [] keep the previous inside right icons 
      { 
        title: String, 
        date: String, 
        icon_id: Integer,
        icon_thumbnail: String, // initially undefined empty
        page_id: Integer
      },
      ...
    ]
  },
  ...
];

icons = [
  {
    id: Integer,
    thumbnail_img: String, // filename
    pano_img: String, // filename
    rotateY: Integer
    title: String,
    city: String,
    country: String,
    date: String,
    location: {lat: -1, long: -1},
  },

*/

export const pages = [
  {
    name: 'Home',
    id: 1,
    blog_title: 'Welcome to my Travelling 360 Blog',
    blog_text: 'This VR blog has been an idea of mine for a long time! I\'m very excited to show you the 360 photos I\'ve taken on my travels! \n\n These 360 photos started as a street art project. \n\n Click around and enjoy!',
    isHome: true,
    left_icons: [1, 2, 3], // featured photos
    right_icons: [
      { title: 'North America', date: 'Feb 2017 - Present', icon_id: 1, page_id: 2 },
      { title: 'Eastern Europe', date: 'April-May, 2017', icon_id: 2, page_id: 3 },
    ]
  },
  {
    name: 'North America',
    id: 2,
    blog_title: 'North America', // travels in Seattle and Oakland',
    blog_text: 'This ', //VR blog has been an idea of mine for a long time! I\'m very excited to show you the 360 photos I\'ve taken on my travels! \n\n These 360 photos started as a street art project. \n\n Click around and enjoy!',
    isHome: false,
    left_icons: [2, 8],
    right_icons: [
      { title: 'Seattle, WA', date: 'Feb 2017 - Present', icon_id: 1, page_id: 6 },
      { title: 'Oakland, CA', date: 'Feb 2017 - Present', icon_id: 8, page_id: 5 }
    ]
  },
  {
    name: 'Eastern Europe',
    id: 3,
    blog_title: 'Eastern Europe Trip',
    blog_text: 'Went to Germany, Czech Republic, etc. etc.',
    isHome: false,
    left_icons: [2],
    right_icons: [
      { title: 'Germany', date: 'Feb-May 2017', icon_id: 3, page_id: 4 },
      { title: 'Czech Republic', date: 'Feb 2017', icon_id: 2, page_id: 8 }
    ]
  },
  {
    name: 'Germany',
    id: 4,
    blog_title: 'Germany',
    blog_text: 'Filler text.',
    isHome: false,
    left_icons: [3, 2, 6, 7],
    right_icons: [
      { title: 'Berlin', date: 'Feb 2017', icon_id: 3, page_id: 6 },
      { title: 'Dresden', date: 'May 2017', icon_id: 6, page_id: 7 }
    ] // if empty keep the previous inside right icons 
  },
  {
    name: 'California',
    id: 5,
    blog_title: 'Oakland',
    blog_text: 'Filler text.',
    isHome: false,
    left_icons: [8],
    right_icons: [] // if empty keep the previous inside right icons 
  },
  {
    name: 'Washington',
    id: 6,
    blog_title: 'Seattle',
    blog_text: 'Filler text.',
    isHome: false,
    left_icons: [1, 9],
    right_icons: [] // if empty keep the previous inside right icons 
  },
  {
    name: 'Berlin',
    id: 6,
    blog_title: 'Berlin',
    blog_text: 'Filler text.',
    isHome: false,
    left_icons: [3],
    right_icons: [] // if empty keep the previous inside right icons 
  },
  {
    name: 'Dresden',
    id: 7,
    blog_title: 'Dresden',
    blog_text: 'Filler text.',
    isHome: false,
    left_icons: [6, 5, 7],
    right_icons: [] // if empty keep the previous inside right icons 
  },
  {
    name: 'Czech Republic',
    id: 8,
    blog_title: 'Prague, Czech Republic',
    blog_text: 'Filler text.',
    isHome: false,
    left_icons: [2, 10],
    right_icons: [] // if empty keep the previous inside right icons 
  }
];

export const icons = [
  {
    id: 1,
    thumbnail_img: 'seattle_thumbnail.jpg',
    pano_img: 'seattle.jpg',
    title: 'Seattle Gasworks Park',
    rotateY: -135,
    city: 'Seattle',
    country: 'USA',
    date: 'Feb 18, 2017',
    location: {lat: -1, long: -1},
  },
  {
    id: 2,
    thumbnail_img: 'pragueCastle_thumbnail.jpg',
    pano_img: 'pragueCastle.jpg',
    rotateY: 0,
    title: 'Prague Castle',
    city: 'Prague',
    country: 'Czech Republic',
    date: 'Feb 18, 2017',
    location: {lat: -1, long: -1},
  },
  {
    id: 3,
    thumbnail_img: 'berlin_thumbnail.jpg',
    pano_img: 'berlin.jpg',
    rotateY: -210,
    title: 'Berlin Wall',
    city: 'Berlin',
    country: 'Germany',
    date: '2017',
    location: {lat: -1, long: -1},
  },
  //missing id = 4
  {
    id: 5,
    thumbnail_img: 'dresden_thumbnail.jpg',
    pano_img: 'dresden.jpg',
    rotateY: 0,
    title: 'Dresden Drawn Face',
    city: 'Dresden',
    country: 'Germany',
    date: '2017',
    location: {lat: -1, long: -1},
  },
  {
    id: 6,
    thumbnail_img: 'dresden1_thumbnail.jpg',
    pano_img: 'dresden1.jpg',
    rotateY: 0,
    title: 'Rain Sounds Building',
    city: 'Dresden',
    country: 'Germany',
    date: '2017',
    location: {lat: -1, long: -1},
  },
  {
    id: 7,
    thumbnail_img: 'dresden4_thumbnail.jpg',
    pano_img: 'dresden4.jpg',
    rotateY: 0,
    title: 'Under the Trees',
    city: 'Dresden',
    country: 'Germany',
    date: '2017',
    location: {lat: -1, long: -1},
  },
  {
    id: 8,
    thumbnail_img: 'oakland_thumbnail.jpg',
    pano_img: 'oakland.jpg',
    rotateY: 0,
    title: 'Oakland Tree Street Art',
    city: 'Oakland',
    country: 'USA',
    date: '2017',
    location: {lat: -1, long: -1},
  },
  {
    id: 9,
    thumbnail_img: 'seattle3_thumbnail.jpg',
    pano_img: 'seattle3.jpg',
    rotateY: 0,
    title: 'Bull and Dragon Street Art',
    city: 'Steattle',
    country: 'USA',
    date: '2017',
    location: {lat: -1, long: -1},
  },
  {
    id: 10, 
    thumbnail_img: 'prague2_thumbnail.jpg',
    pano_img: 'prague2.jpg',
    rotateY: 0,
    title: 'Outer Walls of Prague Castle',
    city: 'Prague',
    country: 'Czech Republic',
    date: '2017',
    location: {lat: -1, long: -1},
  },
];

export default {
  pages,
  icons
};