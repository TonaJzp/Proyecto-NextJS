"use client";

export default function ThemeSelect() {
    return (
        <select className="select select-bordered" data-choose-theme>
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
            <option value="cupcake">Cupcake</option>
            <option value="bumblebee">Bumblebee</option>
            <option value="winter">Winter</option>
            <option value="autumn">Autumn</option>
            <option value="retro">Retro</option>
            <option value="lemonade">Lemonade</option>
            <option value="dim">Dim</option>
            <option value="coffee">Coffee</option>
        </select>
    );
}
