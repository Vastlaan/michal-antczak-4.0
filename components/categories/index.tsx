import Link from 'next/link'
import styled from 'styled-components'
import { respond, SectionNarrow, ButtonPrimary, ButtonSecondary} from '../../styles'
import {CategoryProps} from '../../types'

interface CategoriesProp{
  categories: CategoryProps[]
}
export default function CategoriesComponent({categories}:CategoriesProp) {

  return (
    <SectionNarrow>
      <Categories>
        <ButtonSecondary>All</ButtonSecondary>
        {categories.map((cat,i)=>{
          return(
            <Link href={cat.link} key={i}>
              <ButtonPrimary >{cat.displayName}</ButtonPrimary>
            </Link>
          )
        })}
      </Categories>
    </SectionNarrow>
    
  )
}

const Categories = styled.div`
  margin: 2.7rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ${()=>respond('m','justify-content: center;')}
`