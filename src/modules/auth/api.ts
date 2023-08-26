/* eslint-disable no-useless-catch */
import http from 'services/http'
 import { objectToFormData } from 'utils'

import { IApi } from './types'

export const Register = ({...params}: IApi.Register.Request) =>
  http.post<IApi.Register.Response>('/user/register', objectToFormData({ ...params}))

  export const Login = ({...params}: IApi.Login.Request) =>
  http.post<IApi.Login.Response>('/user/token', objectToFormData({ ...params}))

  export const Profile   = () =>
   http.get("/me");
   export const SendEmail = ({...params}: IApi.SendEmail.Request) =>
   http.post('/user/send-email', objectToFormData({ ...params}))

   export const Checkpassword =  ({ email, activation_code }: IApi.Checkpassword.Request) => 
     http.post('/user/check-activate-code', objectToFormData({ email, activation_code})); 

       
    
