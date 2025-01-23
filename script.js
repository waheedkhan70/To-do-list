// Selectors
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Event Listener for Adding Tasks
addTaskButton.addEventListener('click', addTask);

// Function to Add a Task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // Create Task Item
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const taskTextSpan = document.createElement('span');
  taskTextSpan.classList.add('task-text');
  taskTextSpan.textContent = taskText;
  taskItem.appendChild(taskTextSpan);

  // Create Buttons
  const taskButtons = document.createElement('div');
  taskButtons.classList.add('task-buttons');

  // Complete Button
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.classList.add('complete-button');
  completeButton.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });
  taskButtons.appendChild(completeButton);

  // Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
  taskButtons.appendChild(deleteButton);

  taskItem.appendChild(taskButtons);
  taskList.appendChild(taskItem);

  // Clear Input Field
  taskInput.value = '';
}















