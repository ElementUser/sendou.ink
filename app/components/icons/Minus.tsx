export function MinusIcon({ className, alt }: { className?: string, alt: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			{alt !== "" && <title>{alt}</title>}
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M20 12H4"
			/>
		</svg>
	);
}
