export class TaskChange {
  constructor(
    public description = '',
    public dueDate = new Date()
  ) {}
}
