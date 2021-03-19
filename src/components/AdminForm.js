import React from 'react'

const AdminForm = ({ id: key, majRecette, recettes }) => {
    const recette = recettes[key]
    return(
        <div className="card">
            <form className="admin-form">

                <input value={recette.nom} type="text" name="nom" placeholder="Nom de la recette" />

                <input value={recette.image} type="text" name="image" placeholder="Adresse de l'image" />

                <textarea value={recette.ingredients} name="ingredients" rows="3" placeholder="Liste des ingrédients" />

                <textarea value={recette.instructions} name="instructions" rows="15" placeholder="Liste des instructions" />

            </form>
            <button>Supprimer</button>
        </div>
    )
}

export default AdminForm