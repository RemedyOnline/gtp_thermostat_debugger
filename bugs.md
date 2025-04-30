## Bug 1

_PROBLEM_

_IDENTIFICATION METHOD_

_SOLUTION_

_STATUS_ - successful completion

## Bug #1

- **Problem**: Describe the issue here briefly.
- **Identification Method**: (e.g., Console error, UI behavior, inspection)
- **Solution**: What we did to fix it.
- **Status After Solution**: (Fixed, partially fixed, not fixed, needs review)

## Bug #1

- **Problem**: Duplicate overlay
- **Identification Method**: I inspected the codebase and realised that the overlay styling was being done twice to the in the setInitialOverlay block.
- **Solution**: I commented the redundant codeblock, leaving just one styling operation in the block
- **Status**: Fixed

## Bug #2

- **Problem**: Faulty room dropdown list
- **Identification Method**: I identified this error in the browser console. I realised that, upon switching from one room to the other, there's is an uncaught typeError on "currTemp" being undefined because the entire "room" object was being assigned to option.value, instead of assigning the actual room names.
- **Solution**: I appended the actual names of each room to the options.value method, instead of assigning the entire room object to it
- **Status After Solution**: Room switching fixed.

## Bug #3

- **Problem**: Faulty increment and decrement adjustment buttons
- **Identification Method**: I identified this error using the browser console. I console logged what was being saved into the 'increaseRoomTemperature' variable and reelised that we were passing the entire increment function to it, instead of calling the function onto it to return it's output, which was 'currTemp++'.
- **Solution**: So what i did was to add 'parenthesis' to the function name, so that it gets called into the variable here. And then took of the parenthesis after the 'increaseRoomTemperature' variable because it is just a mere variable, and not a function.
  Same applied to 'decreaseRoomTemperature'
- **Status After Solution**: Adjustment buttons fixed.

## Bug #4

- **Problem**: Alternate color tones for cool and warm instances.
- **Identification Method**: So I was stated in the documentation that when the current temperature is less than 25, the tone of each room should be Cool, and Warm otherwise. But then, by observing the UI behavior, I realised that the color tone for these two instances were switched.
- **Solution**: So I had to switch the color styling between the two overlay variables to match the expected outcome.
- **Status After Solution**: Appropriate color tones assigned now.

## Bug #5

- **Problem**: Alternate color tones for cool and warm instances.
- **Identification Method**: So I was stated in the documentation that when the current temperature is less than 25, the tone of each room should be Cool, and Warm otherwise. But then, by observing the UI behavior, I realised that the color tone for these two instances were switched.
- **Solution**: So I had to switch the color styling between the two overlay variables to match the expected outcome.
- **Status After Solution**: Appropriate color tones assigned now.

## Bug #6

- **Problem**: "Cold" and "Warm" temperature Preset buttons not working as expected
- **Identification Method**: Through code inspection, I realised that the event listener for these preset buttons had an empty function, and so there was no action to be perfermed when a button was clicked
- **Solution**: So I had to write a logic inside the event listener to conditionally check which button was clicked at any point in time, and then check the right preset temperature for the current room, and then render it on the UI accordingly.
- **Status After Solution**: Fixed

## Bug #7

- **Problem**: "Cold" and "Warm" temperature Preset buttons not working as expected
- **Identification Method**: Through code inspection, I realised that the event listener for these preset buttons had an empty function, and so there was no action to be perfermed when a button was clicked
- **Solution**: So I had to write a logic inside the event listener to conditionally check which button was clicked at any point in time, and then check the right preset temperature for the current room, and then render it on the UI accordingly.
- **Status After Solution**: Fixed
