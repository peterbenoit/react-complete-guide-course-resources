import img from "./assets/react-core-concepts.png";

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

function App() {
	return (
	<div>
		<Header />
		<main>
		<h2>Time to get started!</h2>
		</main>
	</div>
	);
}

export default App;
