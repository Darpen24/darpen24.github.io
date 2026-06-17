document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-project-filter]");
  const projectCards = document.querySelectorAll("[data-project-category]");
  const projectSections = document.querySelectorAll("[data-project-section]");

  function updateSectionVisibility() {
    projectSections.forEach((section) => {
      const visibleCards = section.querySelectorAll("[data-project-category]:not(.is-hidden)");
      section.classList.toggle("is-hidden", visibleCards.length === 0);
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.projectFilter;

      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      projectCards.forEach((card) => {
        const categories = card.dataset.projectCategory.split(" ");
        const shouldShow = filter === "all" || categories.includes(filter);
        card.classList.toggle("is-hidden", !shouldShow);
      });

      updateSectionVisibility();
    });
  });

  updateSectionVisibility();
});
