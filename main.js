const items = Array.from(document.querySelectorAll(".accordion-item"));

items.forEach((accordionItem) => {
    if (!accordionItem.classList.contains("active")) {
        accordionItem.querySelector(".accordion-body").style.maxHeight = 0;
    }
    accordionItem.querySelector(".accordion-header").addEventListener("click", accordionItemHandler);
});

function accordionItemHandler(e) {
    e.preventDefault();

    const currentAccordionItem = e.target.closest(".accordion-item");
    const currentAccordionBody = currentAccordionItem.querySelector(".accordion-body");

    if (currentAccordionItem.classList.contains("active")) {
        currentAccordionItem.classList.remove("active");
        currentAccordionBody.style.maxHeight = 0;
    } else {
        items.forEach((accordionItem) => {
            accordionItem.classList.remove("active");
            accordionItem.querySelector(".accordion-body").style.maxHeight = 0;
        });
        currentAccordionItem.classList.add("active");
        currentAccordionBody.style.maxHeight = currentAccordionBody.scrollHeight + "px";
    }
}





