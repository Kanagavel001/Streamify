import React from 'react'
import { getAuthUser } from '../lib/api.js';
import { useQuery } from '@tanstack/react-query';

const useAuthUser = () => {
    const authUser = useQuery({
        queryKey: ["authUser"],
        queryFn: getAuthUser,
        retry: false, // Auth check
    }); 

    return { isLoading: authUser.isLoading, authUser: authUser.data?.user };
}

export default useAuthUser