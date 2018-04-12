import React, {Component} from 'react';

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

export function updateEntry(destinations, callback) {
    fetch('/travelapp/destinations/'+destinations.id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(destinations)
    })
        .then((function (response) {
            callback();
        }));

}

export function deleteEntry(id) {
    return fetch('/travelapp/destinations/'+id, {
        method: 'DELETE'
    })
        .then(function (response) {
        })
}

export default ServiceClient;
export function fetchall() {

}