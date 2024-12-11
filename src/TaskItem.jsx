import React from 'react';
import { FaTrash, FaStar } from 'react-icons/fa'; // Importamos los iconos

function TaskItem({ task, onDelete, isFavorite, onToggleFavorite }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span>{task}</span>

      {/* Icono de estrella para marcar la tarea como favorita */}
      <FaStar
        onClick={() => onToggleFavorite(task)} // Llama a la función onToggleFavorite
        style={{
          cursor: 'pointer',
          color: isFavorite ? 'gold' : 'gray', // Rellena de oro si es favorita
          fontSize: '18px',
        }}
        title={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
      />

      {/* Icono de basura para eliminar la tarea */}
      <FaTrash
        onClick={() => onDelete(task)} // Llama a la función onDelete
        style={{
          cursor: 'pointer',
          color: '#ff6b6b',
          fontSize: '18px',
        }}
        title="Eliminar tarea" // Texto alternativo al pasar el cursor
      />
    </li>
  );
}

export default TaskItem;


