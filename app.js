document.addEventListener('DOMContentLoaded', () => {
  const add = document.getElementById("add");
  const inputField = document.getElementById("input");
  const ul = document.getElementById("unorder-list");

  add.addEventListener('click', addTask);
  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });

  async function addTask() {
    if (!inputField.value.trim()) return;
    
    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-3 bg-gray-50 rounded-lg";
    
    const taskText = document.createElement("span");
    taskText.className = "flex-1";
    taskText.textContent = inputField.value;
    
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "flex gap-2";
    
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "px-3 py-1 bg-cyan-700 text-white text-sm rounded hover:bg-cyan-800 transition";
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "px-3 py-1 bg-cyan-700 text-white text-sm rounded hover:bg-cyan-800 transition";
    
    editBtn.addEventListener('click', async () => {
      const { value: editedText } = await Swal.fire({
        title: 'Edit Task',
        input: 'text',
        inputValue: taskText.textContent,
        inputPlaceholder: 'Edit your task...',
        showCancelButton: true,
        confirmButtonText: 'Save',
        cancelButtonText: 'Cancel',
        inputValidator: (value) => {
          if (!value.trim()) {
            return 'Task cannot be empty!';
          }
        }
      });
      
      if (editedText) {
        taskText.textContent = editedText;
      }
    });
    
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });
    
    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(deleteBtn);
    li.appendChild(taskText);
    li.appendChild(buttonsContainer);
    ul.appendChild(li);
    
    inputField.value = '';
    inputField.focus();
  }
});


 