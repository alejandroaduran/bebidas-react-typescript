import { useMemo } from "react"
import { useLocation, NavLink } from "react-router-dom"

export default function Header() {

    const { pathname } = useLocation()
    /* console.log(location.pathname) */

    const isHome = useMemo(() => pathname === "/", [pathname])

    /* console.log(isHome) */

    return (
        <header className="bg-slate-800">
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logotipo" />
                    </div>
                    <nav className="flex gap-5 text-slate-200 font-bold text-lg">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-orange-600" : "text-slate-200"}
                        >
                            Inicio</NavLink>
                        <NavLink
                            to="/favoritos"
                            className={({ isActive }) =>
                                isActive ? "text-orange-600" : "text-slate-200"}
                        >
                            Favoritos</NavLink>
                    </nav>
                </div>
                {isHome && (
                    <form action=""
                        className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-5 rounded-lg shadow-lg shadow-black/50 space-y-6">
                        <div className="space-y-4">
                            <label htmlFor="ingredient"
                                className="block text-slate-200 font-bold text-lg mt-10 mb-5"
                            >Nombre o ingredientes</label>
                            <input
                                id="ingredient"
                                type="text"
                                name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                placeholder="Nombre o Ingredientes" />
                        </div>

                        <div className="space-y-4">
                            <label htmlFor="category"
                                className="block text-slate-200 font-bold text-lg mt-10 mb-5"
                            >Categoría</label>
                            <select
                                id="ingredient"
                                name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                >
                                <option value="">-- Selecciona una categoría --</option>
                            </select>
                        </div>
                        <input type="submit"
                        value="Buscar recetas"
                        className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase" />
                    </form>
                )}
            </div>
        </header>
    )
}
