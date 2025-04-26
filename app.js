// document.addEventListener('DOMContentLoaded', () => {
//   const add = document.getElementById("add");
//   const inputField = document.getElementById("input");
//   const ul = document.getElementById("unorder-list");

//   add.addEventListener('click', list);

//   function list(e) {
//       if (!inputField.value.trim()) return;
//       const li = document.createElement("li");
//       const btn = document.createElement("button");
//       btn.textContent = "delete";
//       li.textContent = inputField.value;
//       li.appendChild(btn);
//       ul.appendChild(li);

//       inputField.value = '';

//       btn.addEventListener('click', () => {
//           li.remove();
//       });
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const add = document.getElementById("add");
  const inputField = document.getElementById("input");
  const ul = document.getElementById("unorder-list");

  add.addEventListener('click', list);
  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') list();
  });

  function list() {
    if (!inputField.value.trim()) return;
    
    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-3 bg-gray-50 rounded-lg";
    
    const taskText = document.createElement("span");
    taskText.textContent = inputField.value;
    
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.className = "px-3 py-1 bg-cyan-700 text-white text-sm rounded hover:bg-cyan-800 transition";
    
    btn.addEventListener('click', () => li.remove());
    
    li.appendChild(taskText);
    li.appendChild(btn);
    ul.appendChild(li);
    
    inputField.value = '';
    inputField.focus();
  }
});





