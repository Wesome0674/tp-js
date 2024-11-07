let closeAcord = document.getElementById("closeAcord");
let boxContainer = document.querySelector(".box-container");

const questionInfo = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.",
        bg : "#f9d161"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.",
        bg : "#cae6e0"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.",
        bg : "#5f8fd7"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet.",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.",
        bg : "#f66455"
    },
];
  
boxContainer.innerHTML = questionInfo
    .map((question) => {
      return `<div class="box" id="box-${question.id}">
          <hr/>
          <div class="info">
           <h2>${question.title}</h2>
           <span style="background-color: ${question.bg} ;"}>${question.id}</span>
          </div>
          <p>${question.question}</p>
        </div>`;
    })
    .join("");

// Now use querySelectorAll to select all the box elements.
let boxes = document.querySelectorAll(".box");

closeAcord.addEventListener("click", () => {
  // Loop through all the boxes and toggle the hidden class
  boxes.forEach((box) => {
    if (box.classList.contains("hidden")) {
      box.classList.remove("hidden");
    } else {
      box.classList.add("hidden");
    }
  });

  // Optionally, toggle the "up" class on the closeAcord button.
  closeAcord.classList.toggle("up");
});
