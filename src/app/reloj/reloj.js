'use client'; // Asegura que solo se ejecute en el cliente (Next.js 13+ con app directory)

import React, { useState, useEffect } from 'react';

function Reloj() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const i1 = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(i1);
    }, []);

    return (
        <div>
            <h2>Hora actual:</h2>
            <p>{hora.toLocaleTimeString()}</p>
        </div>
    );
}

export default Reloj;