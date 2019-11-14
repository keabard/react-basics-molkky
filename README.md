# Apprendre les bases de React grâce au Molkky

Vous pouvez retrouver la présentation sous format PDF dans le dépot, juste au dessus (React _ Back to Basics.pdf)

## 1. Initialiser le projet

React propose un outil très complet et très facile à prendre en main pour démarrer un projet from scratch : [create-react-app](https://create-react-app.dev). Nous allons l'executer pour commencer notre exercice :

    npx create-react-app molkky

L'outil a créé un dossier `molkky`, et a créé dans ce dossier une arborescence comme suit :

    molkky/
      src/
        App.css
        App.js
        App.test.js
        index.css
        index.js
        logo.svg
        serviceWorker.js
      .gitignore
      package.json
      README.md
      node_modules/
        ...
      public/
        ...

Le principal fichier que nous modifierons sera `App.js`. Bien sûr, nous créérons d'autres fichiers afin de compléter l'exercice.

Pour vérifier que tout fonctionne, démarrez le projet :

    npm start

Le projet se lance, et une fois prêt, il ouvre automatiquement votre navigateur et démarre l'application web.

Vous êtes censés avoir devant vous un logo de React qui tourne sur un fond noir :

![first_react_screen](https://tducasse.com/static/9da8a6f86aeadade52f5d72d90d80364/1e4b3/react-app.png)

Si ce n'est pas le cas, faîtes le moi savoir ✋

## 2. But de l'exercice

Comme le nom du projet l'indique, nous allons construire une mini application web React autour du jeu de Molkky.

Les fonctionnalités de cette application web seront les suivantes :

- Afficher les quilles d'une partie de Molkky dans leur position de début de partie
- Chaque quille doit avoir un état `fallen` défini à `true` ou `false` indépendant des autres quilles. Cet état doit être à `false` par défaut. Il conviendra de différencier un état de l'autre par une couleur de fond différente sur la quille
- Pouvoir changer l'état d'une quille lorsque l'on clique dessus
- Afficher une partie Score qui affichera le nombre de points que valent les quilles qui sont actuellement dans l'état `fallen === true`

Pour la disposition initiale du jeu de Molkky, ainsi que pour le calcul des points, la page Wikipedia qui lui est consacrée répondra à toutes vos questions.

## 3. Nettoyage du projet

Nous allons supprimer tout le code qui pourrait entraver le bon déroulement de cet exercice.

- Rendez-vous dans `App.js` et faîtes en sorte qu'il ressemble à ceci :

```javascript
import React from "react";

import "./App.css";

const App = () => {
  return <div className="App"></div>;
};

export default App;
```

- Renommez `App.js` en `App.jsx`
- Rendez-vous dans `App.css` et faîtes en sorte qu'il ressemble à ceci :

```css
.App {
  background-color: rgba(57, 65, 123, 0.18);
  padding: 50px;
}
```
- Rendez-vous dans `index.js` et remplacez :

```js
import App from './App'
```
par
```js
import App from './App.jsx'
```


- Créez un dossier `components` dans `src/`. C'est ici que nous créérons les différents composants de l'application.

Sauvegardez vos fichiers, l'application devrait se rafraichir automatiquement et vous afficher un écran blanc avec une bande bleue/grise. Si ce n'est pas le cas, faîtes le moi savoir ✋. Sinon, vous êtes prêts pour commencer l'exercice !

## 4. Création du composant Pin

À partir de maintenant, nous nommerons `Pin` une quille du jeu de Molkky.

- Créez un dossier `Pin` dans `components`
- Créez un fichier `Pin.jsx` et un fichier `Pin.css` dans le dossier `Pin`

> ### Première tâche
>
> Créez un composant `Pin` dans `Pin.jsx` qui prendra une variable `number` en props qui représente le numéro de la `Pin` et qui l'affichera. Modifiez le style dans `Pin.css` pour que le numéro soit affiché dans un cercle.

Pour tester l'affichage votre composant, importez-le dans `App.jsx` et utilisez-le !

Le CSS n'est pas le but de cet exercice, et ne doit pas être un frein. Si vous avez des difficultés avec le style du composant, voici un style d'exemple simple :

```css
.Pin {
  display: flex;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 1px solid black;
  align-items: center;
  cursor: pointer;
  user-select: none;
  justify-content: center;
}
```

## 5. Positionnement des Pins

Maintenant que le composant `Pin` est créé, nous allons l'utiliser pour afficher les quilles dans leur position du début de partie. Pour vous aider à les disposer, nous allons créer quatres `<div>` dans le composant `App` qui représenteront les quatres lignes du jeu de Molkky dans sa position initiale.

La fonction de rendu du composant `App` doit renvoyer ceci :

```JSX
<div className="App">
  <div className="App__row">
  </div>
  <div className="App__row">
  </div>
  <div className="App__row">
  </div>
  <div className="App__row">
  </div>
</div>
```

> ### Deuxième tâche
>
> Dans le composant `App`, utilisez le composant `Pin` autant de fois que ce nécessaire, dans la bonne ligne, avec les bonnes props afin d'afficher le jeu de Molkky dans sa position initiale. Modifiez le fichier `App.css` pour que les quilles soient bien positionnées.

De même que précédemment, le CSS ne doit pas être un obstacle. Si vous ne parvenez pas à avoir un affichage satisfaisant, voici ce qu'il faut rajouter dans `App.css` :

```css
.App__row {
  display: flex;
  justify-content: center;
}
```

## 6. Gestion de l'état d'une Pin

Les `Pins` positionnées, nous allons devoir leur donner un état et le représenter.

> ### Troisième tâche
>
> - Modifiez le composant `Pin` pour qu'il gère son état `fallen`. Il conviendra d'utiliser le Hook `useState` de React
> - L'état par défaut doit être à `false`
> - L'état doit changer au clic sur la `Pin`
> - La `Pin` doit avoir une couleur de fond différente si elle est en état `fallen === true`

Conseil : pour le changement de fond, créez une classe `.Pin--fallen` dans `Pin.css`. Un element HTML peut avoir plusieurs classes.

## 7. Calcul et affichage du score

Dernière ligne droite, mais tâche la plus difficile de cet exercice, il faut calculer et afficher le score correspondant aux `Pin` tombées. Avec tous les éléments vus précedemment, vous devriez avoir tous les éléments pour implémenter cette fonctionnalité.

Vous pouvez créer un composant `Score` si vous le souhaitez, ou bien implémenter le calcul et l'affichage directement dans le composant `App`. Il est fortement conseillé de gérer l'état des `Pins` dans le composant `App`.

> ### Quatrième tâche
>
> - Créez une fonction qui prendra en entrée un `Array` de `Pins` tombées et qui renverra le score
> - Gérez l'état des `Pins` tombées (Initialisation + mise à jour de l'état lorsqu'on clique sur une `Pin`)
> - Connectez le tout et affichez le score dans le composant `App`

## BONUS : Introduction aux tests de composants

Si vous avez terminé avant le temps imparti, vous pouvez implémenter un test fonctionnel sur le composant `App` qui permettra de couvrir un large spectre de ce que vous venez d'implémenter.

Placez-vous à la racine du dossier du projet et éxecutez :

    npm install --save @testing-library/react @testing-library/jest-dom

`npm` va installer `react-testing-library`, une bibliothèque permettant de tester les composants React en restant au plus près de leur usage par les utilisateurs finaux. Techniquement, la méthode `render` de `react-testing-library` simule, en `node.js`, le rendu d'un composant donné, et vous permet d'accéder aux éléments de son DOM pour vérifier qu'il se comporte correctement, comme dans un navigateur classique.

`enzyme` est une alternative à cette bibliothèque. Une de ces libs, combinée avec `jest`, le test runner installé par défaut avec `create-react-app`, permet de lancer des tests de façon simple et explicite.

Préparons le terrain pour écrire nos tests :

- Renommez `App.test.js` en `App.test.jsx`
- Remplacez le code dans `App.text.jsx` pour qu'il ressemble à ceci :

```JSX
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";

it("displays App without crashing", () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});

it("displays the correct score when clicking one Pin", () => {
  const { getByText } = render(<App />);
});

it("displays the correct score when clicking multiples Pins", () => {
  const { getByText } = render(<App />);
});

```

Pour vérifier que la stack de test fonctionne, lancez la commande suivante à la racine du projet :

    npm test

Le résultat devrait être celui-ci :

![first_test](https://i.ibb.co/vQKDmkZ/first-test.png)

Ne quittez pas ce process, il rafraichira automatiquement les résultats des tests quand vous modifierez le fichier `App.test.jsx`.

Nous allons ensuite implémenter les deux autres tests manquants à l'aide des outils suivants :

- `getByText` qui permet de cibler un élément du DOM grâce à son texte. Cette méthode peut prendre une `String` ou une expression régulière en argument.
- `fireEvent` qui permet de simuler un évènement JavaScript sur un élément. On peut simuler un click sur un élément de cette façon : `fireEvent.click(ELEMENT)`
- `expect` de `jest` qui permet de définir une assertion. Si une seule assertion d'un test est fausse, le test ne passe pas

> ### Tâche BONUS
>
> - Implémentez le test du click sur une seule `Pin`, en simulant un click sur la `Pin` numéro 6, et en vérifiant que le score affiché est bien "6"
> - Implémentez le test du click sur plusieurs `Pins`, en simulant un click sur les `Pins` numéro 5, 12 et 1, et en vérifiant que le score affiché est bien "3".
