import React, { useState, useEffect } from 'react';
import './App.css';
import TaskItem from '../src/TaskItem'; // Importas el componente TaskItem
import InputForm from '../src/InputForm';  // Importamos el componente InputForm

function ToDoList() { // Componente ToDoList

  // Aquí definimos el estado de la lista de tareas
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks'); // Guarda en el localStorage los items task
    return storedTasks ? JSON.parse(storedTasks) : []; // Si hay tareas, las parsea, si no, usa un array vacío
  });
  
  const [favoriteTasks, setFavoriteTasks] = useState(() => {
    const storedFavorites = localStorage.getItem('favoriteTasks');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  
  const [newTask, setNewTask] = useState(''); // Una cadena vacía para la nueva tarea

  // Función para manejar el cambio en el input
  const handleInputChange = (e) => {
    setNewTask(e.target.value); // Actualiza el estado newTask con el valor del input
  };

  // Función para agregar una tarea
  const addTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks); // Actualiza el estado con la nueva tarea

      // Guarda las tareas en localStorage
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));

      setNewTask('');
    }
  };

  // Función para eliminar una tarea
  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete); // Filtra la tarea a eliminar
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Actualiza el localStorage

    // También eliminamos de favoritos si está presente
    const updatedFavorites = favoriteTasks.filter((task) => task !== taskToDelete);
    setFavoriteTasks(updatedFavorites); 
    localStorage.setItem('favoriteTasks', JSON.stringify(updatedFavorites));
  };

  //función para cambiar a favorito
  const toggleFavorite = (task) => {
    let updatedFavorites; //let crea una variable local, solo usable en esta función
    if (favoriteTasks.includes(task)) {
      updatedFavorites = favoriteTasks.filter((favTask) => favTask !== task); //si esta en la lista la elimina
    } else {
      updatedFavorites = [...favoriteTasks, task]; //si no la añade al final
    }
    
    setFavoriteTasks(updatedFavorites);
    localStorage.setItem('favoriteTasks', JSON.stringify(updatedFavorites));

    // Reordena las tareas: favoritas primero
    const reorderedTasks = tasks.filter((t) => !updatedFavorites.includes(t));
    setTasks([...updatedFavorites, ...reorderedTasks]);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
  
      {/* Usamos el componente InputForm */}
      <InputForm 
        newTask={newTask} 
        handleInputChange={handleInputChange} 
        addTask={addTask} 
      />
  
      {/* Lista de tareas */}
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onDelete={() => deleteTask(task)} // Pasa la función de eliminación al componente TaskItem
            onToggleFavorite={toggleFavorite} // Pasa la función para alternar favoritos
            isFavorite={favoriteTasks.includes(task)} // Indica si la tarea es favorita (booleano)
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

