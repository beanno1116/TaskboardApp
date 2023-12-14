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
