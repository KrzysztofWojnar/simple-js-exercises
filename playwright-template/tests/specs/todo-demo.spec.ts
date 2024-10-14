import { expect } from '@playwright/test';
import { test } from '../playwright-fixtures';
import { ServiceUrl } from '@tests/urls/service-url';

// IMPORTANT: Comments are for study purposes only, do not misuse in your project

test.use({ baseURL: ServiceUrl.PLAYWRIGHT_DEMO });
test.beforeEach(async ({ toDoPage }) => {
    await toDoPage.navigateTo();
});

const TODO_ITEMS = [
    'buy some cheese',
    'feed the cat',
    'book a doctors appointment',
] as const;

test.describe('New Todo', { tag: '@test' }, () => {
    test('should allow me to add todo items', async ({ logger, toDoPage }) => {
        logger.info('This is info message from test');

        await toDoPage.addNewToDoItem(TODO_ITEMS[0]);
        await toDoPage.verifyToDoItemList([TODO_ITEMS[0]]);
        await toDoPage.addNewToDoItem(TODO_ITEMS[1]);
        await toDoPage.verifyToDoItemList([TODO_ITEMS[0], TODO_ITEMS[1]]);
        await toDoPage.verifyNumberOfTodosInLocalStorage(2);
    });

    test('should clear text input field when an item is added', async ({
        toDoPage,
    }) => {
        await toDoPage.addNewToDoItem(TODO_ITEMS[0]);
        await toDoPage.verifyInputIsEmpty();
        await toDoPage.verifyNumberOfTodosInLocalStorage(1);
    });

    test('should append new items to the bottom of the list', async ({
        page,
        toDoPage,
    }) => {
        await toDoPage.createDefaultTodos([...TODO_ITEMS]);

        // Check test using 4 different methods.
        await expect(page.getByText('3 items left')).toBeVisible();
        await expect(toDoPage.todoCount).toHaveText('3 items left');
        await expect(toDoPage.todoCount).toContainText('3');
        await expect(toDoPage.todoCount).toHaveText(/3/);

        await toDoPage.verifyToDoItemList([...TODO_ITEMS]);
        await toDoPage.verifyNumberOfTodosInLocalStorage(3);
    });
});

test.describe('Mark all as completed', () => {
    test.beforeEach(async ({ toDoPage }) => {
        await toDoPage.createDefaultTodos([...TODO_ITEMS]);
        await toDoPage.verifyNumberOfTodosInLocalStorage(3);
    });

    test.afterEach(async ({ toDoPage }) => {
        await toDoPage.verifyNumberOfTodosInLocalStorage(3);
    });

    test('should allow me to mark all items as completed', async ({
        toDoPage,
    }) => {
        await toDoPage.checkToggleAll();
        await toDoPage.verifyToDoItemStatus([
            'completed',
            'completed',
            'completed',
        ]);
        await toDoPage.verifyNumberOfCompletedTodosInLocalStorage(3);
    });

    test('should allow me to clear the complete state of all items', async ({
        toDoPage,
    }) => {
        await toDoPage.checkToggleAll();
        await toDoPage.uncheckToggleAll();
        await toDoPage.verifyToDoItemStatus(['', '', '']);
    });

    test('complete all checkbox should update state when items are completed / cleared', async ({
        toDoPage,
    }) => {
        await toDoPage.checkToggleAll();
        await toDoPage.verifyToggleAllIsChecked();
        await toDoPage.verifyNumberOfCompletedTodosInLocalStorage(3);
        await toDoPage.uncheckTodo(0);
        await toDoPage.verifyToggleAllIsChecked(false);
        await toDoPage.checkTodo(0);
        await toDoPage.verifyNumberOfCompletedTodosInLocalStorage(3);
        await toDoPage.verifyToggleAllIsChecked();
    });
});

