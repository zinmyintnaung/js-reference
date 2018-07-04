class GitHub{
    constructor(){
        this.client_id = '24ee4d4e2fc0bcd83a76';
        this.client_secret = '7bb6b9ffb56b8840e1f33637d8e1a81048b6dff7';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }

}