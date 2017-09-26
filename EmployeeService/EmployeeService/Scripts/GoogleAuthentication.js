/// <reference path="jquery-1.10.2.min.js" />
function getAccessToken() {
    if (location.hash) {
        if (location.hash.split('access_token=')) {
            var accessToken = location.hash.split('access_token=')[1].split('&')[0];
            if (accessToken) {
                isUserRegistered(accessToken);
            }
        }
    }
}

function isUserRegistered(accessToken) {
    $.ajax({
        url: '/api/Account/UserInfo',
        method: 'GET',
        headers: {
            'contentType': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        success: function (response) {
            if (response.HasRegistered) {
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('userName', response.Email);
                window.location.href = 'data.html';
            } else {
                signupExternalUser(accessToken);
            }
        }
    });
}

function signupExternalUser(accessToken) {
    $.ajax({
        url: '/api/Account/RegisterExternal',
        method: 'POST',
        headers: {
            'contentType': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        success: function () {
            window.location.href = "/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=http%3a%2f%2flocalhost%3a62676%2fLogin.html&state=GerGr5JlYx4t_KpsK57GFSxVueteyBunu02xJTak5m01";
        }
    });
}