import Link from 'next/link'
import { FlexCol, Anchor, TextBold} from '../../styles'

export default function InfromationComponent() {
  return (
    <FlexCol align='flex-start' justify='flex-start'>
      <TextBold color='white'>Information:</TextBold>
      <br/>
      <Link href='/contact'>          
        <Anchor>How to order</Anchor>
      </Link>
      <Link href='/contact'>          
        <Anchor>Payment methods</Anchor>
      </Link>
      <Link href='/contact'>          
        <Anchor>Delivery Information</Anchor>
      </Link>
      <Link href='/contact'>          
        <Anchor>Complaints</Anchor>
      </Link>
      <Link href='/contact'>          
        <Anchor>Returns</Anchor>
      </Link>
      <Link href='/contact'>          
        <Anchor>Terms and Conditions</Anchor>
      </Link>
      <Link href='/contact'>          
        <Anchor>Privacy policy</Anchor>
      </Link>
      <br/>
    </FlexCol>
  )
}
