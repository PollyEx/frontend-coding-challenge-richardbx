import { v4 as uuidv4 } from 'uuid'

export class Task {
  public id: string

  constructor(
    public description = '',
    public dueDate = new Date(),
    public status: string[] = []
  ) {
    this.id = uuidv4()
  }
}
