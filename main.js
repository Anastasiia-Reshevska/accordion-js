(function() {
const items = (document.querySelectorAll(".accordion-item"));
if (!items || items.length === 0) return null;

items.forEach((accordionItem) => {
    const accordionHeader = accordionItem.querySelector(".accordion-header");
    const accordionBody = accordionItem.querySelector(".accordion-body");
    if (!accordionHeader || !accordionBody) return null;

    if (!accordionItem.classList.contains("active")) {
        accordionBody.style.maxHeight = 0;
    }
    accordionHeader.addEventListener("click", accordionItemHandler);
});

function accordionItemHandler(e) {
    const currentAccordionItem = e.target.closest(".accordion-item");
    const currentAccordionBody = currentAccordionItem.querySelector(".accordion-body");
    if (!currentAccordionItem || !currentAccordionBody) return null;

    if (currentAccordionItem.classList.contains("active")) {
        currentAccordionItem.classList.remove("active");
        currentAccordionBody.style.maxHeight = 0;

    } else {
        items.forEach((accordionItem) => {
            const accordionBody = accordionItem.querySelector(".accordion-body");
            if (!accordionBody || !accordionItem) return null;
            
            if (accordionBody) accordionBody.style.maxHeight = 0;
                accordionItem.classList.remove("active");
        });
        currentAccordionItem.classList.add("active");
        currentAccordionBody.style.maxHeight = currentAccordionBody.scrollHeight + "px";
    }
}
})();





