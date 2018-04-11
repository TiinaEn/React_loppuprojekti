const baseurl='/travelapp'
export const ACCESS_TOKEN = 'accessToken';


export function signin(loginRequest) {
    console.log("Accesstoken", ACCESS_TOKEN);
    return fetch(/*baseurl + */"/travelapp/login", {
        method: 'POST',
        headers: {'Content-Type':'application/json', 'Authorization' : 'Bearer' + localStorage.getItem(ACCESS_TOKEN) },
    //    mode: "no-cors",
        body: JSON.stringify(loginRequest)
    })

        .then(response =>{
                if(!response.ok) {
                    console.log("Rejected", response);
                    return Promise.reject(response);
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
    console.log("Accesstoken", ACCESS_TOKEN);
        return fetch(/*baseurl + */"/travelapp/signup", {
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