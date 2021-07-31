//html for each role
genManager = (manager) => {
  return `
    <div class="d-flex col-12 align-self-start">
      <div class="card border border-primary m-3 mb-2 mt-2 p-1 pb-1 pt-1">
        <div class="card-body shadow m-3 p-4 bg-light rounded">
          <h4 class="card-title shadow m-2 p-2 rounded bg-primary text-white">${manager.name}</h4>
          <h5 class="card-subtitle m-1 p-2 bg-white">Manager</h5>
          <ul class="list-group list-group-flush m-1 p-2 bg-white">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Office Number: ${manager.office}</li>
            <li class="list-group-item"><a href = "mailto: ${manager.email}">Email: ${manager.email}</a></li>
          </ul>
        </div>
      </div>
    </div>`;
};
genEngineer = (engineer) => {
  return `
  <div class="d-flex col justify-content-evenly">
    <div class="card border border-success m-3 mb-2 mt-2 p-1 pb-1 pt-1">
      <div class="card-body shadow m-3 p-4 bg-light rounded">
        <h4 class="card-title shadow m-2 p-2 rounded text-white" style="background-color: rgb(5, 196, 53);">${engineer.name}</h4>
        <h5 class="card-subtitle m-1 p-2 bg-white">Engineer</h5>
        <ul class="list-group list-group-flush m-1 p-2 bg-white">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item"><a href = "mailto: ${engineer.email}">Email: ${engineer.email}</a></li>
          <li class="list-group-item p-2"><a href = "https://github.com/${engineer.git}" target = "_blank">Github: ${engineer.git}</a></li>
        </ul>
      </div>
    </div>
  </div>`;
};
genIntern = (intern) => {
  return `
  <div class="d-flex col justify-content-evenly">
    <div class="card border border-secondary m-3 mb-2 mt-2 p-1 pb-1 pt-1">
      <div class="card-body shadow m-3 p-4 bg-light rounded">
        <h4 class="card-title shadow m-2 p-2 rounded bg-secondary text-white">${intern.name}</h4>
        <h5 class="card-subtitle m-1 p-2 bg-white">Intern</h5>
        <ul class="list-group list-group-flush m-1 p-2 bg-white">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item"><a href = "mailto: ${intern.email}">Email: ${intern.email}</a></li>
          <li class="list-group-item p-2">School: ${intern.school}</li>
        </ul>
      </div>
    </div>
  </div>`;
};
//take objects in array 'team' => send to makeEmployee() functions above => push new objects (now html blocks) to teamArray 
genFrame = (manager, arrayEmployees) => {
  console.log(manager, arrayEmployees)
  const arrayTeamHtml = [];
  const managerHtml = genManager(manager);
  arrayTeamHtml.push(managerHtml)
  arrayEmployees.forEach(index => {
    switch (index.role) {
      case "Engineer":
        console.log("------------------index inside Eng")
        console.log(index.name)
        const engHtml = genEngineer(index)
        arrayTeamHtml.push(engHtml)
        break;
      case "Intern":
        console.log("------------------index inside Intern")
        console.log(index.name)
        const intHtml = genIntern(index)
        arrayTeamHtml.push(intHtml)
        break;
    }
  });
  //console.log(arrayTeamHtml)
  const joinTeamHtml = arrayTeamHtml.join("");
  //console.log(joinTeamHtml)
  const pageHtml = genPage(joinTeamHtml);  //send team sections into final html function
  return pageHtml;
};
genPage = (teamHtml) => {
  //take teamArray and display in html mockup
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <title>Team Generator</title>
  </head>
  <body>
    <header class="container-fluid shadow-lg p-3 mb-3 mt-3 bg-body rounded text-center">
    <h1 class="text-info">Meet the Team!</h1>
    </header>
    <div class="container">
        <div class="row">
        ${teamHtml}
        </div>
        </div>
      </body>
    </html>`;
}

module.exports = genFrame;
