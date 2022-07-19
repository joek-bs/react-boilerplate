/* eslint-disable spaced-comment */

/// <reference types="styled-jsx" />
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
