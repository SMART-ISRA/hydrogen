import {
  ShopifyServerProvider,
  DefaultRoutes,
  LocalizationProvider,
} from '@shopify/hydrogen';
import {Switch} from 'react-router-dom';
import {Suspense} from 'react';

import shopifyConfig from '../shopify.config';

import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
import CartProvider from './components/CartProvider.client';
import LoadingFallback from './components/LoadingFallback';

export default function App({...serverState}) {
  const pages = import.meta.globEager('./pages/**/*.server.[jt]sx');

  return (
    <ShopifyServerProvider shopifyConfig={shopifyConfig} {...serverState}>
      <LocalizationProvider>
        <CartProvider>
          <Suspense fallback={<LoadingFallback />}>
            <DefaultSeo />
            <Switch>
              <DefaultRoutes
                pages={pages}
                serverState={serverState}
                fallback={<NotFound />}
              />
            </Switch>
          </Suspense>
        </CartProvider>
      </LocalizationProvider>
    </ShopifyServerProvider>
  );
}
