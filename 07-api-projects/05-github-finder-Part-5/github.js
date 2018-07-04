class GitHub{
    constructor(){
        this.client_id = '24ee4d4e2fc0bcd83a76';
        this.client_secret = '7bb6b9ffb56b8840e1f33637d8e1a81048b6dff7';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos  = await repoResponse.json();

        return {
            profile,
            repos
        }
    }

}