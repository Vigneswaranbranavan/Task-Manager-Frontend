import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.service';

@Pipe({
  name: 'taskfilter',
  standalone: true
})
export class TaskfilterPipe implements PipeTransform {

  transform(tasks: Task[], searchText: string): Task[] {
    if (!tasks || !searchText) {
      return tasks;
    }
    const lowerSearchText = searchText.toLowerCase();
    return tasks.filter(task =>
      task.title.toLowerCase().includes(lowerSearchText) ||
      task.description.toLowerCase().includes(lowerSearchText)
    );
  }
}
