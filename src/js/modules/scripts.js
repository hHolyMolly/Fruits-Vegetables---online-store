import { bodyLock } from "./functions/body_lock.js";

export function scrollTo() {
   const anchors = document.querySelectorAll('.scroll-to[href*="#"]');

   anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
         e.preventDefault();

         const blockID = anchor.getAttribute("href").substring(1);
         const section = document.getElementById(blockID);

         if (section) {
            const topOffset = 140;

            const elementPosition = section.getBoundingClientRect().top;

            window.scrollBy({
               top: elementPosition - topOffset,
               behavior: "smooth",
            });
         }
      });
   });
}

export function formAction() {
   const divForm = document.querySelector("[data-form]");

   const divError = document.querySelector("[data-form-error]");

   const req = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

   divForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = document.forms.sendEmail;

      const emailValue = formData.elements.email.value;

      async function sendData() {
         // Здесь должен быть API запрос на отправку данных
      }

      if (emailValue.length > 0 && req.test(String(emailValue).toLowerCase())) {
         divError.classList.remove("_active");

         sendData().then(() => {
            divForm.querySelector("input").value = "";
            const modalComplete = document.querySelector("#modal-complete");

            modalComplete.classList.add("_active");
            bodyLock();
         });
      } else {
         divError.classList.add("_active");
      }
   });

   divForm.querySelector("input").addEventListener("input", (e) => {
      if (e.target.value.length > 0 && req.test(String(e.target.value).toLowerCase())) {
         divError.classList.remove("_active");
      }
   });
}
