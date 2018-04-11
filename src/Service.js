import React, {Component} from 'react';
const baseurl='/travelapp'
export const ACCESS_TOKEN = 'accessToken';

class ServiceClient extends Component {


    componentDidMount() {
        const baseurl = '/travelapp';
        function fetchall(destinations,callback) {
            return fetch(baseurl + '/destinations/', {
                method: 'GET',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(destinations)
            })
                .then(function (response) {
                    callback(response);
                });
        }
    }


  /*  function fetchone(id, callback) {
        fetch(baseurl + '/destinations/' + id, {accept: 'application/json'})
            .then(function (response) {
                response.json().then(function (json) {
                    if (response.status >= 500)
                        callback(json, response.status);
                    else
                        callback(json);
                });
            });
    }*/
}

export function createEntry(entry, callback) {
    console.dir(entry)
    fetch("/travelapp/create", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(entry)

    })
        .then((function (response) {
            callback();
        }));
}



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


  //  export default ServiceClient;
  //  export function fetchall() {


}