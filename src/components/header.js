import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export default function Header({ siteTitle }) {
  return (
    <Head>
      <h1>{siteTitle}</h1>
    </Head>
  )
}

const Head = styled.header(() => {
  return css`
    background: lightgrey;
    color: grey;
    font-family: calibri;
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
  `
})