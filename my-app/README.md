# How to create a next js app
- using command npx create-next-app@latest
# Folder structure in next js
- app
 - App Router
- pages
 - Pages Router
- public
 - Static assets to be served
- src
 - Optional application source folder
# Server and Client Component
 # Server Componnet
  - It is like fetching data from the server also to server stuff
 # Client Componnent
  - It is like the interactivity with the ui like using a hook, on handle a button click
  - to make a componnent client use `"use client"`
# Routing
 # Static Roution 
 - In app folder since it is using for routing and it have page.js by default when website is load it will be shown
 - Now if we want other page then we will be need to create a folder in the app folder and give it a name as the route (eg.http://localhost:3000/account) and crete a page.js file inside it.
 # Nested Route
 - It means in a route another route eg. account/membership
 - to create this type of route crate a folder in app called account and in that account folder create another folder called membership.
 - It will be become a nested route
 - To create more nested go to account or any folder under that account folder and create a new folder to perform nested route
 # Dynamic Route
 - Dynamic route is intersting
 - Let take a eg. that i have a products route and i have 1000s of product on that route. Now we can create 1000s of route using nested but it is not practical lets consider that it become 100000000s product.
 - To create a dynamic route we have to create a folder under the app folder and use [] to as folder name eg. [product].
 - this is go as products/1 or products/10000
 # Catch all route
 - In dynamic routing, It give a solution for nested routing insted of creating folder and folder but it support only one slug.
 - Suppose in a case we have to crate a route like eg. product/1/product-review/all
 - in this seniario we have to use catch all route 
 - To create this type of route create a folder in like [...name_of_route]
 - It will be handle multiple route.
# Navigate one page to another
 - There are two way in client side to navigate one page to another 
 - By using Link and useRouter()
 - To use Link it will be imported from next/link
 - It is a simple way just use <Link></Link> tag and inser href inside it and give the routing page inside it.
 - To use useRouter() it is a hook it will import from next/navigation
 - Create a variable to call useRouter() it will return multiple object to use navigate one page to another we need to create a onClick handaler and use the variable name.push("") to navigate

# Navigate from server component to differant component
# Getting current url or slug in client side
# Getting current url or slug in server side
# Data fetching in client and server componnent

