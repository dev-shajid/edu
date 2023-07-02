
export default function PageLoading() {
    return (
        <>
            <div className="h-[calc(100vh-200px)] min-w-full flex items-center justify-center">
                <div className="text-3xl font-medium">Loading...</div>
            </div>
        </>
    )
}

const SkeletonLoading = ({ className }) => <div className={`bg-gray-300 w-[140px] h-[30px] rounded-md animate-pulse text-center ${className}`} />