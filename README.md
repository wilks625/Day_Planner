# 05 Third-Party APIs: Work Day Scheduler

This application is a Planner that allows the user to input events into the text area, and then able to save the input using the save button to the right. When the user reloads the page, the input will remain.

When the planner is opened, the current day and time is displayed at the top of the planner.

When the user scrolls down, they are presented with timeblocks for standard business hours. The timeblock is color coded to indicate if it is in the past(grey), present(red), or future(green). 

When the timeblock is clicked, the user may enter a event and then press the save button for that timeblock, which will be stored in local storage.

When the text for that event is saved in local storage, the saved events persist, even after refreshing the webpage.
