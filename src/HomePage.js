import React, { useEffect } from "react";

function HomePage() {
	useEffect(() => {
		const handleMessage = (event) => {
			console.log(event.origin);

			if (event.data && event.data.type === "reload") {
				window.location.reload();
			}

			if (event.data && event.data.type === "url") {
				window.open(event.data.url, "_blank");
			}
		};

		window.addEventListener("message", handleMessage);

		return () => {
			window.removeEventListener("message", handleMessage);
		};
	}, []);

	return (
		<div style={{ margin: 0, padding: 0, overflow: "hidden", height: "100vh" }}>
			<iframe
				id="contentFrame"
				src="https://app.emergent.sh/loading-preview?host=mobile-first-react.preview.emergentagent.com&utm_source=share"
				allowFullScreen
				style={{ width: "100%", height: "100%", border: "none" }}
				title="Landing Page"
			></iframe>
		</div>
	);
}

export default HomePage;
