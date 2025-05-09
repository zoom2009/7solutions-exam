import get from 'lodash/get'
import { TUserResult } from "../queries"

const transformUsers = (data: TUserResult) => {
  let usersGroupByDepartment = {}
  const users = data.users
  for (const user of users) {
    const gender = user.gender
    const age = user.age
    const firstName = user.firstName
    const lastName = user.lastName
    const postalCode = user.address.postalCode
    const hairColor = user.hair.color
    const department = user.company.department

    const currentAgeRangeString = get(usersGroupByDepartment, [department, 'ageRange'], '999-0')
    const ageRange = currentAgeRangeString.split('-')
    const newMinAge = age < ageRange[0] ? age : ageRange[0]
    const newMaxAge = age > ageRange[1] ? age : ageRange[1]

    usersGroupByDepartment = {
      ...usersGroupByDepartment,
      [department]: {
        male: get(usersGroupByDepartment, [department, 'male'], 0) + (gender === 'male' ? 1 : 0),
        female: get(usersGroupByDepartment, [department, 'female'], 0) + (gender === 'female' ? 1 : 0),
        ageRange: `${newMinAge}-${newMaxAge}`,
        hair: {
          ...get(usersGroupByDepartment, [department, 'hair'], {}),
          [hairColor]: get(usersGroupByDepartment, [department, 'hair', hairColor], 0) + 1,
        },
        addressUser: {
          ...get(usersGroupByDepartment, [department, 'addressUser'], {}),
          [`${firstName}${lastName}`]: postalCode,
        },
      },
    }
  }
  return usersGroupByDepartment
}

export default transformUsers
