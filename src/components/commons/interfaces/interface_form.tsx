import { Istore } from './../../../Store/AuthStore/store'


export interface data{
  email: string
  password: string
  confirm:string
}

export interface Iform{
  isSingUp: boolean
  setIsSignUp: Function
  setDataLogin: Function
  submitData: Function
  error: boolean
  msg:string
}


export default Istore;