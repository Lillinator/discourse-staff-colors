import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", (api) => {
  const observer = new MutationObserver(() => {
    // Handle user cards
    const userCards = document.querySelectorAll(".user-card");
    
    userCards.forEach(card => {
      const srOnly = card.querySelector(".sr-only");
      const shield = card.querySelector("svg.d-icon-shield-halved:not([data-role])");
      
      if (srOnly && shield) {
        const text = srOnly.textContent || "";
        if (text.includes("admin")) {
          shield.setAttribute("data-role", "admin");
        } else if (text.includes("moderator")) {
          shield.setAttribute("data-role", "moderator");
        }
      }
    });
    
    // Handle user profiles
    const userProfiles = document.querySelectorAll(".user-profile-names");
    
    userProfiles.forEach(profile => {
      const srOnly = profile.querySelector(".sr-only");
      const shield = profile.querySelector("svg.d-icon-shield-halved:not([data-role])");
      
      if (srOnly && shield) {
        const text = srOnly.textContent || "";
        if (text.includes("admin")) {
          shield.setAttribute("data-role", "admin");
        } else if (text.includes("moderator")) {
          shield.setAttribute("data-role", "moderator");
        }
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
