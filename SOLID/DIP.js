//bad example 
// class EmailService {
//   sendEmail(message) {
//     console.log(`Sending email: ${message}`)
//   }
// }
// class Notification{
//   constructor() {
//     this.email = new EmailService()
//   }
//   notify(message) {
//     this.email.sendEmail(message)
//   }
// }
// let sms = new Notification()
// sms.notify("Hello world")

//good example
class Notifier {
  notify(message) {
    throw new Error("Method must be implemented")
  }
}
class EmailNotifier extends Notifier {
  notify(message) {
    console.log(`Sending email: ${message}`)
  }
}
class SMSNotifier extends Notifier {
  notify(message) {
    console.log(`Sending SMS: ${message}`)
  }
}
class NotificationManager {
  constructor(notifier) {
    this.notifier = notifier
  }
  notify(message) {
    this.notifier.notify(message)
  }
}
let emailNotifier = new EmailNotifier()
let smsNotifier = new SMSNotifier()
let manager1 = new NotificationManager(emailNotifier)
manager1.notify("Hello via Email")
let manager2 = new NotificationManager(smsNotifier)
manager2.notify("Hello via SMS")
