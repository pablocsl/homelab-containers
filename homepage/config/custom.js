document.querySelectorAll("div.pr-1").forEach(div => {
    if (div.textContent.includes("TEMP")) {
        div.style.display = "none";
    }
});
