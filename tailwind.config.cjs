/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			colors: {
				primary: "#14b8a6",
				secondary: "#64748b",
				dark: "#0f172a",
				"neutral-5": "#EAEAEA",
				"neutral-20": "#D3D3D3",
				"neutral-40": "#A8A8A8",
				"neutral-60": "#7C7C7C",
				"neutral-80": "#515151",
				"neutral-100-2": "#252525",
			},
			boxShadow: {
				1: "0px 1px 2px rgba(0, 0, 0, 0.05), 0px 1px 3px 1px rgba(0, 0, 0, 0.03)",
				2: "0px 1px 2px rgba(159, 159, 159, 0.1), 0px 2px 6px 2px rgba(149, 149, 149, 0.05)",
				3: "0px 4px 8px 3px rgba(149, 149, 149, 0.05), 0px 2px 2px rgba(37, 37, 37, 0.05)",
				4: "1px 4px 15px rgba(57, 57, 57, 0.1)",
				5: "0px 12.5216px 11.1442px rgba(37, 37, 37, 0.03), 0px 6.6501px 5.91859px rgba(37, 37, 37, 0.02), 0px 2.76726px 2.46286px rgba(37, 37, 37, 0.01)",
				6: "2px 1px 20px rgba(138, 138, 138, 0.1), -2px 1px 10px 1px rgba(0, 0, 0, 0.05)",
				7: "0px 16px 48px rgba(0, 0, 0, 0.25)",
			},
			borderRadius: {
				10: "10px",
				16: "16px",
				20: "20px",
				100: "100px",
			},
			animation: {
				zoom: "zoom-in-zoom-out 1s ease infinite",
			},
			keyframes: {
				"zoom-in-zoom-out": {
					"0%": {
						transform: "scale(1, 1)",
					},
					"50%": {
						transform: "scale(1.2, 1.2)",
					},
					"100%": {
						transform: "scale(1, 1)",
					},
				},
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
