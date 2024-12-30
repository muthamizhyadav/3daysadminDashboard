import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SendEmployerResponse, ResendOTPResponse, ResendOTPRequest, EmployerRequest } from './models';

export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/v1/' }),
    endpoints: (build) => ({
        GetEmployerList: build.mutation<SendEmployerResponse, EmployerRequest>({
            query: (employerRequest) => ({
                url: 'employer/admin/employer/list',
                method: 'POST',
                body: employerRequest
            }),
        }),

        resendOTP: build.mutation<ResendOTPResponse, ResendOTPRequest>({
            query: (resendOTPRequest) => ({
                url: 'resend-otp',
                method: 'POST',
                body: resendOTPRequest,
            }),
        }),
    }),
});

export const { useGetEmployerListMutation, useResendOTPMutation } = adminApi;
