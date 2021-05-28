/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module "*.md"

declare module "*.md" {
  const content: string;
  export default content;
}
