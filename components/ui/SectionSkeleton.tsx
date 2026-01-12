'use client';

interface SectionSkeletonProps {
  variant?: 'default' | 'hero' | 'cards';
  cardCount?: number;
}

export function SectionSkeleton({ variant = 'default', cardCount = 6 }: SectionSkeletonProps) {
  if (variant === 'hero') {
    return (
      <div className="min-h-screen bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title skeleton */}
          <div className="mb-8 animate-pulse">
            <div className="h-10 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg w-1/4"></div>
          </div>

          {/* Content skeletons */}
          <div className="space-y-4 animate-pulse">
            <div className="h-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg w-3/4"></div>
            <div className="h-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg w-full"></div>
            <div className="h-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg w-5/6"></div>
            <div className="h-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg w-4/5"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title skeleton */}
        <div className="mb-12 animate-pulse">
          <div className="h-12 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg w-1/3"></div>
        </div>

        {/* Content skeletons */}
        <div className="space-y-6 animate-pulse">
          <div className="h-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg w-full"></div>
          <div className="h-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg w-5/6"></div>
          <div className="h-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg w-4/5"></div>
        </div>

        {/* Card skeletons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {Array.from({ length: cardCount }).map((_, i) => (
            <div key={i} className="bg-slate-800/50 rounded-lg overflow-hidden border border-blue-500/20 animate-pulse">
              <div className="aspect-video bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"></div>
              <div className="p-4 space-y-4">
                <div className="h-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg"></div>
                <div className="h-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-lg w-4/5"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-full w-16"></div>
                  <div className="h-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-full w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
