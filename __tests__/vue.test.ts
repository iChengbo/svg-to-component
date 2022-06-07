import { svgToVueComponent } from '../src/index';
import { readFile } from 'fs/promises';
import path from 'path';

describe('svgToVueCompoent', () => {
  const getFiles = async (svgFileName: string, componentFileName: string) => {
    const svgPath = path.resolve(__dirname, './__files__', svgFileName);
    const componentPath = path.resolve(__dirname, './__files__', componentFileName);

    const svg = await readFile(svgPath, 'utf-8');
    const component = await readFile(componentPath, 'utf-8');
    return {
      svg,
      component,
    };
  };

  test('return vue component', async () => {
    const { svg, component } = await getFiles('computer.svg', 'computer-vue.vue');

    const vueComponent = svgToVueComponent({
      svg,
      name: 'icon-computer',
      target: 'vue',
    });
    expect(vueComponent).toBe(component);
  });

  test('return vue3 component', async () => {
    const { svg, component } = await getFiles('computer.svg', 'computer-vue3.vue');

    const vueComponent = svgToVueComponent({
      svg,
      name: 'icon-computer',
      target: 'vue3',
    });
    expect(vueComponent).toBe(component);
  });
});
