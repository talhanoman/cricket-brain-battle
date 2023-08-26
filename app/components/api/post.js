import { db, app } from '../firebase/firebase';
import { ref, get, push } from '@firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const LoginWithEmail = (email, password) => {
  const auth = getAuth(app);

  return signInWithEmailAndPassword(auth, email, password);
};

export const SignupWithEmail = (email, password) => {
  const auth = getAuth(app);

  return createUserWithEmailAndPassword(auth, email, password);
};

export const SaveUserToDatabase = (email, fullname, score) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userId = uuidv4();
      const userRef = ref(db, 'user');
      const newUser = {
        userid: userId,
        name: fullname,
        email: email,
        score: score,
        is_deleted: 0,
        date_created: Date.now()
      };

      push(userRef, newUser)
        .then(() => {
          console.log('User data added successfully.');
          resolve(true)
        })
        .catch(error => {
          console.error('Error adding user data:', error);
          reject(false)
        });
    } catch (error) {
      console.error('Error Storing Data:', error);
      reject(false);
    }
  });
}

export const Authenticate = async (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const usersRef = ref(db, 'user');
        const snapshot = await get(usersRef);
  
        if (snapshot.exists()) {
          const usersData = snapshot.val();
  
          const userExists = Object.values(usersData).some((user) => {
            return user.email === email && user.password === password;
          });
  
          if (userExists) {
            resolve(200);
          } else {
            resolve(400);
          }
        } else {
          resolve(500);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        reject(500);
      }
    });
  };

      // const userRef = ref(db, 'user');
    // const newUser = {
    //   name: 'Talha Noma',
    //   email: 'talha@gmail.com',
    //   password: '123456',
    //   is_deleted: 0,
    //   date_created: Date.now()
    // };

    // push(userRef, newUser)
    //   .then(() => {
    //     console.log('User data added successfully.');
    //   })
    //   .catch(error => {
    //     console.error('Error adding user data:', error);
    //   });