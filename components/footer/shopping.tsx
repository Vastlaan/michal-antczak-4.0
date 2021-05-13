import Link from 'next/link'
import { FlexCol, Anchor, TextBold} from '../../styles'

export default function ShoppingComponent() {
  return (
    <FlexCol align='flex-start' justify='flex-start'>
      <TextBold color='white'>Shopping:</TextBold>
      <br/>
      <Link href='/men'>          
        <Anchor>Men's collection</Anchor>
      </Link>
      <Link href='/women'>          
        <Anchor>Women's collection</Anchor>
      </Link>
      <Link href='/kids'>          
        <Anchor>Kids collection</Anchor>
      </Link>
      <Link href='/new'>          
        <Anchor>New collection</Anchor>
      </Link>
      <Link href='/bestsellers'>          
        <Anchor>Bestsellers</Anchor>
      </Link>
      <br/>
    </FlexCol>
  )
}
