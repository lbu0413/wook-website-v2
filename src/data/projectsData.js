import todoReact from "../img/todo-preview.png";
import carrotGame from "../img/mini-game-preview.png";
import instaClone from "../img/instagram-clone-preview.png";
import todoVue from "../img/todo-vue.png";
import paintJS from "../img/paint-app-preview.png";
import twitterClone from "../img/twitter-clone-preview.png";
import shopifyProject from "../img/shopify-preview.png";

var react = <i className="devicon-react-original colored"></i>;
var vue = <i class="devicon-vuejs-plain colored"></i>;
var js = <i className="devicon-javascript-plain colored"></i>;
var css = <i className="devicon-css3-plain colored"></i>;
var html = <i className="devicon-html5-plain colored"></i>;
var sass = <i className="devicon-sass-original colored"></i>;
var firebase = <i class="devicon-firebase-plain-wordmark colored"></i>;

export const projectsData = [
	{
		id: 1,
		title: "Shopify Challenge with NASA APIs",
		summary: `Spitter, a Twitter clone I made in React environment with Firebase for backend and database. Firebase has this extensive amount of useful APIs. Login with google authentication is super easy with Firebase.`,
		icons: [firebase, react, js],
		img: shopifyProject,
		link: "https://lucid-aryabhata-a0f2f8.netlify.app/",
		hubLink: "https://github.com/lbu0413/shopify-challenge",
	},

	{
		id: 2,
		title: "Spitter (Twitter Clone)",
		summary: `Spitter, a Twitter clone I made in React environment with Firebase for backend and database. Firebase has this extensive amount of useful APIs. Login with google authentication is super easy with Firebase.`,
		icons: [firebase, react, js],
		img: twitterClone,
		link: "https://lbu0413.github.io/twitter-clone-react/#/",
		hubLink: "https://github.com/lbu0413/twitter-clone-react",
	},

	{
		id: 3,
		title: "Paint App",
		summary: `Made a paint app using the Canvas API. There are a lot of interesting APIs to experiment with. Covered core functionalities of paint application such as change colors, change size of the brush, fill the entire canvas, and even save the drawing.`,
		icons: [html, css, js],
		img: paintJS,
		link: "https://romantic-franklin-e90c54.netlify.app/",
		hubLink: "https://github.com/lbu0413/paintjs",
	},
	{
		id: 4,
		title: "Carrot Game(JS Mini Game)",
		summary:
			"Made a mini game using pure vanilla Javascript. I have always thought using React without fully knowing how Javscript works is very inefficient. While making the game, I felt my DOM manipulating skill was improved a lot. Also implemented the audio element with javascript Audio () constructor for the first time in the project. Currently, this project is full of functions in one file. To improve, I am going to implement Class and try to refactor my codes; so they can be clean and easy to read.",
		icons: [html, css, js],
		img: carrotGame,
		link: "https://awesome-panini-ee3b90.netlify.app",
		hubLink: "https://github.com/lbu0413/carrot-game",
	},
	{
		id: 5,
		title: "Todo App",
		summary: `One of the first projects I made to practice in React environment.
        Implemented React.memo, and functional updates to practice Performance Optimization. I learned that it is very important to keeping states immutable when updating in React components because it can optimize performance by only picking out what has changed and just simply renders them. While making the Todo-App, I tried to follow every rule of immutability: using concat method instead of push, or using spread operation to copy objects, or also could use immer.`,
		icons: [react, js, sass],
		img: todoReact,
		link: "https://kind-shaw-bafe54.netlify.app/",
		hubLink: "https://github.com/lbu0413/react-todo",
	},
	{
		id: 6,
		title: "Todo App with Vue",
		summary:
			"Another Todo Application I made but this time with Vue. Getting your hands on making an application is essential especailly when you are learning for the first time and I think a Todo app is the best fit for that because you can practice all parts of CRUD just by making the todo App. Unlike React Todo App above, this time, data goes into the local storage. ",
		icons: [vue, css, js],
		img: todoVue,
		link: "https://youthful-ride-32c2e9.netlify.app/",
		hubLink: "https://github.com/lbu0413/vue-todo-app",
	},

	{
		id: 7,
		title: "Instagram Clone",
		summary:
			"Made an Instagram clone with Vue. I always wanted to study Vue because it is a very trending framework today and it was definitley worth trying. In this application, I tried implementing everything I studied: props, custom events, vue-routers, and vuex. The most entertaining part about this app is probably the filiter functionality. you can actually attach a photo and put a filter on! just like Instagram",
		icons: [vue, css, js],
		img: instaClone,
		link: "https://eloquent-agnesi-b35b45.netlify.app/",
		hubLink: "https://github.com/lbu0413/vue-instagram-clone",
	},
];
