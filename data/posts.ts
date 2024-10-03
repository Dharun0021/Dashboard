import { Post } from "@/types/Posts";

const postData: Post[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    body: 'Web development is evolving rapidly with new frameworks and tools. The integration of AI and machine learning will transform the way we interact with websites.',
    date: '2024-09-28',
    author: 'John Doe',
    comments: [
      { id: 'c1', text: 'Great insights on the future of the web!', username: 'TechGuru' },
      { id: 'c2', text: 'AI integration sounds exciting. Thanks for sharing!', username: 'WebDevGuy' },
    ],
  },
  {
    id: '2',
    title: 'Understanding JavaScript Closures',
    body: 'Closures are a fundamental concept in JavaScript, allowing functions to access variables from an outer scope even after the outer function has returned.',
    date: '2024-09-27',
    author: 'Jane Smith',
    comments: [
      { id: 'c3', text: 'This article helped me understand closures better. Thanks!', username: 'CodeMaster' },
      { id: 'c4', text: 'Can you provide more examples?', username: 'JS_Learner' },
    ],
  },
  {
    id: '3',
    title: 'Why React is Still Relevant in 2024',
    body: 'Despite many new frameworks and libraries, React remains one of the most popular choices for building user interfaces due to its flexibility and community support.',
    date: '2024-09-26',
    author: 'Emily Johnson',
    comments: [
      { id: 'c5', text: 'React is my go-to for all projects. Great read!', username: 'FrontendFanatic' },
      { id: 'c6', text: 'Looking forward to the future of React.', username: 'ReactPro' },
    ],
  },
  {
    id: '4',
    title: 'Getting Started with TypeScript',
    body: 'TypeScript brings static typing to JavaScript, improving developer productivity and reducing bugs in large applications. Here’s how to get started with it.',
    date: '2024-09-25',
    author: 'Michael Brown',
    comments: [
      { id: 'c7', text: 'Thanks for the introduction to TypeScript!', username: 'DevBeginner' },
      { id: 'c8', text: 'TypeScript has been a game changer for my projects.', username: 'CodeCraftsman' },
    ],
  },
  {
    id: '5',
    title: 'How to Optimize Web Performance',
    body: 'Optimizing web performance is crucial for user experience. Techniques like lazy loading, minimizing HTTP requests, and using CDNs can drastically improve load times.',
    date: '2024-09-24',
    author: 'Sarah Lee',
    comments: [
      { id: 'c9', text: 'I applied these tips and my site is loading much faster!', username: 'SpeedyWeb' },
      { id: 'c10', text: 'Great tips! Thanks for sharing.', username: 'PerformanceNerd' },
    ],
  },
];

export default postData;
