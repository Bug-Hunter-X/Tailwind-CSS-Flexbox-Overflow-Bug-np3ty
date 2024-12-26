```javascript
<div class="flex">
  <div class="bg-red-500 p-4 w-1/2"></div>
  <div class="bg-blue-500 p-4 w-1/2"></div>
</div>
```
This code snippet uses Tailwind's `flex` utility class to create a horizontal layout.  However, if you inspect it in the browser's developer tools you may find that the blue div is overflowing its parent container. This usually occurs when the content inside the blue div exceeds the available space and it's not set to wrap. 