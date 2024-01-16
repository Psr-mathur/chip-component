export function CloseIcon({ className = '' }) {
	return (
		<svg
			className={className}
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line
				x1="1"
				y1="11"
				x2="11"
				y2="1"
				stroke="black"
				stroke-width="2"
			/>
			<line
				x1="1"
				y1="1"
				x2="11"
				y2="11"
				stroke="black"
				stroke-width="2"
			/>
		</svg>
	);
}