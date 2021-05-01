import Link from 'next/link'
import { FlexCol, Anchor, TextBold} from '../../styles'

export default function ShoppingComponent() {
  return (
    <FlexCol align='flex-start' justify='flex-start'>
      <TextBold color='white'>Shopping:</TextBold>
      <br/>
      <Link href='/contact'>          
        <Anchor>Men's collection</Anchor>
      </Link>
      <Link href='/contact'>          
        <Anchor>Women's collection</Anchor>
      </Link>
      <Link href='/contact'>          
        <Anchor>Kids collection</Anchor>
      </Link>
      <Link href='/contact'>          
        <Anchor>New collection</Anchor>
      </Link>
      <Link href='/contact'>          
        <Anchor>Bestsellers</Anchor>
      </Link>
      <br/>
    </FlexCol>
  )
}
