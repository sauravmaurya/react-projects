import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoItems from './TodoItems';

describe('TodoItems Component', () => {
    const mockItems = [
        { id: '1', name: 'Todo Item 1' },
        { id: '2', name: 'Todo Item 2' }
    ];

    const mockDeleteItem = jest.fn();
    const mockEditItem = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders all todo items', () => {
        render(
            <TodoItems
                items={mockItems}
                deleteItem={mockDeleteItem}
                editItem={mockEditItem}
            />
        );

        expect(screen.getByText('Todo Item 1')).toBeInTheDocument();
        expect(screen.getByText('Todo Item 2')).toBeInTheDocument();
    });

    test('renders empty list when no items provided', () => {
        render(
            <TodoItems
                items={[]}
                deleteItem={mockDeleteItem}
                editItem={mockEditItem}
            />
        );

        expect(screen.queryByText('Todo Item 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Todo Item 2')).not.toBeInTheDocument();
    });

    test('calls deleteItem with correct id when delete button is clicked', () => {
        render(
            <TodoItems
                items={mockItems}
                deleteItem={mockDeleteItem}
                editItem={mockEditItem}
            />
        );

        const deleteButtons = screen.getAllByTestId('delete-button');
        fireEvent.click(deleteButtons[0]);

        expect(mockDeleteItem).toHaveBeenCalledWith('1');
    });

    test('calls editItem with correct id when edit button is clicked', () => {
        render(
            <TodoItems
                items={mockItems}
                deleteItem={mockDeleteItem}
                editItem={mockEditItem}
            />
        );

        const editButtons = screen.getAllByTestId('edit-button');
        fireEvent.click(editButtons[0]);

        expect(mockEditItem).toHaveBeenCalledWith('1');
    });

    test('renders correct number of todo items', () => {
        render(
            <TodoItems
                items={mockItems}
                deleteItem={mockDeleteItem}
                editItem={mockEditItem}
            />
        );

        const todoItems = screen.getAllByRole('heading', { level: 3 });
        expect(todoItems).toHaveLength(2);
    });
}); 