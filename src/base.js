import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCjL7wcOszA3yx6zteaYvEMxmE_Gc9JL4w',
  authDomain: 'boite-a-recettes-a20d2.firebaseapp.com',
  databaseURL: 'https://boite-a-recettes-a20d2-default-rtdb.europe-west1.firebasedatabase.app/'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
