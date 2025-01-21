import { Components } from 'react-markdown';

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