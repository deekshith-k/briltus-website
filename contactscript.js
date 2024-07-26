let form = document.querySelector("#ajax_contact");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  var formData = new FormData(form);

  try {
    const response = await fetch("php file hosted link", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    if (data.success) {
      alert("Email Sent Successfully");
      form.reset();
    } else {
      alert("Failed To Send Email");
    }
  } catch (error) {
    console.error("Error: ", error);
  }
});
