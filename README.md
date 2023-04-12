# Cornell To-Do List App

A project created for the Cornell Research Administration Information Services Team.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Design and Development

I first created a skeleton app that had working API calls but virtually no CSS, then figured out styling later. Much of the CSS comes from Angular Material UI components and typography.

My goal was a design that felt intuitive to use. The page reloads when tasks are added and deleted so it can fetch the newly modified list of tasks. It does not reload when checkboxes are checked, but tasks are being updated via API whenever checkboxes are toggled--this can be verified if you reload the page to see that completed tasks persist.

In total, this app took about 7 non-consecutive hours to complete.

### Future Improvements

Here are some things I would improve if I had another day to work on this app:

- Add ability to edit task description in place (I spent some time trying to do this)
- Find a better way to re-fetch tasks after a new one is added or deleted (use observable?)
    - Hopefully, this would make it so you could keep selected on the add text field after submtiting, so you don’t have to leave your keyboard to submit multiple tasks
- Strikethrough text upon completing task
- Make completed tasks go to the bottom
- Make newly added tasks go to the bottom
- Ability to click anywhere on task to check box (except delete button)
- Improve page responsiveness
