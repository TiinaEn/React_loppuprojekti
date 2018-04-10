const baseurl='/apptravel'

export function signin(loginRequest) {
    fetch(baseurl + "/login", {
        method: 'POST',
        headers: {'Content-Type':'application/json', 'Authorization' : 'Bearer' + },
        body: JSON.stringify(user)
    })
        .then(function (response) {
            if (response.status === 200)
                return (response.ok)
            else
                throw new Error("error")
        });
}
    export function signup () {
        fetch(baseurl + "/signup", {
            method: 'POST',
            headers: {'Content-Type':'application/json', 'Authorization' : 'Bearer' + },
            body: JSON.stringify(user)
            }
        )

}