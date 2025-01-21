export const scrollbarStyles = {
  base: `scrollbar-thin scrollbar-track-transparent
         scrollbar-thumb-gray-200 hover:scrollbar-thumb-green-200
         [&::-webkit-scrollbar]:w-1.5
         [&::-webkit-scrollbar-track]:bg-transparent
         [&::-webkit-scrollbar-thumb]:rounded-full
         [&::-webkit-scrollbar-thumb]:bg-gray-200
         hover:[&::-webkit-scrollbar-thumb]:bg-green-200
         [&::-webkit-scrollbar-thumb]:border
         [&::-webkit-scrollbar-thumb]:border-white`,
  response: `scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-200 
             active:scrollbar-thumb-green-300
             touch-pan-y
             [&::-webkit-scrollbar]:w-1.5
             [&::-webkit-scrollbar-track]:bg-transparent
             [&::-webkit-scrollbar-thumb]:rounded-full`
};

export const proseStyles = `prose prose-sm sm:prose-base prose-green !text-gray-900
  prose-h1:text-lg prose-h1:font-semibold prose-h1:mb-3
  prose-h2:text-base prose-h2:font-semibold prose-h2:mb-3 prose-h2:mt-6
  prose-h3:text-base prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6
  prose-p:!text-gray-900 prose-p:leading-relaxed prose-p:mb-6
  prose-ul:my-2
  prose-ol:my-2
  prose-li:!text-gray-900 prose-li:my-0.5
  prose-strong:font-semibold prose-strong:!text-gray-900
  [&>ul]:pl-5 [&>ol]:pl-5
  [&>*]:mb-6
  [&>ul>li]:list-disc [&>ul>li]::marker:text-gray-900
  [&_ul]:my-0.5 [&_ul]:pl-5
  [&_ul>li]:list-disc [&_ul>li]::marker:text-gray-900
  [&_ol]:my-0.5 [&_ol]:pl-5
  [&_li]:pl-0 [&_li]:ml-4
  [&_ol>li]:list-decimal [&_ol>li]::marker:text-gray-900
  [&_ol>li:last-child]:mb-6
  [&_ul>li:last-child]:mb-6
  [&>ul:last-child]:mb-0 [&>ol:last-child]:mb-0`; 