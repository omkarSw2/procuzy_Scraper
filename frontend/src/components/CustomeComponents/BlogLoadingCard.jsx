import { Separator } from '../ui/separator';

function BlogLoadingCard() {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
      <div className="h-48 w-full bg-gray-200 animate-pulse"></div>
      <div className="p-4">
        <div className="h-6 w-3/4 bg-gray-200 animate-pulse mb-2"></div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="h-4 w-1/4 bg-gray-200 animate-pulse"></div>
          <Separator orientation="vertical" className="h-4 " />
          <div className="h-4 w-1/4 bg-gray-200 animate-pulse"></div>

          <>
            <Separator orientation="vertical" className="h-4 " />
            <div className="w-5 h-5 bg-gray-200 animate-pulse"></div>
          </>
        </div>
        <div className="mt-2 h-4 w-full bg-gray-200 animate-pulse"></div>
        <div className="mt-2 h-4 w-full bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
}

export default BlogLoadingCard
