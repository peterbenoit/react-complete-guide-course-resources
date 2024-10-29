import "./CoreConcepts.css";

// destructuring props
// function CoreConcepts( { title, description, image } ) {
// 	return (
// 		<li>
// 			<h2>{title}</h2>
// 			<img src={image} alt="Components" />
// 			<p>{description}</p>
// 		</li>
// 	);
// }

// using 'props' as the object to derive the values, but it can be any word
export default function CoreConcepts(props) {
	return (
		<li>
			<h2>{props.title}</h2>
			<img src={props.image} alt="Components" />
			<p>{props.description}</p>
		</li>
	);
}
