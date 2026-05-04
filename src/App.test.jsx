import React from 'react';
import { describe, test, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => cleanup());

describe('App component', () => {
  test('renders heading and initial projects', () => {
    render(<App />);

    expect(screen.getByText(/Creative Agency Portfolio/i)).toBeTruthy();
    expect(screen.getByText(/Web Design/i)).toBeTruthy();
    expect(screen.getByText(/Mobile App/i)).toBeTruthy();
  });

  test('adds a new project when the form is submitted', () => {
    render(<App />);

    const titleInput = screen.getAllByPlaceholderText(/Project Title/i)[0];
    fireEvent.change(titleInput, { target: { value: 'New Project' } });
    const categoryInput = screen.getAllByPlaceholderText(/Category/i)[0];
    fireEvent.change(categoryInput, {
      target: { value: 'Development' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Add Project/i }));

    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings.some((node) => node.textContent === 'New Project')).toBe(true);
  });

  test('filters projects by search term', () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText(/Search projects/i), {
      target: { value: 'Mobile' },
    });

    expect(screen.getByText(/Mobile App/i)).toBeTruthy();
    expect(screen.queryByText(/Web Design/i)).toBeNull();
  });
});
