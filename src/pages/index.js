import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Seo from  '../components/seo'
import RecipesContainer from '../components/recipes/recipes-container'

export default function Index() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const recipesResponse = await fetch('http://localhost:3001/recipes')
    const recipesJson = await recipesResponse.json()

    const specialsResponse = await fetch('http://localhost:3001/specials')
    const specialsJson = await specialsResponse.json()

    setData({
      recipes: recipesJson,
      specials: specialsJson
    })
  }

  return (
    <Layout>
      <Seo title='Recipes'/>
      <RecipesContainer data={data}/>
    </Layout>
  )
}
