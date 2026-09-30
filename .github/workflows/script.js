const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#mainNav");
menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#mainNav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#shareBtn")?.addEventListener("click", async () => {
  const data = { title: "VANABHOOMI", text: "VANABHOOMI – இயற்கை, சூழியல் மற்றும் விழிப்புணர்வு", url: location.href };
  try {
    if (navigator.share) await navigator.share(data);
    else {
      await navigator.clipboard.writeText(location.href);
      alert("Website link copied!");
    }
  } catch(e) {}
});
