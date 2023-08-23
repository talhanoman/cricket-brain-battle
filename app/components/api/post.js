import { db } from '../firebase/firebase';
import { ref, get } from '@firebase/database';

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