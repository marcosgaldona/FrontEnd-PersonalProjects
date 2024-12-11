import React from 'react';

function InputForm({ newTask, handleInputChange, addTask }) {  // Componente InputForm
  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Escribe una tarea"
      />
      <button onClick={addTask}>Agregar Tarea</button> {/* Llama a la función addTask al hacer clic */}
    </div>
  );
}

export default InputForm;
