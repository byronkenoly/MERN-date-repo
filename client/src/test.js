/* import React from 'react';

const items = [
    "2kg omena",
    "5 tomatoes",
    "2 tablesoons sugar",
    "2 lemons",
    "1 teaspoon salt",
    "hot module reloading of garlic"
];

export const variable = React.createElement(
    "ul",
    { className: "ingredients" },
    items.map((ingredient, i) => React.createElement("li", { key: i }, ingredient))
); */

//One of the array functions that is essential to functional
//programming is Array.map. This method takes a function as 
//its argument. This function will be invoked once for every
//item in the array.

//export const list = React.createElement(
//    "ul",
//    null,
//    React.createElement("li", null, "2kg omena"),
//    React.createElement("li", null, "5 tomatoes"),
//    React.createElement("li", null, "2 tablespoons sugar"),
//    React.createElement("li", null, "2 lemons"),
//    React.createElement("li", null, "1 teaspoon salt"),
//    React.createElement("li", null, "4 cloves of garlic")
//);

/* const data = [
    {
        name: "Omena",
        ingredients: [
            { name: "ugali", amount: 1, measurement: "2 cups"},
            { name: "sembe", amount: 1, measurement: "1 cup"},
            { name: "nyama", amount: 2, measurement: "1 kg"},
            { name: "choma", amount: 1, measurement: "3.5 kg"},
            { name: "dry fry", amount: 0.5, measurement: "1 plate"},
            { name: "stew", amount: 3, measurement: "2 bowls"}
        ],
        steps: [
            "heat to boil two cups of water",
            "songa ugali",
            "boil 1 kilo of nyama",
            "add onions annd whatnot",
            "boil for 45 minutes",
            "add dania and serve"
        ]
    },
    {
        name: "Tumbukiza",
        ingredients: [
            { name: "tomat-hoes", amount: 1, measurement: "8 tomatoes"},
            { name: "onions", amount: 1, measurement: "4 bunches"},
            { name: "dania", amount: 1, measurement: "30 shillings"},
            { name: "garlic", amount: 0.5, measurement: "1 clove"},
            { name: "rice", amount: 3, measurement: "2 cups"}
        ],
        steps: [
            "chop tomat-hoes and onions",
            "chop dania",
            "tumbukiza ingredients in nyama"
        ]
    }
]

export function Menu(props){
    return (
        <article>
            <header>
                <h1>{props.title}</h1>
            </header>
            <div className="recipes">
                {props.recipes.map((recipe, i) => (
                    <Recipe
                        key={i}
                        name={recipe.name}
                        ingredients={recipe.ingredients}
                        steps={recipe.steps}
                    />
                ))}
            </div>
        </article>
    ); 
}*/

/* export function Recipe(props){
    return(
        <section id={props.name.toLowerCase().replace(/ /g, "-")}>
            <h1>{props.name}</h1>
            <ul className="ingredients">
                {props.ingredients.map((ingredient, i) => (
                    <li key={i}> {ingredient.name} </li>
                ))}
            </ul>
            <section>
                <h2>Cooking instructions</h2>
                {props.steps.map((step, i) => (
                    <p key={i}> {step} </p>
                ))}
            </section>
        </section>
    );
} */

const jnr = 400 || 300;

console.log(jnr);