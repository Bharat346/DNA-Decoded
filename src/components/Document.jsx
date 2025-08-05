import { useParams, Link } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import { FiMenu, FiX } from "react-icons/fi";

// Map component names to filenames
const docs = [
  { name: "What is DNA?", path: "WhatIsDNA" },
  { name: "difference b/w Genome,Gene,Allele", path: "GenomeGeneAllele" },
  // { name: "Gene Structure", path: "GeneStructure" },
  { name: "DNA To Protein", path: "DNAToProtein" },
  { name: "Trait Genes", path: "TraitGenes" },
  { name: "DNA Fingerprinting", path: "DNAFingerprinting" },
  { name: "API References", path: "APIReferences" },
];

export default function Document() {
  const { filename } = useParams();
  const [DocComponent, setDocComponent] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const module = await import(`../docs/${filename}.jsx`);
        setDocComponent(() => module.default);
      } catch (error) {
        setDocComponent(() => () => (
          <div className="p-6 text-center">
            <div className="inline-flex items-center bg-red-900/30 px-4 py-2 rounded-lg border border-red-700">
              <span className="text-red-400">⚠️ Document not found</span>
            </div>
          </div>
        ));
      }
    };

    loadComponent();
  }, [filename]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Mobile Header with Menu Toggle */}
      <div className="lg:hidden flex items-center justify-between bg-gray-800 p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold text-indigo-300">📘 Documentation</h1>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-400 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Sidebar - Hidden on mobile unless toggled */}
        <aside 
          className={`${mobileMenuOpen ? 'block' : 'hidden relative top-34 left-10'} lg:block lg:w-64 lg:h-fit lg:my-4 bg-gray-800 lg:rounded-xl overflow-hidden border-r lg:border-r-0 border-gray-700 `}
        >
          <div className="p-4 lg:p-6 space-y-4 lg:sticky lg:top-0 lg:h-full lg:overflow-y-auto">
            <h2 className="text-lg lg:text-xl font-bold hidden lg:block border-b border-gray-700 pb-3 mb-3 text-indigo-300">
              Documentation
            </h2>
            <nav className="space-y-1">
              {docs.map((doc) => (
                <Link
                  key={doc.path}
                  to={`/docs/${doc.path}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md transition-all text-sm ${
                    filename === doc.path
                      ? "bg-indigo-900/50 text-indigo-100 font-medium border-l-4 border-indigo-400"
                      : "hover:bg-gray-700/50 text-gray-300 hover:text-white"
                  }`}
                >
                  {doc.name}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:block pt-4 border-t border-gray-700 mt-auto">
              <p className="text-xs text-gray-500">Select a topic to explore</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-1 lg:p-5">
          <div className="rounded-xl border-gray-900 overflow-hidden">
            <div className="p-6 lg:p-8">
              <Suspense 
                fallback={
                  <div className="flex justify-center items-center h-40">
                    <div className="animate-pulse flex space-x-2 items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-indigo-400 rounded-full delay-75"></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full delay-150"></div>
                    </div>
                  </div>
                }
              >
                {DocComponent && <DocComponent />}
              </Suspense>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}