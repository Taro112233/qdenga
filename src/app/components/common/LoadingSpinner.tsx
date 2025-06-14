"use client";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-primary rounded-full animate-spin" />
    </div>
  );
}
