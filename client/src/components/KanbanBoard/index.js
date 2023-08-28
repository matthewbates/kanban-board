import { useState, useEffect } from "react";

export default function KanbanBoard() {
  const initialData = { tasks: {}, columns: {}, columnOrder: [] };
  const [board, setBoard] = useState(initialData);

  useEffect(() => {
    
  }, []);

  return <div>index</div>;
}
