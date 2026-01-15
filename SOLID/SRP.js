//bad example 
class Account {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    createAccount() {
        console.log("Account created")
    }

    login() {
        console.log("User logged in")
    }

    logout() {
        console.log("User logged out")
    }

    deleteAccount() {
        console.log("Account deleted")
    }

    generateReport() {
        return `Account report for ${this.username}`
    }
}


//good example
class Account {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
}
class AccountCreator {
    create(account) {
        console.log(`Account created for ${account.username}`)
    }
}
class AccountLogin {
    login(account) {
        console.log(`${account.username} logged in`)
    }
}
class AccountLogout {
    logout(account) {
        console.log(`${account.username} logged out`)
    }
}
class AccountDeleter {
    delete(account) {
        console.log(`Account deleted for ${account.username}`)
    }
}