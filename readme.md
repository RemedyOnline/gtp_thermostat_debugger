# 🔧 How to Use the Website

This web application allows you to manage Air Conditioner (AC) schedules for different rooms. You can as well as new rooms to the collection of rooms in the system.
Follow the steps below to get started:

## ➕ Adding a Room

- Locate the “Add Room” button on top of the homepage.
- Enter a unique room name (e.g., Meeting Room, Office 1, Balcony, etc.) and fill in all the necessary room details, including an image sample of the room for an intuitive experience.
- Click the `“Add Room”` button to add, or `cancel` to cancel the process.
- The room will be added to the list, each with its own AC toggle and scheduling options.

## ❄️ Turning On/Off the AC

- Each room has an AC switch (toggle button).
- Toggle it `ON` to activate scheduling options for that room.
- Toggle it `OFF` to disable the AC and hide the scheduling form.
- Aside the individual power on button for each AC, we also have a `Turn On All ACs` button which turns on all ACs at the same time, and `OFF` when clicked again, but on the condition that all ACs are `ON` in the first place.

## ⏰ Scheduling Start and End Time

- When the AC is turned ON, a time scheduler appears for that room.
- Use the "Set Start Time" input to choose when the AC should turn on.
- Use the "Set End Time" input to choose when the AC should turn off.
- The app will store and apply these times for each room independently.
- A built-in time checker checks the schedule every 30secs to see if a schedule is meets the current time or not.

## 🧠 Notes

- Times must be set in 24-hour format, specifically `HH:MM`.
- The scheduler is hidden until the AC for a room is turned `ON`.
- Each room's schedule is maintained separately to allow flexible control.
- A toast message is showed for almost every completed activity for better UX.
