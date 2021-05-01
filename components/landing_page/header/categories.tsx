import Link from 'next/link';
import styled from 'styled-components'
import { respond, ButtonEmpty} from '../../../styles'

export default function CategoriesComponent() {
  return (
    <Categories>
        
      <Link href='/men'>
        <ButtonEmpty>
          Shoes for him
        </ButtonEmpty>
      </Link>

      <Link href='/women'>
        <ButtonEmpty>
          Shoes for her
        </ButtonEmpty>
      </Link>

      <Link href='/kids'>
        <ButtonEmpty>
          Shoes for kids
        </ButtonEmpty>      
      </Link>
      
    </Categories>
  )
}
const Categories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.4rem auto;

  ${()=>respond('m','flex-direction: row;')}
`
