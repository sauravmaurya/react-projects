import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from './Todo';

// Mock localStorage
const mockLocalStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
};
Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

describe('Todo Component', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();
        // Reset localStorage mock
        mockLocalStorage.getItem.mockReturnValue(null);
    });

    test('renders Todo component with initial state', () => {
        render(<Todo />);
        expect(screen.getByPlaceholderText('✍️ Add Item')).toBeInTheDocument();
        expect(screen.getByText('Add Your List Here ✌')).toBeInTheDocument();
        expect(screen.getByText('CHECK LIST')).toBeInTheDocument();
    });

    test('adds a new todo item', () => {
        render(<Todo />);
        const input = screen.getByPlaceholderText('✍️ Add Item');
        const addButton = screen.getByTestId('add-button');

        fireEvent.change(input, { target: { value: 'New Todo Item' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    });

    test('shows alert when trying to add empty todo', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();
        render(<Todo />);

        const addButton = screen.getByTestId('add-button');
        fireEvent.click(addButton);

        expect(alertMock).toHaveBeenCalledWith('please input a task');
        alertMock.mockRestore();
    });

    test('deletes a todo item', () => {
        render(<Todo />);

        // First add a todo
        const input = screen.getByPlaceholderText('✍️ Add Item');
        const addButton = screen.getByTestId('add-button');
        fireEvent.change(input, { target: { value: 'Todo to Delete' } });
        fireEvent.click(addButton);

        // Then delete it
        const deleteButton = screen.getByTestId('delete-button');
        fireEvent.click(deleteButton);

        expect(screen.queryByText('Todo to Delete')).not.toBeInTheDocument();
    });

    test('edits a todo item', () => {
        render(<Todo />);

        // First add a todo
        const input = screen.getByPlaceholderText('✍️ Add Item');
        const addButton = screen.getByTestId('add-button');
        fireEvent.change(input, { target: { value: 'Original Todo' } });
        fireEvent.click(addButton);

        // Then edit it
        const editButton = screen.getByTestId('edit-button');
        fireEvent.click(editButton);

        // Update the input and save
        fireEvent.change(input, { target: { value: 'Updated Todo' } });
        fireEvent.click(addButton);

        expect(screen.getByText('Updated Todo')).toBeInTheDocument();
        expect(screen.queryByText('Original Todo')).not.toBeInTheDocument();
    });

    test('removes all todo items', () => {
        render(<Todo />);

        // Add multiple todos
        const input = screen.getByPlaceholderText('✍️ Add Item');
        const addButton = screen.getByTestId('add-button');

        fireEvent.change(input, { target: { value: 'Todo 1' } });
        fireEvent.click(addButton);

        fireEvent.change(input, { target: { value: 'Todo 2' } });
        fireEvent.click(addButton);

        // Remove all todos
        const removeAllButton = screen.getByText('CHECK LIST');
        fireEvent.click(removeAllButton);

        expect(screen.queryByText('Todo 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Todo 2')).not.toBeInTheDocument();
    });

    test('loads todos from localStorage on mount', () => {
        const mockTodos = [
            { id: '1', name: 'Loaded Todo 1' },
            { id: '2', name: 'Loaded Todo 2' }
        ];
        mockLocalStorage.getItem.mockReturnValue(JSON.stringify(mockTodos));

        render(<Todo />);

        expect(screen.getByText('Loaded Todo 1')).toBeInTheDocument();
        expect(screen.getByText('Loaded Todo 2')).toBeInTheDocument();
    });

    test('saves todos to localStorage when updated', async () => {
        render(<Todo />);

        const input = screen.getByPlaceholderText('✍️ Add Item');
        const addButton = screen.getByTestId('add-button');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        await waitFor(() => {
            expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
                'todoList',
                expect.any(String)
            );
        });
    });
}); 