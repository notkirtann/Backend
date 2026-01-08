// import throttle from 'throttle' ----for node stream
import throttle from 'lodash.throttle'
function MouseHandler(position) {
    console.log(`mouse positin: ${position}px`);   
}

const throttleHandler = throttle(MouseHandler,1000)//ms

throttleHandler(100)
throttleHandler(200)
throttleHandler(300)
throttleHandler(500)
throttleHandler(1000)
throttleHandler(1200)
//  npm install throttle  used for node.js stream envior

// for js envir use npm install lodash.throttle


/*
Real-World Use Cases
        Scroll Events: Update UI elements (like progress bars or lazy-loading) at a controlled rate while scrolling
        Mouse Movement: Track cursor position without overwhelming the browser with updates
        Window Resize: Recalculate layout at regular intervals during resize
        API Rate Limiting: Ensure requests don't exceed API rate limits
        Game Development: Limit action frequency (e.g., shooting, jumping) to prevent spam
        Auto-save: Save user input at regular intervals while they're typing
        Infinite Scroll: Load more content at controlled intervals while scrolling


*/

/*
Benefits:
        Performance: Reduces unnecessary function calls during high-frequency events
        Consistency: Ensures predictable execution intervals
        User Experience: Provides smooth, responsive updates without lag
        Resource Management: Prevents overwhelming the browser or server
        Battery Life: Reduces CPU usage on mobile devices
*/

