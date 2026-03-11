import { config } from "process";
import type { Config } form 'tailwindcss';

const Config: Config={
  content:[
    './src/app/**/*.(.js,.ts,.jsx,.tsx)',
    './src/components/**/*.(.js,.ts,.jsx,.tsx)'
  ],
 theme:{
   extend: {}
 },
 plugins:[]
};

export default config;
