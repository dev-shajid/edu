import { Fragment } from "react";
import { SkeletonLoading } from "./[subject]/[chapter]/loading";
import { Cards } from "@/components/Basic";

export default function loading() {
    return (
        <div className="mt-8">
            <SkeletonLoading className='mx-auto' />
            <Cards>
                {
                    [1, 2, 3].map((e) => (
                        <div key={e} className='xs:px-4 px-[5px]'>
                            <SkeletonLoading className='!w-full mx-auto !max-w-[300px] !h-[200px]' />
                        </div>
                    ))
                }
            </Cards>
        </div>
    )
}