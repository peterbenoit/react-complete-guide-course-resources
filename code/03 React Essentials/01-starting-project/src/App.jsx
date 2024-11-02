import {useState} from "react";


import imgComponent from "./assets/components.png";
import imgComponent1 from "./assets/state-mgmt.png";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/Header/TabButton";

function App() {
	const stateArray = useState('JSX');
	const [tabContent, setTabContent] = useState();

	function handleSelectByInnerText(e) {
		// console.log(e.target.innerText);
		// tabContent = e.target.innerText;
		setTabContent(e.target.innerText.toLowerCase());
	}
	function handleSelectByValue(value) {
		// console.log(value);
		// tabContent = value;
		setTabContent(value.toLowerCase());
	}
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

					{CORE_CONCEPTS.map((concept) => (
						<CoreConcepts
							key={concept.title}
							{...concept}
						/>
					))}

					<CoreConcepts
						{...CORE_CONCEPTS[0]}
					/>
				</ul>
			</section>
			<section id="examples">
				<h2>Examples</h2>
				<menu>
					<TabButton active={tabContent === 'jsx'} onClick={handleSelectByInnerText}>JSX</TabButton>
					<TabButton active={tabContent === 'components'} onClick={handleSelectByInnerText}>Components</TabButton>
					<TabButton active={tabContent === 'props'} onClick={handleSelectByInnerText}>Props</TabButton>
					<TabButton active={tabContent === 'state'} onClick={() => handleSelectByValue('State')}>State</TabButton>
				</menu>
				{ !tabContent ? (
					<p>Please select an example.</p>
				):(
					<div id="tab-content">
						<h3>{EXAMPLES[tabContent].title}</h3>
						<p>{EXAMPLES[tabContent].description}</p>
						<pre>
							<code>{EXAMPLES[tabContent].code}</code>
						</pre>
					</div>
				) }
			</section>
		</main>
	</div>
	);
}

export default App;
