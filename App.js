import React from "react"
import './style.css'
import NavContainer from './components/NavContainer.js'
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import expData from './data.js'

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
    const cards = expData.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // country={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}
            />
        )
    })
    return (
        <div>
            <NavContainer />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}