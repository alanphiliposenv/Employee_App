import baseApi from '../../service';
import { Employee } from '../../types/employee.type';

type LoginPayloadType = {
  username: string;
  password: string;
};

type LoginResponseType = {
  data: {
    token: string;
    employeeDetails: Employee;
  };
};

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseType, LoginPayloadType>({
      query: (body) => ({
        url: '/employees/login',
        method: 'POST',
        body
      })
    })
  })
});

export const { useLoginMutation } = loginApi;
