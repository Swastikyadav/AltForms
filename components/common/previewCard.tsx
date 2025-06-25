import React from "react";

function PreviewCard({ children }: { children: React.ReactElement }) {
  return (
    <main className="border border-l-2 border-r-2 w-full px-12 lg:px-24 py-6 bg-slate-50">
      <h2 className="text-xl font-semibold mb-4">Form Name</h2>
      <div className="bg-white min-h-screen border-2 rounded-lg p-6">
        {children}
      </div>
    </main>
  );
}

export default PreviewCard;
