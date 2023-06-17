'use client';
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

const Authentication: NextPage = () => {
    const router = useSearchParams();
    if(router?.get('signin') === 'true') {
        return (<>
            <SignIn />
        </>)
    } else if (router?.get('signup') == 'true') {
        return (
            <>
                <SignUp/>
            </>
        );
    } else {
        return (
            <div className="h-[400px] w-full bg-gray-200 py-2">
                <h1 className="text-[5em] mt-40 font-bold text-center">404</h1>
                <h1 className="my-[5%] text-center text-xl text-red-500  ">Wrong authentication route</h1>
            </div>
        )
    }
   
}

export default Authentication;