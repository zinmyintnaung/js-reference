// Instantiate Github
const github = new GitHub;

// Instantiate UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listenser
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if(userText !== ''){
        //console.log(userText);
        // Make HTTP call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    //show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                }else{
                    //show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                    //console.log(data.repos)
                }
            });
    }else{
        //clear profile
        ui.clearProfile();
    }
})