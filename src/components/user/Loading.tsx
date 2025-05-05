import { Skeleton } from "../ui/skeleton"

function Loading() {
  return (
    <div>
      <Skeleton className="h-[194px] w-full lg:w-1/2 mb-8 rounded " />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
        <Skeleton className="h-[70px] rounded" />
        <Skeleton className="h-[70px] rounded" />
        <Skeleton className="h-[70px] rounded" />
        <Skeleton className="h-[70px] rounded" />
      </div>
    </div>
  )
}

export default Loading