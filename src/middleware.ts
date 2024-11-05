//import { clerkMiddleware } from "@clerk/astro/server";

//export const onRequest = clerkMiddleware();

import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server'

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/public(.*)'])
const isAdminRoute=createRouteMatcher(['/admin(.*)'])

export const onRequest = clerkMiddleware((auth, context) => {
  
  const { redirectToSignIn, userId, has } = auth()

  if (!userId && isProtectedRoute(context.request)) {
    // Add custom logic to run before redirecting

    //return redirectToSignIn()
    return context.redirect('/');
  }


  



})

