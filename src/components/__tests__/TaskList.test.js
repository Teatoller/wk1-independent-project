import React from "react";
import { render, screen } from "@testing-library/react";
import TaskList from "../TaskList";
import TaskItem from "../TaskItem";

jest.mock("../TaskItem", () => {
    return jest.fn(({ task }) => <li data-testid={`task-item-mock-${task.id}`}>{task.text}</li>);
  });
  

describe("TaskList Component", () => {
  const mockUpdateTaskContent = jest.fn();
  const mockUpdateTaskStatus = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders 'No tasks available' message when the task list is empty", () => {
    render(
      <TaskList
        tasks={[]}
        updateTaskContent={mockUpdateTaskContent}
        updateTaskStatus={mockUpdateTaskStatus}
      />
    );

    expect(screen.getByText("No tasks available. Add a new task!")).toBeInTheDocument();
  });
});
