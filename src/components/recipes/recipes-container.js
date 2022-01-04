import React, { useContext } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Recipe from './recipe'

export default function RecipesContainer({data}) {
    const { recipes, specials } = data
    
    return (
        <ListContainer>
            <ul>
                {recipes && recipes.map((recipe) => {
                    return <Recipe key={`recipe-${recipe?.uuid}`} recipe={recipe} specials={specials}/>
                })}
            </ul>
        </ListContainer>
    )
}

const ListContainer = styled.div(() => {
    return css`
        font-family: calibri;
        display: flex;
        justify-content: center;
        ul {
            list-style: none;
        }
    `
})