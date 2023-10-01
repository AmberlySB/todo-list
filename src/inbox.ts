class Todo {
  name: string;
  description: string;
  dueDate?: string;
  priority?: number;

  constructor(
    name: string,
    description: string,
    dueDate?: string,
    priority?: number,
  ) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
