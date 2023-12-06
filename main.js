$(document).ready(function () {
    const nameElement = $('#name');
    const usernameElement = $('#username');
    const avatarElement = $('#avatar');
    const reposElement = $('#repos');
    const followersElement = $('#followers');
    const followingElement = $('#following');
    const linkElement = $('#link');

    $.ajax({
        url: 'https://api.github.com/users/gustavobotti',
        method: 'GET',
        dataType: 'json',
        success: function (json) {
            nameElement.text(json.name);
            usernameElement.text(json.login);
            avatarElement.attr('src', json.avatar_url);
            reposElement.text(json.public_repos);
            followingElement.text(json.following);
            followersElement.text(json.followers);
            linkElement.attr('href', json.html_url);
        },
        error: function (error) {
            console.error('Ajax error: ', error);
            fetchFallback();
        }
    });

    function fetchFallback() {
        fetch('https://api.github.com/users/gustavobotti')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerText = json.public_repos;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            linkElement.href = json.html_url;
        })
        .catch(function(error) {
            console.error('Fetch error: ', error);
        })
    }
});