test.describe('Item', () => {
    test('should allow me to mark items as complete', async ({ toDoPage }) => {
        for (const item of TODO_ITEMS.slice(0, 2)) {
            await toDoPage.addNewToDoItem(item);
        }

        await toDoPage.checkTodo(0);
        await toDoPage.verifyItemStatus(0);

        await toDoPage.checkTodo(1);
        await toDoPage.verifyItemStatus(1);

        // Assert completed class.
        for (const item of await toDoPage.toDoItems.all()) {
            await expect(item).toHaveClass('completed');
        }
    });

    test('should allow me to un-mark items as complete', async ({
        toDoPage,
    }) => {
        for (const item of TODO_ITEMS.slice(0, 2)) {
            await toDoPage.addNewToDoItem(item);
        }

        await toDoPage.checkTodo(0);
        await toDoPage.verifyItemStatus(0);
        await toDoPage.verifyItemStatus(1, { isCompleted: false });
        await toDoPage.verifyNumberOfCompletedTodosInLocalStorage(1);

        await toDoPage.uncheckTodo(0);
        await toDoPage.verifyItemStatus(0, { isCompleted: false });
        await toDoPage.verifyItemStatus(1, { isCompleted: false });
        await toDoPage.verifyNumberOfCompletedTodosInLocalStorage(0);
    });

    test('should allow me to edit an item', async ({ toDoPage }) => {
        await toDoPage.createDefaultTodos([...TODO_ITEMS]);

        await toDoPage.dblclickToDoItem(1);
        await toDoPage.verifyTodoEditTextboxValue(1, TODO_ITEMS[1]);
        await toDoPage.fillEditTextbox(1, 'buy some sausages');
        await toDoPage.acceptTodoEditTextbox(1);

        // Explicitly assert the new text value.
        await toDoPage.verifyToDoItemList([
            TODO_ITEMS[0],
            'buy some sausages',
            TODO_ITEMS[2],
        ]);
        await toDoPage.verifyTodosInLocalStorage('buy some sausages');
    });
});

test.describe('Editing', () => {
    test.beforeEach(async ({ toDoPage }) => {
        await toDoPage.createDefaultTodos([...TODO_ITEMS]);
        await toDoPage.verifyNumberOfTodosInLocalStorage(3);
    });

    test('should hide other controls when editing', async ({ toDoPage }) => {
        await toDoPage.dblclickToDoItem(1);
        await toDoPage.verifyCheckboxIsHidden(1);
        await toDoPage.verifyLabelIsHidden(1, TODO_ITEMS[1]);
        await toDoPage.verifyNumberOfTodosInLocalStorage(3);
    });

    test('should save edits on blur', async ({ toDoPage }) => {
        await toDoPage.dblclickToDoItem(1);
        await toDoPage.fillEditTextbox(1, 'buy some sausages');
        await toDoPage.todoEditTextbox(1).dispatchEvent('blur');

        await toDoPage.verifyToDoItemList([
            TODO_ITEMS[0],
            'buy some sausages',
            TODO_ITEMS[2],
        ]);
        await toDoPage.verifyTodosInLocalStorage('buy some sausages');
    });

    test('should trim entered text', async ({ toDoPage }) => {
        await toDoPage.dblclickToDoItem(1);
        await toDoPage.fillEditTextbox(1, 'buy some sausages');
        await toDoPage.acceptTodoEditTextbox(1);

        await toDoPage.verifyToDoItemList([
            TODO_ITEMS[0],
            'buy some sausages',
            TODO_ITEMS[2],
        ]);
        await toDoPage.verifyTodosInLocalStorage('buy some sausages');
    });

    test('should remove the item if an empty text string was entered', async ({
        toDoPage,
    }) => {
        await toDoPage.dblclickToDoItem(1);
        await toDoPage.fillEditTextbox(1, '');
        await toDoPage.acceptTodoEditTextbox(1);

        await toDoPage.verifyToDoItemList([TODO_ITEMS[0], TODO_ITEMS[2]]);
    });

    test('should cancel edits on escape', async ({ toDoPage }) => {
        await toDoPage.dblclickToDoItem(1);
        await toDoPage.fillEditTextbox(1, 'buy some sausages');
        await toDoPage.exitTodoEditTextbox(1);
        await toDoPage.verifyToDoItemList([...TODO_ITEMS]);
    });
});

test.describe('Counter', () => {
    test('should display the current number of todo items', async ({
        toDoPage,
    }) => {
        await toDoPage.addNewToDoItem(TODO_ITEMS[0]);
        await toDoPage.verifyToDoCountValue('1');
        await toDoPage.addNewToDoItem(TODO_ITEMS[1]);
        await toDoPage.verifyToDoCountValue('2');
        await toDoPage.verifyNumberOfTodosInLocalStorage(2);
    });
});

