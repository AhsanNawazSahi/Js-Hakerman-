function fun() {

    let Input = document.getElementById('textinput')
    if (Input.value == '') {
        alert('please enter input value')
    }
    else {
        let a = [
            `Person name is ${Input.value}`,
            `Hacking gmail ID through connecton...wait `,
            `${Input.value + Math.round(Math.random() * 100)}@gmail.com found...!`,
            'Hacking "Facebook" Account through gmail...',
            'Username Identifying...wait!!! ',
            `Username Found...@${Input.value + Math.round(Math.random() * 100)} `,
            'Hacking Password please wait for a while...',
            'Failed to get Password!!!',
            'Again Failed!!!',
            'Searching through another server...',
            'Password has been successfully Fetched..',
            'Accessing other accounts ...',
            'Access Granted...',

        ];
        hacking.innerHTML = '<h1>Initializing...</h1>'
        let hacker = async (seconds) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(true)
                }, seconds * 1000);
            })
        }
        let hacker2 = async (messages) => {
            await hacker(2)
            hacking.innerHTML = hacking.innerHTML + messages + "<br>"
        }
        (async () => {
            for (let i = 0; i < a.length; i++) {
                const element = a[i];
                await hacker2(a[i])
            }
        })()
    }
    Input.value = '';
}