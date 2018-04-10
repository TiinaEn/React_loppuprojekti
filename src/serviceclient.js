const baseurl='/travelapp'
const ACCESS_TOKEN = 'accessToken';


export function signin(loginRequest) {
    return fetch(/*baseurl + */"/travelapp/login", {
        method: 'POST',
        headers: {'Content-Type':'application/json', 'Authorization' : 'Bearer' + localStorage.getItem(ACCESS_TOKEN) },
        body: JSON.stringify(loginRequest)
    })

        .then(response =>{
                if(!response.ok) {
                    return Promise.reject(response.json());
                }
                return response.json();
            }
        );
/*.then(function (response) {
    if (response.status === 200)
        return
    else
        throw new Error("error")
});*/
}
    export function signup (SignupRequest) {
        fetch(/*baseurl + */"/travelapp/signup", {
            method: 'POST',
            headers: {'Content-Type':'application/json', 'Authorization' : 'Bearer' + localStorage.getItem(ACCESS_TOKEN) },
            body: JSON.stringify(SignupRequest)
        })
            .then(response => {
                    if (!response.ok) {
                        console.log("jotain");
                        console.log(response);
                        return Promise.reject(response.json());
                    }
                    return response.json();
                }
            );



}