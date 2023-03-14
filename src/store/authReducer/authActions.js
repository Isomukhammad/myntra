import { authAxios } from "@/utils/axios.utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser, setUserLoading, setToken } from "./authSlice";

export const loadUser = () => async (dispatch, getState) => {
   const { auth: { token } } = getState();

   if (token) {
      authAxios.defaults.headers.Authorization = `Bearer ${token}`;
      try {
         const { data: user } = await authAxios.get('/profile');
         user && dispatch(setUser(user));
         dispatch(setUserLoading(false));
      } catch (error) {
         console.error(error);
         dispatch(setToken(null));
         dispatch(setUserLoading(false));
      }
   } else {
      dispatch(setUser(null));
      dispatch(setUserLoading(false));
   }
}

// handle registration in the API
export const handleRegister = ({ name = '', phone_number = '', password = '', otp = '' }) => async () => {
   if (name = '', phone_number = '', password = '', otp = '') {
      console.error('Одно из полей пустое');
      return null;
   }

   try {
      await nextAxios.post('/register', { name, phone_number, password, otp });
   } catch (error) {
      throw error;
   }
}

// send One Time Password (OTP) to a phone number
export const sendOtp = ({ phone_number = '' }) => async () => {
   if (phone_number === '') {
      console.error('Номер телефон пуст');
      return null;
   }

   try {
      await nextAxios.post('/otp', { phone_number })
   } catch (error) {
      console.error(error);
      throw error;
   }
}

// сheck if the One Time Password (OTP) that was sent to the phone number is similar to what the user entered
export const checkOtp = async ({ phone_number = '', otp = '' }) => {
   if (phone_number = '', otp = '') {
      console.error('Одно из полей пустое');
      return null;
   }

   try {
      await nextAxios.post('/otp/check', {
         phone_number,
         otp,
      })
   } catch (error) {
      console.error(error)
      throw error;
   }
}

// log out from website and delete token
export const handleLogout = async (event) => {
   try {
      event.preventDefault;
      await authAxios.post('logout');
      localStorage.removeItem('token');
      setUser(null);
      delete authAxios.defaults.headers.Authorization;
      toast.success(lang?.['Пользователь вышел из системы']);
   } catch (error) {
      console.error(error);
      toast.error(lang?.['Что-то пошло не так ☹️']);
   }
}