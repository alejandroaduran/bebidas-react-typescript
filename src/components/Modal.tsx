import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useAppStore';

export default function Modal() {

    const modal = useAppStore((state) => state.modal)
    const closeModal = useAppStore((state) => state.closeModal)
    const selectedRecipe = useAppStore((state) => state.selectedRecipe)

    const renderIngredients = () => {
        const ingredients = Object.entries(selectedRecipe)
            .filter(([key, value]) => key.includes("strIngredient") && value !== "" && value !== null);
        const measures = Object.entries(selectedRecipe)
            .filter(([key, value]) => key.includes("strMeasure") && value !== "" && value !== null);

        return ingredients.map((ingredient, index) => (
            <li key={index} className='text-lg'>
                {ingredient[1]} - {measures[index]?.[1] || "Cantidad no especificada"}
            </li>
        ));
    };
    const handleClickFavorite = useAppStore((state) => state.handleClickFavorite)
    const favoriteExists = useAppStore((state) => state.favoriteExists)

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                                    <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                                        {selectedRecipe.strDrink}
                                    </Dialog.Title>

                                    <img
                                        className='mx-auto w-96'
                                        src={selectedRecipe.strDrinkThumb} alt={selectedRecipe.strDrink} />

                                    <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Ingredientes y Cantidades
                                    </Dialog.Title>
                                    {renderIngredients()}
                                    <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Instrucciones
                                    </Dialog.Title>
                                    <p className='text-lg'>
                                        {selectedRecipe.strInstructions}
                                    </p>

                                    <div className="mt-5 sm:mt-6 flex justify-between">
                                        <button
                                            type='button'
                                            className='w-full rounded-lg bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-8 mx-2 '
                                        onClick={closeModal}
                                        >
                                            Cerrar
                                        </button>
                                        <button
                                            type='button'
                                            className='w-full rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 mx-2 '
                                       onClick={()=> handleClickFavorite(selectedRecipe)}
                                       >
                                            {favoriteExists(selectedRecipe.idDrink) ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}