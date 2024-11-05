//import { clerkMiddleware } from "@clerk/astro/server";

//export const onRequest = clerkMiddleware();

import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server'

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/public(.*)'])
const isAdminRoute=createRouteMatcher(['/admin(.*)'])

export const onRequest =  clerkMiddleware((auth, context) => {
  
  //const { redirectToSignIn, userId, has } = auth()
  const { userId, has } = auth()

  if (!userId && isProtectedRoute(context.request)) {
    // Add custom logic to run before redirecting

    //return redirectToSignIn()
    return context.redirect('/');
  }

  
  if (
    (isAdminRoute(context.request) && !has({ permission: 'org:sys_profile:manage' })) 
  ) {
    // Add logic to run if the user does not have the required permissions; for example, redirecting to the sign-in page
    //return redirectToSignIn()
    return context.redirect('/');
  }
  

})


