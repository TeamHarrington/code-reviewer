import { NextPageContext } from 'next'
import Router from 'next/router'
import { UrlObject, Url } from 'url'

/**
 * Because Next.js is mainly SSR, we sometimes want to redirect
 * on the server side. In that cause, please use this in place
 * of `Router.push`.
 *
 * @param route Path to be redirected
 * @param as query parameters
 * @param ctx Next Page Context
 */
export function redirect(
  route: string,
  as?: string | UrlObject | Url,
  ctx?: NextPageContext
) {
  if (ctx && ctx.req && ctx.res) {
    ctx.res.writeHead(302, { Location: route })
    ctx.res.end()
  } else {
    Router.push(route, as)
  }
}
