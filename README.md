# Playing around with data fetching in Nextjs 13

This is a simple project to play around with the new data fetching features in Nextjs 13.

Data fetching based on state directly is not possible in server components, but we can have a client component that changes the route based on the state and then the server component can fetch the data based on the route.

Server components can not be imported in client components, but it can be a child of a client component.

When we need to fetch data in a client component, we can do that, but if we use env variables (api keys) then use an api route.

Note that in this example:

- the root does not have a page, because we immediately redirect to and example (see next.config.js).
- input.tsx is the only client component
- we fetch data in the server in 2 ways: in the server component (suggestion.tsx) and in the api route
