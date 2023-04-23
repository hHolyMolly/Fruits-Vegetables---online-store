import { bodyLock, bodyUnLock } from "../functions/body_lock.js";

function burger() {
   const menuBody = document.querySelector("[data-menu]");

   const setOpenMenu = () => {
      menuBody.classList.add("_active");

      bodyLock();
   };

   const setCloseMenu = () => {
      menuBody.classList.remove("_active");

      bodyUnLock();
   };

   if (menuBody) {
      document.addEventListener("click", (e) => {
         const eTarget = e.target;

         if (eTarget.closest("[data-menu-open]")) setOpenMenu();

         if (eTarget.closest("[data-menu-close]")) setCloseMenu();

         if (eTarget.closest("[data-menu-wrapper]")) setCloseMenu();

         if (eTarget.closest(`.scroll-to[href*="#"]`)) setCloseMenu();
      });
   }
}

export default burger;
