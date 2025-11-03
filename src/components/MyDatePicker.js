'use client'
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { es } from "react-day-picker/locale";

export default function MyDatePicker() {
    const [selected, setSelected] = useState();

    return (
        <DayPicker
            locale={es}
            mode="single"   // multiple, range
            selected={selected}
            onSelect={setSelected}
        />
    );
}