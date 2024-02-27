export const Shop = (): any => `
    <body
      class="flex w-full h-screen justify-center items-center"
      hx-get="/shops"
      hx-swap="innerHTML"
      hx-trigger="load"
    />
`;
