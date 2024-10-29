export default function TabButton({ active, onClick, children }) {
	return (
		<li>
			<button
				onClick={onClick}
				className={active ? "active" : ""}
			>
				{children}
			</button>
		</li>
	);
}
