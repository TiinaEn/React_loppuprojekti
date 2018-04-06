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
export default ServiceClient;
export function fetchall() {

}