test.describe('Clear completed button', () => {
    test.beforeEach(async ({ toDoPage }) => {
        await toDoPage.createDefaultTodos([...TODO_ITEMS]);
    });

    test('should display the correct text', async ({ toDoPage }) => {
        await toDoPage.checkTodo(0);
        await toDoPage.verifyClearCompletedBtnVisible(true);
    });

    test('should remove completed items when clicked', async ({ toDoPage }) => {
        await toDoPage.checkTodo(1);
        await toDoPage.clearCompleted();
        await toDoPage.verifyHowManyItems(2);
        await toDoPage.verifyToDoItemList([TODO_ITEMS[0], TODO_ITEMS[2]]);
    });

    test('should be hidden when there are no items that are completed', async ({
        toDoPage,
    }) => {
        await toDoPage.checkTodo(0);
        await toDoPage.clearCompleted();
        await toDoPage.verifyClearCompletedBtnVisible(false);
    });
});

test.describe('Persistence', () => {
    test('should persist its data', async ({ page, toDoPage }) => {
        for (const item of TODO_ITEMS.slice(0, 2)) {
            await toDoPage.addNewToDoItem(item);
        }

        await toDoPage.checkTodo(0);
        await toDoPage.verifyToDoItemList([TODO_ITEMS[0], TODO_ITEMS[1]]);
        await toDoPage.verifyCheckboxIsChecked(0);
        await toDoPage.verifyToDoItemStatus(['completed', '']);

        await toDoPage.verifyNumberOfCompletedTodosInLocalStorage(1);

        await page.reload();
        await toDoPage.verifyToDoItemList([TODO_ITEMS[0], TODO_ITEMS[1]]);
        await toDoPage.verifyCheckboxIsChecked(0);
        await toDoPage.verifyToDoItemStatus(['completed', '']);
    });
});

test.describe('Routing', () => {
    test.beforeEach(async ({ toDoPage }) => {
        await toDoPage.createDefaultTodos([...TODO_ITEMS]);
        // make sure the app had a chance to save updated todos in storage
        // before navigating to a new view, otherwise the items can get lost :(
        // in some frameworks like Durandal
        await toDoPage.verifyTodosInLocalStorage(TODO_ITEMS[0]);
    });

    test('should allow me to display active items', async ({ toDoPage }) => {
        await toDoPage.checkTodo(1);

        await toDoPage.verifyNumberOfCompletedTodosInLocalStorage(1);
        await toDoPage.clickActiveFilter();
        await toDoPage.verifyHowManyItems(2);
        await toDoPage.verifyToDoItemList([TODO_ITEMS[0], TODO_ITEMS[2]]);
    });

    test('should respect the back button', async ({ page, toDoPage }) => {
        await toDoPage.checkTodo(1);

        await toDoPage.verifyNumberOfCompletedTodosInLocalStorage(1);

        await test.step('Showing all items', async () => {
            await toDoPage.clickAllFilter();
            await toDoPage.verifyHowManyItems(3);
        });

        await test.step('Showing active items', async () => {
            await toDoPage.clickActiveFilter();
        });

        await test.step('Showing completed items', async () => {
            await toDoPage.clickCompletedFilter();
        });

        await toDoPage.verifyHowManyItems(1);
        await page.goBack();
        await toDoPage.verifyHowManyItems(2);
        await page.goBack();
        await toDoPage.verifyHowManyItems(3);
    });

    test('should allow me to display completed items', async ({ toDoPage }) => {
        await toDoPage.checkTodo(1);
        await toDoPage.verifyNumberOfCompletedTodosInLocalStorage(1);
        await toDoPage.clickCompletedFilter();
        await toDoPage.verifyHowManyItems(1);
    });

    test('should allow me to display all items', async ({ toDoPage }) => {
        await toDoPage.checkTodo(1);
        await toDoPage.verifyNumberOfCompletedTodosInLocalStorage(1);
        await toDoPage.clickActiveFilter();
        await toDoPage.clickCompletedFilter();
        await toDoPage.clickAllFilter();
        await toDoPage.verifyHowManyItems(3);
    });

    test('should highlight the currently applied filter', async ({
        toDoPage,
    }) => {
        await toDoPage.verifyAllFilterIsSelected();

        await toDoPage.clickActiveFilter();

        await toDoPage.verifyActiveFilterIsSelected();
        await toDoPage.clickCompletedFilter();

        await toDoPage.verifyCompletedFilterIsSelected();
    });
});
