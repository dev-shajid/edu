import { Fragment } from "react";

export default function loading() {
    return (
        <div className="mt-8">
            <SkeletonLoading className='mx-auto' />
            <div className="grid md:grid-cols-3 grid-cols-2 mt-8 gap-6 place-items-center">
                {
                    [1, 2, 3].map((e) => (
                        <Fragment key={e}>
                            <SkeletonLoading className='!w-full !max-w-[400px] !h-[250px]' />
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export const SkeletonLoading = ({ className }) => <div className={`bg-gray-200 border border-gray-300 w-[140px] h-[30px] rounded-md animate-pulse text-center ${className}`} />