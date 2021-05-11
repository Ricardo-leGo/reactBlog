interface IUser{
  name:     string
  lastName: string
  age:      number
  gender:   string
  email:    string
  roles:    string[]
  session:  boolean
}

export interface Istore{
  
  User: IUser
}

export const store:Istore= {
  User: {
    name: "",
    lastName: "",
    age: 0,
    gender: "",
    email: "",
    roles: [],
    session: false
  },
  
}