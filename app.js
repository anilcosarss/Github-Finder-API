// Init github
const github = new Github;
const ui = new UI;

// searchInput 

const searchUser= document.getElementById('searchUser')

// Event listener for search 

searchUser.addEventListener('keyup' , (e) => {

  const userText = e.target.value;

  if (userText !== ''){
    // make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        // Show Alert
        ui.showAlert('User not found' , 'alert alert-danger');

      } else {
        // Show profile
        ui.showProfile(data.profile);

        // Show repos
        ui.showRepos(data.repos);
      }
    })

  } else {
    // Clear Profile 

    ui.clearProfile();
  }


})