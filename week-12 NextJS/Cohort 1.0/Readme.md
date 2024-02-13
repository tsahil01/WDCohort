# Next JS
- https://slides.com/harkiratsingh-2/week-10-2
### Problems with React-
- Waterfalling => We get flashes as we get data from backend one by one.
- Not SEO optimised
- React will not work where JS is not present (like email)

### Server Side rendering -
- The first render takes place in Backend.
- This doesnt happen in React, hence we get a flash.
- NextJS does it.
- All the future Render happens after this.
- In react we can achive this in react via `React-DOM-Server`

![alt text](image.png)

- Suppose we have an EC2 machine where mongoDB is running and NextJS is setup. Wth this we do not need the round trip or hop from server to server.

![Facts about NextJS](image-1.png)