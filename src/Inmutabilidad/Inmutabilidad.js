//Mutable
// const updateAge = (userInfo) => {
//     userInfo.age = userInfo.age + 1
//     return userInfo;
//   }

  //Inmutable: Object.assing
//   const updateAge = (userInfo) => {
//     return Object.assign({}, userInfo, {age: userInfo.age + 1})
//   }
  //Inmutable: Spread Operator
  const updateAge = (userInfo) => {
    return {...userInfo, age: userInfo.age + 1}
  }
  
  const userInfo = {
    name: 'Alejandro',
    age: 28,
    email: 'alejokun10@outlook.com'
  }
  
  console.log('userInfo BEFORE: ', userInfo)

  const updateUserInfo = updateAge(userInfo)

  console.log('userInfo AFTER: ', userInfo)
  console.log('updatedUser: ', updateUserInfo)