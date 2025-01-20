import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "../TaskItem";

describe("TaskItem Component", () => {
  const mockUpdateTaskContent = jest.fn();
  const mockUpdateTaskStatus = jest.fn();

  const defaultTask = {
    id: 1,
    text: "Sample Task",
    completed: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the task text and checkbox correctly", () => {
    render(
      <TaskItem
        task={defaultTask}
        updateTaskContent={mockUpdateTaskContent}
        updateTaskStatus={mockUpdateTaskStatus}
      />
    );

    expect(screen.getByText("Sample Task")).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("toggles task status when the checkbox is clicked", () => {
    render(
      <TaskItem
        task={defaultTask}
        updateTaskContent={mockUpdateTaskContent}
        updateTaskStatus={mockUpdateTaskStatus}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockUpdateTaskStatus).toHaveBeenCalledTimes(1);
    expect(mockUpdateTaskStatus).toHaveBeenCalledWith(defaultTask.id, true);
  });

  it("enters edit mode when the Edit button is clicked", () => {
    render(
      <TaskItem
        task={defaultTask}
        updateTaskContent={mockUpdateTaskContent}
        updateTaskStatus={mockUpdateTaskStatus}
      />
    );

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(defaultTask.text);
  });

  it("saves edits when Save is clicked", () => {
    render(
      <TaskItem
        task={defaultTask}
        updateTaskContent={mockUpdateTaskContent}
        updateTaskStatus={mockUpdateTaskStatus}
      />
    );

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Updated Task" } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    expect(mockUpdateTaskContent).toHaveBeenCalledTimes(1);
    expect(mockUpdateTaskContent).toHaveBeenCalledWith(defaultTask.id, "Updated Task");

    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(screen.getByText("Sample Task")).toBeInTheDocument();
  });

  it("cancels editing when Cancel is clicked", () => {
    render(
      <TaskItem
        task={defaultTask}
        updateTaskContent={mockUpdateTaskContent}
        updateTaskStatus={mockUpdateTaskStatus}
      />
    );

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Updated Task" } });

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(screen.getByText("Sample Task")).toBeInTheDocument();
    expect(mockUpdateTaskContent).not.toHaveBeenCalled();
  });

  it("strikes through the text when the task is completed", () => {
    const completedTask = { ...defaultTask, completed: true };

    render(
      <TaskItem
        task={completedTask}
        updateTaskContent={mockUpdateTaskContent}
        updateTaskStatus={mockUpdateTaskStatus}
      />
    );

    const textElement = screen.getByText(completedTask.text);
    expect(textElement).toHaveStyle("text-decoration: line-through");
  });

  it("does not save edits if the input is empty", () => {
    render(
      <TaskItem
        task={defaultTask}
        updateTaskContent={mockUpdateTaskContent}
        updateTaskStatus={mockUpdateTaskStatus}
      />
    );

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "" } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(mockUpdateTaskContent).not.toHaveBeenCalled();
  });
});
