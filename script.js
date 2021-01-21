const dropdowns = document.querySelectorAll(".dropdown")

const addChildrenClass = (parent, className) => {
  [...parent.children].forEach((c) => c.classList.add(className))
}

const removeChildrenClass = (parent, className) => {
  [...parent.children].forEach((c) => c.classList.remove(className))
}

dropdowns.forEach((d) => {
  d.addEventListener("click", () => {
    if (!d.classList.contains("active")) {
      // make all dropdowns unactive
      dropdowns.forEach((d) => {
        d.classList.remove("active")
        removeChildrenClass(d, "active")
      })
      // then add active class to the clicked dropdown
      d.classList.add("active")
      addChildrenClass(d, "active")
    } else {
      d.classList.remove("active")
      removeChildrenClass(d, "active")
    }
  })
})
