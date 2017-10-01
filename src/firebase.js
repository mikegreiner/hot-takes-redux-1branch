import firebase from 'firebase'

const config = {
  // MEG
  apiKey: 'AIzaSyC_WFcjDVzQu8yrrp1rmmSwqekgZZk5Xac',
  authDomain: 'hot-takes-eed63.firebaseapp.com',
  databaseURL: 'https://hot-takes-eed63.firebaseio.com',
  projectId: 'hot-takes-eed63',
  storageBucket: '',
  messagingSenderId: '728070853518',
  // Steve:
  // apiKey: 'AIzaSyAhWMYWhBG2UvsNMZ-qVLbaqVZ5aTzwsNU',
  // authDomain: 'hot-takes.firebaseapp.com',
  // databaseURL: 'https://hot-takes.firebaseio.com',
  // storageBucket: 'hot-takes.appspot.com',
  // messagingSenderId: '823384132241'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
