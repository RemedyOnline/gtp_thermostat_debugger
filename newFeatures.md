## Feature #1

- **Feature**: Add a button that turns on all the ACs in the house.
- **Implementation Summary**: (e.g., Console error, UI behavior, inspection)
- **Solution**: What we did to fix it.
- **Status After Solution**: (Fixed, partially fixed, not fixed, needs review)

## Feature #1

- **Feature**: Add a button that turns on all the ACs in the house.
- **Implementation Summary**: A new button was created and linked to an event listener. When clicked, the function loops through all room objects in the rooms array, setting `airConditionerOn` to `true`. The UI is then refreshed by calling the `generateRooms()` function, which updates the visual state of each room (e.g., showing the power icon and temperature status).
- **Result**: When the button is clicked, all room ACs are visibly turned on, showing the updated icons and the _heating/cooling status_.
- **Status After Solution**: (Fixed, partially fixed, not fixed, needs review)

## Feature #2

- **Feature**: AC Time Scheduling Feature.
- **About Feature**: Allows users to schedule automatic start and stop times for each room's air conditioner. Once a start time and end time are set, the AC will automatically turn on at the specified start time and turn off at the end time — improving energy efficiency and user convenience without manual intervention.
- **Implementation Summary**: `Start` and `end` time inputs were added to each room's card in the UI. These times are stored in the corresponding room object as `startTime` and `endTime`. A function was then created to check the current time every `30 seconds` and then compare it with each room's schedule. If the current time matches the `startTime`, `airConditionerOn` is set to `true`; if it matches the `endTime`, it is set to `false`. The `generateRooms()` function is called after each change to update the UI accordingly.
- **Result**: Users can schedule time for the AC to be turned ON or OFF automatically.
- **Status After Solution**: (Fixed, partially fixed, not fixed, needs review)
