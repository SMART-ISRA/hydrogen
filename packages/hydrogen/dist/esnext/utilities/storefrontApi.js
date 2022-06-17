/* global Oxygen */
import { OXYGEN_SECRET_TOKEN_ENVIRONMENT_VARIABLE, STOREFRONT_API_SECRET_TOKEN_HEADER, STOREFRONT_API_PUBLIC_TOKEN_HEADER, STOREFRONT_API_BUYER_IP_HEADER, SHOPIFY_STOREFRONT_ID_VARIABLE, SHOPIFY_STOREFRONT_ID_HEADER, } from '../constants';
export function getStorefrontApiRequestHeaders({ buyerIp, storefrontToken, }) {
    const headers = {};
    const secretToken = getOxygenVariable(OXYGEN_SECRET_TOKEN_ENVIRONMENT_VARIABLE);
    const storefrontId = getOxygenVariable(SHOPIFY_STOREFRONT_ID_VARIABLE);
    /**
     * Only pass one type of storefront token at a time.
     */
    if (secretToken) {
        headers[STOREFRONT_API_SECRET_TOKEN_HEADER] = secretToken;
    }
    else {
        headers[STOREFRONT_API_PUBLIC_TOKEN_HEADER] = storefrontToken;
    }
    if (buyerIp) {
        headers[STOREFRONT_API_BUYER_IP_HEADER] = buyerIp;
    }
    if (storefrontId) {
        headers[SHOPIFY_STOREFRONT_ID_HEADER] = storefrontId;
    }
    return headers;
}
function getOxygenVariable(key) {
    return typeof Oxygen !== 'undefined' ? Oxygen?.env?.[key] : null;
}
