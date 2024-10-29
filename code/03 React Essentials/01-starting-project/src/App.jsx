
import imgComponent from "./assets/components.png";
import imgComponent1 from "./assets/state-mgmt.png";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";

import { CORE_CONCEPTS } from "./data";

function App() {
	return (
	<div>
		<Header />
		<main>
			<section id="core-concepts">
				<h2>Core Concepts</h2>
				<ul>
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
					{CORE_CONCEPTS.map((concept) => (
						<CoreConcepts
							title={concept.title}
							description={concept.description}
							image={concept.image}
						/>
					))}
					<CoreConcepts
						{...CORE_CONCEPTS[0]}
					/>
				</ul>
			</section>
		</main>
	</div>
	);
}

export default App;
