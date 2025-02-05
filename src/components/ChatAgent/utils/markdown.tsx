import { Components } from 'react-markdown';

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

export const markdownComponents: Components = {
  a: ({ ...props }) => (
    <a 
      {...props} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="!text-green-600 hover:!text-green-700 underline active:!text-green-800" 
    />
  ),
  p: ({ ...props }) => (
    <p {...props} className="!text-gray-900" />
  )
}; 