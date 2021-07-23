let container = document.getElementById("activity-container");
let button = document.getElementById("button");
let activity = document.getElementById("activity-content");
button.addEventListener("click" , () => fetch("https://www.boredapi.com/api/activity")
      .then(response => response.json())
      .then(data => {
        //console.log(data.activity);
          activity.textContent= `
          ${data.activity}
          `
          container.appendChild(activity)
  
      })
)

