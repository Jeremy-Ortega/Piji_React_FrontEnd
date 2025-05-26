import './bootstrap';


import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from './layouts/Layout';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    let page = pages[`./Pages/${name}.jsx`];
    
    page.default.layout = page.default.layout || ((page) => <Layout children={page}
    />);
    return page;
  },

  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(      
    <MantineProvider withNormalizeCSS withGlobalStyles >
        <App {...props} />
    </MantineProvider>)
  },
})