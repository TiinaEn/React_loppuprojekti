import {ACCESS_TOKEN} from "../Service";


async function getCurrentUser() {
    let current;
    await fetch("/apptravel/user/me", {
        headers:{'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
    }).then(function(response){
        // VIRHEKÄSITTELY TÄHÄN
        return response.json();
    }).then(function(user) {
        current = user;
    });
    return current;
}


export {getCurrentUser};