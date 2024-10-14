import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from '@testing-framework/gui/base-page';
import { Logger } from '@testing-framework/logging/logger';
import { PlaywrightDemoUrl } from '@tests/urls/playwright-demo-url';

export class ToDoPage extends BasePage {
    readonly newItemInput: Locator = this.page.getByPlaceholder(
        'What needs to be done?'
    );
    readonly toggleAll: Locator = this.page.getByLabel('Mark all as complete');
    readonly toDoItems: Locator = this.page.getByTestId('todo-item');
    readonly todoCount: Locator = this.page.getByTestId('todo-count');
    readonly clearCompletedBtn: Locator = this.page.getByRole('button', {
        name: 'Clear completed',
    });
    readonly activeFilterLink: Locator = this.page.getByRole('link', {
        name: 'Active',
    });
    readonly allFilterLink: Locator = this.page.getByRole('link', {
        name: 'All',
    });
    readonly completedFilterLink: Locator = this.page.getByRole('link', {
        name: 'Completed',
    });

    constructor(page: Page, logger: Logger) {
        super(
            page,
            logger,
            page.getByRole('heading', {
                level: 1,
                name: 'todos',
                exact: true,
            }),
            { urlPath: PlaywrightDemoUrl.TODO }
        );
        this.logger.info('ToDo page is created');
    }

    async addNewToDoItem(newToDo: string) {
        await this.newItemInput.fill(newToDo);
        await this.newItemInput.press('Enter');
    }

    async verifyNumberOfTodosInLocalStorage(expected: number) {
        return await this.page.waitForFunction((e: number) => {
            return JSON.parse(localStorage['react-todos']).length === e;
        }, expected);
    }

    /**
     * This function is intended to fill empty todo list.
     * @param toDoItemsList list of strings which represents todos
     */
    async createDefaultTodos(toDoItemsList: string[]) {
        for (const item of toDoItemsList) {
            await this.addNewToDoItem(item);
        }
    }

    async verifyNumberOfCompletedTodosInLocalStorage(expected: number) {
        return await this.page.waitForFunction(e => {
            return (
                JSON.parse(localStorage['react-todos']).filter(
                    (todo: { completed: boolean }) => todo.completed
                ).length === e
            );
        }, expected);
    }

    async uncheckTodo(index: number) {
        await this.todoCheckbox(index).uncheck();
    }

    async checkTodo(index: number) {
        await this.todoCheckbox(index).check();
    }

    todoCheckbox(index: number) {
        return this.toDoItems.nth(index).getByRole('checkbox');
    }

    todoEditTextbox(index: number) {
        return this.toDoItems.nth(index).getByRole('textbox', { name: 'Edit' });
    }

    todoLabel(index: number, text: string) {
        return this.toDoItems.nth(index).locator('label', {
            hasText: text,
        });
    }

    async acceptTodoEditTextbox(index: number) {
        await this.todoEditTextbox(index).press('Enter');
    }

    async exitTodoEditTextbox(index: number) {
        await this.todoEditTextbox(index).press('Escape');
    }

    async verifyTodosInLocalStorage(title: string) {
        return await this.page.waitForFunction(t => {
            return JSON.parse(localStorage['react-todos'])
                .map((todo: { title: string }) => todo.title)
                .includes(t);
        }, title);
    }

    async clearCompleted() {
        await this.clearCompletedBtn.click();
    }

    async clickActiveFilter() {
        await this.activeFilterLink.click();
    }

    async clickAllFilter() {
        await this.allFilterLink.click();
    }

    async clickCompletedFilter() {
        await this.completedFilterLink.click();
    }

    async verifyToDoItemList(toDoList: string[]) {
        await expect(this.toDoItems).toHaveText(toDoList);
    }

    async verifyInputIsEmpty() {
        await expect(this.newItemInput).toBeEmpty();
    }

    async verifyToDoItemStatus(statusList: string[]) {
        await expect(this.toDoItems).toHaveClass(statusList);
    }

    async verifyToggleAllIsChecked(isChecked = true) {
        await expect(this.toggleAll).toBeChecked({
            checked: isChecked,
        });
    }

    async verifyItemStatus(index: number, options?: { isCompleted: boolean }) {
        if (options?.isCompleted === false) {
            await expect(this.toDoItems.nth(index)).not.toHaveClass(
                'completed'
            );
            return;
        }
        await expect(this.toDoItems.nth(index)).toHaveClass('completed');
    }

    async verifyTodoEditTextboxValue(index: number, value: string) {
        await expect(this.todoEditTextbox(index)).toHaveValue(value);
    }

    async verifyCheckboxIsHidden(
        index: number,
        options?: { isHidden: boolean }
    ) {
        if (options?.isHidden === false) {
            await expect(this.todoCheckbox(index)).toBeVisible();
            return;
        }
        await expect(this.todoCheckbox(index)).toBeHidden();
    }

    async verifyLabelIsHidden(
        index: number,
        text: string,
        options?: { isHidden: boolean }
    ) {
        if (options?.isHidden === false) {
            await expect(this.todoLabel(index, text)).toBeVisible();
            return;
        }
        await expect(this.todoLabel(index, text)).toBeHidden();
    }

    async verifyToDoCountValue(value: string) {
        await expect(this.todoCount).toContainText(value);
    }

    async verifyClearCompletedBtnVisible(isVisible: boolean) {
        if (isVisible) {
            await expect(this.clearCompletedBtn).toBeVisible();
        } else {
            await expect(this.clearCompletedBtn).toBeHidden();
        }
    }

    async verifyHowManyItems(numberOfItems: number) {
        await expect(this.toDoItems).toHaveCount(numberOfItems);
    }

    async verifyCheckboxIsChecked(index: number, isChecked = true) {
        await expect(this.todoCheckbox(index)).toBeChecked({
            checked: isChecked,
        });
    }

    async verifyAllFilterIsSelected() {
        await expect(this.allFilterLink).toHaveClass('selected');
    }

    async verifyActiveFilterIsSelected() {
        await expect(this.activeFilterLink).toHaveClass('selected');
    }

    async verifyCompletedFilterIsSelected() {
        await expect(this.completedFilterLink).toHaveClass('selected');
    }

    async checkToggleAll() {
        await this.toggleAll.check();
    }

    async uncheckToggleAll() {
        await this.toggleAll.uncheck();
    }

    async dblclickToDoItem(index: number) {
        await this.toDoItems.nth(index).dblclick();
    }

    async fillEditTextbox(index: number, content: string) {
        await this.todoEditTextbox(index).fill(content);
    }
}
