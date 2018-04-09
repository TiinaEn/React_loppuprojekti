const baseurl='/apptravel'

export function login(user) {
    fetch(baseurl + "/login", {
        method: 'POST',
        headers: 'application/json',
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
        fetch

}