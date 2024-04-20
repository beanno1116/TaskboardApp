import {v4 as uuidv4} from 'uuid';
import { dateWithFormat } from '../../WEDateUtils';


const testMap = {
  change: "first instance"
};

export const User =  function(userObj) {
  try {
    let today = new Date();
  
    const defaultuser = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      color: "",
      level: 1,
      avatarPath: "",
      modifiedDate: dateWithFormat(today,sql),
      creationDate: dateWithFormat(today,sql)    
    }
  
    const user = userObj && {...defaultuser,...userObj}
  
    // user.test = testMap;
    user.id = user?.id?.length > 0 ? user.id : `usr_${uuidv4()}`;
    
    return user;  
    
  } catch (error) {
    
  }
  
}