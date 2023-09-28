import React from "react";

function LoadingSpinner() {
  return (
    <div>
      <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
      <div class="text-white pl-[75px] pt-2 font-semibold">Generating Mail</div>
    </div>
  );
}

export default LoadingSpinner;
