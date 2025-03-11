const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


/*
<div class="card">
  <div class="card-img">
      <img src="img/male1.png" alt="" id="img">
  </div>
  <div class="card-info">
      <h3 id="name"></h3>
      <span id="role"></span>
      <span id="email"></span>
  </div>
</div>
*/


const gridContainerElement = document.querySelector(".grid-container")

for (i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i]
  const toRender = `<div class="card">
    <div class="card-img">
        <img src=${member.img} alt="" id=${member.name}>
    </div>
    <div class="card-info">
        <h3 id="name">${member.name}</h3>
        <span id="role">${member.role}</span>
        <a href="#" id="email">${member.email}</a>
    </div>
  </div>`

  gridContainerElement.innerHTML += toRender
}


