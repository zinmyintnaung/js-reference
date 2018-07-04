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
                }else{
                    //show profile
                    ui.showProfile(data.profile);
                }
            });
    }else{
        //clear profile
        ui.clearProfile();
    }
})