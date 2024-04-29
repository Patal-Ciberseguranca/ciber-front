import { useState } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { IoIosMenu } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';

export const Route = createLazyFileRoute('/messages')({
  component: Messages,
});

function Messages() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex bg-background text-white">
      {/* Barra Esquerda Lateral */}
      <div
        className={
          'bg-gray-700 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative'
        }
      >
        <IoIosMenu
          className={
            'bg-white text-black text-4xl rounded-full -right-3 top-9 cursor-pointer'
          }
          onClick={() => setOpen(!open)}
        />

        <div>
          <FaUser className="text-4xl rounded cursor-pointer block float-left mr-2" />
          <h1
            className={
              'text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}'
            }
          >
            Tailwind
          </h1>
        </div>
      </div>

      {/* Contéudo */}
      <div className="p-7">Contéudo</div>
    </div>
  );
}
