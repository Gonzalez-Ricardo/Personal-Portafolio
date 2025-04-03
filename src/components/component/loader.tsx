
import { useState, useEffect } from "react";
import { Inicio } from "@/components/component/inicio";

export function Loader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 dark:bg-gray-900/75">
          <div className="flex flex-col items-center space-y-4">
            <div className="" />
            <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
              <div className="rounded-full h-full w-full bg-[#090c14] dark:bg-zinc-900 background-blur-md"></div>
            </div>
          </div>
          <div className="flex items-center justify-center p-2.5 text-[#0f0]">
                <div>
                  <span className="mr-2">Loading</span>
                  <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">
                    .
                  </span>
                  <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">
                    .
                  </span>
                  <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">
                    .
                  </span>
                </div>
              </div>
        </div>
      </div>
    );
  }
}
