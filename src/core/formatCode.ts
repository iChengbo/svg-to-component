import { format } from 'prettier';

const formatCode = (svg: string, name: string, options: { target: 'vue' | 'vue3' }) => {
  const prettierOptions = {
    printWidth: 120,
    semi: true,
    singleQuote: true,
  };
  switch (options.target) {
    case 'vue':
      return format(
        `
        <template>
        ${svg}
        </template>
        <script lang="ts">
        import type { DefineComponent } from 'vue';
        export default ({
          name: '${name}',
        }) as DefineComponent;
        </script>
        `,
        {
          ...prettierOptions,
          parser: 'vue',
        },
      );
    case 'vue3':
      return format(
        `
        <template>
        ${svg}
        </template>
        <script setup lang="ts">
        </script>
        `,
        {
          ...prettierOptions,
          parser: 'vue',
        },
      );
    default:
      return 'not supported';
  }
};

export default formatCode;
