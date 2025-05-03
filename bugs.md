## Bug #1

- **Problem**: Duplicate overlay function
- **Identification Method**: I inspected the codebase and realised that the `overlay` styling was being done twice to the in the `setInitialOverlay` block.
- **Solution**: I commented the redundant codeblock, leaving just one styling operation in the block
- **Status**: Fixed

## Bug #2

- **Problem**: Faulty room dropdown list
- **Identification Method**: I identified this error in the browser console. I realised that, upon switching from one room to the other, there's is an uncaught typeError on `currTemp` being undefined because the entire `room` object was being assigned to option.value, instead of assigning the actual room names.
- **Solution**: I appended the actual names of each room to the options.value method, instead of assigning the entire room object to it
- **Status After Solution**: Room switching fixed.

## Bug #3

- **Problem**: Faulty increment and decrement adjustment buttons
- **Identification Method**: I identified this error using the browser console. I console logged what was being saved into the `increaseRoomTemperature` variable and reelised that we were passing the entire increment function to it, instead of calling the function onto it to return it's output, which was `currTemp++`.
- **Solution**: So what i did was to add _parenthesis_ to the function name, so that it gets called into the variable here. And then took of the parenthesis after the `increaseRoomTemperature` variable because it is just a mere variable, and not a function. Same applied to `decreaseRoomTemperature`
- **Status After Solution**: Adjustment buttons fixed.

## Bug #4

- **Problem**: Alternate color tones for `cool` and `warm` instances.
- **Identification Method**: So I was stated in the documentation that when the current temperature is `less than 25`, the tone of each room should be `Cool`, and `Warm` otherwise. But then, by observing the UI behavior, I realised that the color tone for these two instances were switched.
- **Solution**: So I had to switch the color styling between the two overlay variables to match the expected outcome.
- **Status After Solution**: Appropriate color tones assigned now.

## Bug #5

- **Problem**: `Cold` and `Warm` temperature Preset buttons not working as expected
- **Identification Method**: Through code inspection, I realised that the event listener for these preset buttons had an empty function, and so there was no action to be perfermed when a button was clicked
- **Solution**: So I had to write a logic inside the event listener to conditionally check which button was clicked at any point in time, and then check the right preset temperature for the current room, and then render it on the UI accordingly.
- **Status After Solution**: Fixed

## Bug #6

- **Problem**: Error message from a previous invalid input remains visible in future preset configurations.
- **Identification Method**: I noticed this issue through UI observation. Thus, the error message from previous invalid inputs were still showing even when you have empty inputs on your next reopen of the configuration panel
- **Solution**: So I had to style the error message not to display or to be set to hidden, whenever the configuration panel is opened. I also cleared the inputs on every reopen to avoid meeting previous values in the configuration.
- **Status After Solution**: Error message hidden on every reopening of the configuration panel.

## Bug #7

- **Problem**: Alternate status messages on the AirConditioner
- **Identification Method**: So I noticed that on the frontend, as and when the temperature of an AC `increased` or `decreased`, the corresponding message for that particular activity was showing the opposite of the action that was being done.
- **Solution**: So I inspected the script file and realised that the condition for displaying `warm message` for was set to true when the decrease button was click, instead of displaying `cool message`. And same for the increase button. So I just flipped the `less-than sign` to a `greater-than sign`
- **Status After Solution**: AC status displays the expected message

## Bug #8

- **Problem**: Cursor pointer symbol everywhere
- **Identification Method**: Through UI observation, I realised that the `cursor-pointer` property was true for almost every single thing on the page, which is bad UX. The user knows that the pointer cursor is for selecting items on the webpage, but here is the case that every item on the page displays a pointer cursor, even if an item is not selectable or clickable
- **Solution**: So I went into the styling and realised that the entire `container` element had a cursor-pointer property, so i just took that line off.
- **Status After Solution**: The pointer cursor only shows for selectable and clickable items
