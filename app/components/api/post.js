import { db, app } from '../firebase/firebase';
import { ref, get } from '@firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const LoginWithEmail = (email, password) => {
  const auth = getAuth(app);

  return signInWithEmailAndPassword(auth, email, password);
};

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

  const addUser = () => {

    let email = 'talhanoman@gmail.com'
    let password = '12345678'

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // User successfully created
    const user = userCredential.user;
    console.log('User logged in:', user);
  })
  .catch((error) => {
    // Handle error
    console.error('Error creating user:', error);
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