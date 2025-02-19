# FoodApp - Projet d'Application de Recettes React Native (La Capsule Bootcamp)

Ce projet est une application de recettes développée en React Native, réalisée dans le cadre d'un projet scolaire d'une journée. L'objectif était de reproduire une application existante à partir de maquettes, en se concentrant sur la navigation, le style, et la gestion des données avec Redux.


## Table des Matières

1.  [Introduction](#introduction)
2.  [Fonctionnalités](#fonctionnalites)
3.  [Structure du Projet](#structure-du-projet)
4.  [Contraintes](#contraintes)
5.  [Améliorations Possibles](#ameliorations-possibles)

## Introduction

L'application FoodApp permet aux utilisateurs de parcourir une liste de recettes, de consulter les détails de chaque recette, et d'ajouter des recettes à une liste de favoris. Ce projet a été conçu pour approfondir la compréhension de React Native, notamment en matière de navigation, de stylisation et de gestion d'état avec Redux.

## Fonctionnalités

*   **Affichage de la liste des recettes:** Permet de visualiser une liste de recettes disponibles.
*   **Détails d'une recette:** Affiche les informations détaillées pour une recette spécifique.
*   **Gestion des favoris:** Permet d'ajouter et de supprimer des recettes de la liste des favoris.
*   **Persistance des favoris:** Les recettes favorites sont stockées dans le store Redux, permettant leur persistance.


## Structure du Projet

Le projet est structuré comme suit :

*   `App.js`: Point d'entrée de l'application.
*   `components/`: Composants réutilisables de l'interface utilisateur.
*   `screens/`:
    *   `HomeScreen.js`: Écran d'accueil.
    *   `SearchScreen.js`: Écran de recherche de recettes.
    *   `RecipeScreen.js`: Écran de détails d'une recette.
    *   `MyRecipeScreen.js`: Écran des recettes favorites.
*   `data/`:
    *   `recipes.js`: Contient un tableau d'objets représentant les recettes. **Ne doit pas être modifié.**
*   `reducers/`:
    *   `favorites.js`: Reducer Redux pour gérer les recettes favorites.
*   `store/`:
    *   `index.js`: Configuration du store Redux.

## Contraintes

Ce projet a été réalisé en respectant les contraintes suivantes :

*   Utilisation des screens fournis (HomeScreen, SearchScreen, RecipeScreen, MyRecipeScreen).
*   Récupération de la liste des recettes depuis `data/recipes.js` sans modification.
*   Enregistrement des recettes favorites et des quantités associées dans le store Redux via le reducer `reducers/favorites.js`.

## Améliorations Possibles

Ce projet peut être amélioré en ajoutant les fonctionnalités suivantes :

*   **Recherche avancée :** Implémenter une fonctionnalité de recherche avancée avec des filtres.
*   **Ajout de recettes :** Permettre aux utilisateurs d'ajouter leurs propres recettes.
*   **API externe :** Récupérer une liste de recettes à partir d'une API externe


