//debounce logic
import debounce from 'debounce'
function handleSearch(query){
    console.log(`search for ${query}`);
}
const debounceHandler = debounce(handleSearch,500)

debounceHandler('J')
debounceHandler('Ja')
debounceHandler('Java')
debounceHandler('JavaScript')
debounceHandler('JavaScript Debo')
debounceHandler('JavaScript Debounce')

/*
    Real-World Use Cases
    Search Input: Wait for the user to stop typing before making an API call
    Window Resize: Wait for resize to finish before recalculating layout
    Scroll Events: Reduce the number of scroll event handlers fired
    Button Clicks: Prevent multiple form submissions
*/ 

/**
 Difference from Throttling
    Debounce: Executes the function only after the calls have stopped for a specified period
    Throttle: Executes the function at most once per specified time interval
 */

// Benefits:
//      Improves performance by reducing unnecessary function calls
//      Reduces API calls and server load
//      Provides better user experience by preventing excessive updates