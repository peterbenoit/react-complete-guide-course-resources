import img from "./assets/react-core-concepts.png";
import imgComponent from "./assets/components.png";
import imgComponent1 from "./assets/state-mgmt.png";

const reactDescriptions = ["Super", "Awesome", "Cool", "Good", "Great"];

function getRandomReactDescription() {
	return reactDescriptions[Math.floor(Math.random() * reactDescriptions.length)];
}

function Header() {
	const description = getRandomReactDescription();
	return (
		<header>
		<img src={img} alt="Stylized atom" />
		<h1>React Essentials</h1>
		<p>
			{description} React concepts you will need for almost any app you are
			going to build!
		</p>
		</header>
	);
}

// function CoreConcepts( { title, description, image } ) {
// 	return (
// 		<main>
// 			<h2>{title}</h2>
// 			<img src={image} alt="Components" />
// 			<p>{description}</p>
// 		</main>
// 	);
// }

// using 'props' as the object to derive the values, but it can be any word
function CoreConcepts(props) {
	return (
		<main>
			<h2>{props.title}</h2>
			<img src={props.image} alt="Components" />
			<p>{props.description}</p>
		</main>
	);
}

function App() {
	return (
	<div>
		<Header />
		<CoreConcepts
			title='Core Concepts'
			description='React is a JavaScript library for building user interfaces.'
			image={imgComponent}
		/>
		<CoreConcepts
			title='Core Concepts 1'
			description='React is a JavaScript library for building user interfaces 1.'
			image={imgComponent1}
		/>
	</div>
	);
}

export default App;
