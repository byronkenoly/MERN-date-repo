const create = async (user) => {
    try {
        let response = await fetch('http://localhost:4000/api/users/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        return await response.json();
    } catch (err){
        console.log(err);
    }
}

module.exports = create;