class Github {
  constructor() {
    this.client_id = 'dfd70ce2f781e4d58230';
    this.client_secret = '94514543efb0507e79e6015c555a06f584c196dd';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
    const profile = await profileResponse.json();

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repos = await repoResponse.json();

    return {
      profile,repos
    }
  
  }

  




}


