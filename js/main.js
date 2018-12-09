window.onload = function() {
  console.log('ciao');
  Helper.fetchTeam();
};

class Helper {
  constructor() {

  }

  static fetchTeam() {
    fetch("https://teenplatform-287ce.firebaseio.com/users.json?orderBy=%22approved_public%22&equalTo=%22true_true%22")
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {

        Helper.teamHtml(myJson)
      });
  }

static teamHtml(team_array){

  for(let member in Object.keys(team_array)) {



    //create member container
    var member_container = document.createElement("div");
    member_container.className += "member_container"
    document.getElementById("team_members_container").appendChild(member_container);

    const img_src = team_array[Object.keys(team_array)[member]]["avatarURL"];
    const member_name = team_array[Object.keys(team_array)[member]]["name"] + " " + team_array[Object.keys(team_array)[member]]["lastname"];
    const member_bio = team_array[Object.keys(team_array)[member]]["bio"];
    const member_title = team_array[Object.keys(team_array)[member]]["title"];
    const template = `
      <div class="avatar_container">
        <img src="${img_src}" alt="">
      </div>
      <div class="text_container">
        <div class="name_container">
          ${member_name}
        </div>
        <div class="name_title_container">
          ${member_title}
        </div>
        <div class="bio_container">
        ${member_bio}
        </div>
      </div>
    `
    saferInnerHTML(member_container, template);



//

    //create bio section


  }
}

}
