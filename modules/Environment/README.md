# Environment

Why not .env files?

The main reason to use .env files in this kind of project is "standard", there is no difference between store our env data in .env files or js files, and this standard is very important and useful when we have multiple languages in the same project, and this data need to be shared, not our case.

So, to avoid any complex setup (make a way to read .env files in react-native and nextjs without any change), we decided to store in javascript files.

Take a look into environment.example.ts and create "environment.dev.ts" and "environment.prod.ts" files!
