import React, { useState, useRef } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export default function Recipe({recipe, specials}) {
    const [active, setActive] = useState(false)
    const [height, setHeight] = useState(0)

    const lists = useRef(null)

    const toggleDropdown = () => {
        setActive(!active)
        setHeight(active ? 0 : lists?.current?.scrollHeight)
    }

    return(
        <ListItem>
            <Short onClick={toggleDropdown}>
                <img src={`http://localhost:3001${recipe?.images?.medium}`}/>
                <aside>
                    <h2 className='title'>{recipe?.title}</h2>
                    <p className='description'>{recipe?.description}</p>
                    <span className='info'>
                        <p>Cook Time: {recipe?.cookTime} Minutes</p>
                        <p>Prep Time: {recipe?.prepTime} Minutes</p>
                        <p>Servings: {recipe?.servings}</p>
                    </span>
                </aside>
                <div>
                    <p>Posted: {recipe?.postDate}</p>
                    <p>Edited: {recipe?.editDate}</p>
                </div>
            </Short>
            <Dropdown ref={lists} key={`dropdown-${recipe?.uuid}`} height={height}>
                <div className='lists'>
                    <div className='ingredients'>
                        <h3>Ingredients:</h3>
                        {recipe?.ingredients.map((ingredient) => {
                            return (
                                <>
                                    {!!ingredient?.measurement ?
                                    <p>{ingredient?.amount} {ingredient?.measurement} {ingredient?.name}</p>
                                    :
                                    <p>{ingredient?.amount} {ingredient?.name}</p>}
                                    {specials?.map((special) => {
                                        return (
                                            special?.ingredientId === ingredient?.uuid &&
                                            <div className='special'>
                                                <div className='special_title'>
                                                    <p>{special?.title}</p>
                                                    <p>({special?.type})</p>
                                                </div>
                                                <p>{special?.text}</p>
                                            </div>
                                        )
                                    })}
                                </>
                            )
                        })}
                    </div>
                    <div className='directions'>
                        <h3>Directions:</h3>
                        {recipe?.directions.map((direction) => {
                            return <p>{direction?.instructions}</p>
                        })}
                    </div>
                </div>
            </Dropdown>
        </ListItem>
    )
}

const ListItem = styled.li(() => {
    return css`
        background: lightgrey;
        cursor: pointer;
        margin-bottom: 20px;
        width: 75%;
    `
})

const Short = styled.div(() => {
    return css`
        display: flex;
        position: relative;
        img {
            max-width: 100%;
        }
        aside {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .title, .description {
                text-align: center;
            }
            .info {
                display: flex;
                justify-content: center;
                gap: 1rem;
            }
        }
        div {
            position: absolute;
            right: 0;
            text-align: right;
            padding: 10px 10px;
            font-size: 0.75rem;
            p {
                margin: 0;
            }
        }
    `
})

const Dropdown = styled.div(({height}) => {
    return css`
        background: lightgrey;
        overflow: hidden;
        transition: max-height 0.6s ease;
        max-height: ${height}px;
        h3, p {
            padding-bottom: 5px;
            margin: 0;
        }
        .special_title {
            display: flex;
        }
        .lists {
            padding-bottom: 10px;
            display: flex;
            justify-content: space-around;
            .ingredients {
                padding-left: 10px;
            }
            .directions {
                padding-right: 10px;
            }
        }
    `
})