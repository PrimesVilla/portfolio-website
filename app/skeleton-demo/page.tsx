'use client';

import { SectionSkeleton } from '@/components/ui/SectionSkeleton';

export default function SkeletonDemo() {
  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-black">
      <div className="py-8 px-4 bg-slate-800/50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">Skeleton Loading Demo</h1>
          <p className="text-slate-400">Customize the skeleton styles below. Edit <code className="bg-slate-900 px-2 py-1 rounded text-blue-400">components/ui/SectionSkeleton.tsx</code></p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Default Variant (Cards)</h2>
          <SectionSkeleton variant="default" cardCount={6} />
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Compact Variant (Text)</h2>
          <SectionSkeleton variant="hero" />
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Custom Card Count</h2>
          <SectionSkeleton variant="default" cardCount={4} />
        </div>
      </div>

      <div className="bg-slate-800/50 border-t border-blue-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-lg font-bold text-white mb-4">Quick Tips:</h3>
          <ul className="text-slate-300 space-y-2 list-disc list-inside">
            <li>Edit gradient colors in <code className="bg-slate-900 px-2 py-1 rounded text-blue-400">bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800</code></li>
            <li>Adjust animation speed with <code className="bg-slate-900 px-2 py-1 rounded text-cyan-400">animate-pulse</code></li>
            <li>Change spacing, rounded corners, and border colors as needed</li>
            <li>Once styled, the skeleton will display in all Suspense boundaries on the main page</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
