(() => {
  "use strict";

  const form = document.getElementById("cs-contact-form");
  const status = document.getElementById("cs-form-status");
  if (!form || !status) return;

  // Change this to the real dealership address or replace this handler with your CRM/form API.
  const dealershipEmail = "sales@autohaus-demo.de";

  form.addEventListener("submit", event => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      status.className = "alert alert-danger mb-0";
      status.textContent = "Please complete the required fields.";
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent(`Vehicle enquiry — ${data.get("interest")} — ${data.get("name")}`);
    const body = encodeURIComponent(
      `New vehicle enquiry\n\n` +
      `Name: ${data.get("name")}\n` +
      `Email: ${data.get("email")}\n` +
      `Phone: ${data.get("phone") || "-"}\n` +
      `Interest: ${data.get("interest")}\n` +
      `Preferred date: ${data.get("date") || "-"}\n` +
      `Preferred time: ${data.get("time") || "-"}\n\n` +
      `Message:\n${data.get("message") || "-"}`
    );

    // Functional no-backend fallback: opens the visitor's configured mail client.
    window.location.href = `mailto:${dealershipEmail}?subject=${subject}&body=${body}`;

    status.className = "alert alert-success mb-0";
    status.textContent = "Your email client should now open with the enquiry prepared.";
    form.reset();
    form.classList.remove("was-validated");
  });
})();
