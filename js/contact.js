/* =========================================================
   contact.js — contact.html only
   Builds a mailto: link from the form fields so the message
   is sent through the visitor's own email app. No backend.
   ========================================================= */

function buildMailtoLink(name, email, message){
  const to = "rk.doerga@unasat.sr";
  const subject = `Portfolio contact from ${name}`;
  const body = `${message}\n\n—\n${name}\n${email}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function initContactForm(){
  const form = document.getElementById("contact-form");
  if (!form) return;

  const submitBtn = document.getElementById("contact-submit");
  const originalLabel = submitBtn ? submitBtn.textContent : "";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()){
      form.reportValidity();
      return;
    }

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (submitBtn && typeof window.t === "function"){
      submitBtn.textContent = window.t("contact.form.sending");
    }

    window.location.href = buildMailtoLink(name, email, message);

    setTimeout(() => {
      if (submitBtn) submitBtn.textContent = originalLabel;
    }, 2200);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initContactForm();
});
