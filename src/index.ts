import formatCode from './core/formatCode';

type SvgToVueComponentParams = {
  svg: string;
  name: string;
  target: 'vue' | 'vue3';
};

export const svgToVueComponent = ({
  svg,
  name,
  target,
}: SvgToVueComponentParams) => {
  return formatCode(svg, name, { target });
};

// export const svgToReactCompoent = ({ svg, name, target }: { svg: string, name: string, target: 'react' }) => {
//   return 'wait';
// };
