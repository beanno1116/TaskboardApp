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

1/22/2024 created a signup form component for signing up to taskboard. Added a config.js file for things like api endpoints. Refactored the login view component. Created a TBForm component so that the input fields and buttons will be consistent. Added react-query and axios to the project to simplify the network requests and state management. created an auth context to manage and maintain auth state for the app

1/24/2024 Tested why getting cors errors with axios. created basic logic to switch between login view and sign up view. Also reworked the login.php api route. Refactored the useAuth hook to interact with localstorage

1/27/2024 Created a useAuth hook with an auth context and auth provider. It will keep the auth state for the app and also it will sync with localstorage to retain auth even after refresh. Added the sign up action on the api backend and also refactored the session process by extracting the session actions to a seperate class.

## TaskboardTaskbarBranch

1/27/2024 Updated the css for the toolbar title element. Added a drop down menu for the profile button in the tool bar and built the logout action and functionality. Will log out if you click on the logout button in the menu. Created a toolbar user menu component for the user menu in the tool bar. Added icons for the toolbar user menu buttons

## AddTaskFormBranch

1/28/2024 resolved the CORS issue with axios so I could reach the backend server; added the backend api call for adding a task and deleting a task; created some infrastructure on the backend as well. add some functions to the useTasklist hook; Also updated the useAuth hook to use axios; refactored the task data obj

## TaskListDragAndDrop

2/3/2024 added drag and drop to the task list component. First draft to get something working. created an app utils for functions refactoring from app only.

## TaskListItemOptionMenu

2/17/2024 updated the list item option menu. got the contact circle to poplate with the initials of the contactId. Fixed the delete button not updating live and also being connected to the incorrect list item. Fixed the add task item updating the task list in real time. Add a getUser and getUsers api request

2/24/2024 update the list item menu option for status. Also added the updateTask api call as well as added getMenuItems api call as well.

3/2/2024 added animation to the tasklist items entering the view. created list item components for the list menus. Created the ProjectLead list menu component. set up the form data to accept the contactId from the list menu. TODO: need to fix the way that the pop over closes so that when a menu item is clicked and the update occurs the popover closes.

## Add Toast Branch

3/4/2024 Add a toast mechanism to the app and added it to the add and delete operations. Needs to work on css and find the best way to animate the toasts in and out. Created a WEToast component to handle the toasts. Look into creating a hook and possibly another way to implement.  Currently using an event to display the toast. Could possibly share a method in a context or other way

## Popover Work Branch

3/21/2024 Fixed the popover issue in the list view component. cleaned up the useTaskList hook. Redesigned the toast components

## Api Connection Branch

3/30/2024 Refactored the way that taskboard app interfaces with the backend server. refactored some of the backend api calls to return an objec with the results of the api call set to results instance var and also sending back a meta object as well. This will help if pagination is needed. Cleaned up the usage of react-query and axios. Refactored the assignee menu, and the status menu as well to operate with the new api connection.

## WEModal Branch

3/31/2024 Add a new modal component to the app.  Wired it up to the user menu drop down from the top left. It will show the profile edit form and the settings form.
4/14/2024 updated the Profile Menu and form as well as started to build controllers for the main components that will be used.  That way a component has a controller to update the view to seperate concerns
4/28/2024 finished the toolbar profile menu modal form view to include the general, contact and security forms. Still have to make the security form action to update security information. added a notification toolbar button. changed the tool bar popover to the NTTPopover.

## Add Testing Branch

1/12/2024 ran the following commands

1. npm install jest --save-dev
2. npm install @testing-library/react --save-dev
