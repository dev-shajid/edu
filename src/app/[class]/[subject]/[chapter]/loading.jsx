import { Fragment } from "react";

export default function loading() {
    return (
        <div>
            <SkeletonLoading className='mx-auto' />
            <div className="grid md:grid-cols-3 grid-cols-2 mt-8 gap-6 place-items-center">
                {
                    [1, 2, 3].map((e) => (
                        <Fragment key={e}>
                            <SkeletonLoading className='!w-full !max-w-[350px] h-[200px]' />
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}

const SkeletonLoading = ({ className }) => <div className={`bg-gray-200 border border-gray-300 w-[140px] h-[30px] rounded-md animate-pulse text-center ${className}`} />