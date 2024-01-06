# Taskboard App

## branch 1

Worked on the TaskboardView render from a data structure. moved the list item rendering to inside the TaskList Component. added the options button for the tasklist items and fixed the contact component as well

11/25/2023 worked on the popover menu on the task list item options button. updated the taskListItem component's css and added the onclick event to the list item. Updated the way that the button popover is used so you have to pass a Popover component and then the content of that component

11/26/2023 tweaked the archetecture of the PopoverButton,Popover and TaskListItemMenu components

## PopoverReviseBrach

11/27/2023 Refactored the popover component. working on adding dynamic height

12/09/2023 worked on the add task form as a list item working on taskboard view state mnangement

## CreateTaskBranch

12/14/2023 restructured the way the state was being managed at the different component level. Moved only column data to the column components and then passed a columnId to the taskList component and it will do the fetching and updating of the tasks; Created a useForm hook for the new task list item form to use to clean up that component. created a useList hook to help manage the task list state and clean up that component. Also in probably a waste of time also built a mock data api fetching file that will then be able to be replaced later with actual api calls.  just don't feel like wiring up the back end at this point.  I also created a task object model to be able create new task objects;  Need to add the ability to select an assignee to the new task and possibly status, priority, etc; 

12/16/2023 added form validation to the add new item form. tweaked the useWEForm hook. created a new onsubmit handler for the add new item form. wired up the task list item menu delete button so that it deletes the task from the array and view. wired up the assignee update method so that you can change the assignee for the task.

12/23/2023 added useClickOutside hook to the popover component. created a ListMenu component for list item componenent settings menus. Created Task status update menu, task priority update menu and refactored the assignee update menu. Everything is working menu and task list item wise except for drag and drop and editing a task item. cleaned up some css as well

## LoginViewBranch

1/6/2024 Created the login view component rough code. I also refactored the popover component and the Task item menu.  I need to create a better way to transition between menus. I created a way to pop out to the left and the right as well as stay anchored to the top of the button.  This needs to be reworked and a better method developed. TODO: when choosing a menu option in the Task item menu, it goes back to the main menu each time. When you log in to the login view, it will take you to the task board view;
