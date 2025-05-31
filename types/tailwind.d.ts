declare module 'tailwindcss' {
  export interface Config {
    content?: string[];
    theme?: {
      extend?: Record<string, any>;
      [key: string]: any;
    };
    plugins?: any[];
    darkMode?: 'media' | 'class' | false;
    [key: string]: any;
  }
  
  const tailwindcss: any;
  export default tailwindcss;
} 