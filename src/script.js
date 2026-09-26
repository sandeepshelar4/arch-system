// Simple JS for interactivity

// Highlight active section when clicked
document.querySelectorAll(".navbar a").forEach(link => {
	link.addEventListener("click", function() {
		document.querySelectorAll(".box").forEach(box => box.style.background = "");
		const target = document.querySelector(this.getAttribute("href"));
		if (target) target.style.background = "#e0f7fa";
	});
});

// Example: Alert when user clicks enquiry link
const enquiryLink = document.querySelector("a[href='enquiry.html']");
if (enquiryLink) {
	enquiryLink.addEventListener("click", e => {
		alert("Redirecting to enquiry page...");
	});
}
