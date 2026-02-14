const form = document.getElementById("googleForm");
const loader = document.getElementById("loader");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  loader.classList.remove("hidden");

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    projectTitle: document.getElementById("projectTitle").value,
    description: document.getElementById("description").value,
    date: document.getElementById("date").value
  };

  fetch("https://script.google.com/macros/s/AKfycbzvRRqr5l1PscYr_MTLYAvNd_dnI9g21691b6uoasg47ytKw6q_oVVmGuFITfjsfziktQ/exec", {
  method: "POST",
  body: JSON.stringify(data)
})
.then(res => res.text())
.then(text => {
  console.log(text);
  loader.classList.add("hidden");
  alert("Submitted Successfully ✅");
  form.reset();
})
.catch(err => {
  loader.classList.add("hidden");
  alert("Submission Failed ❌");
  console.error(err);
});


});
