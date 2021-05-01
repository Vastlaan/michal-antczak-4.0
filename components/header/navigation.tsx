import styled from 'styled-components'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {BsChevronRight} from 'react-icons/bs'
import {fonts} from '../../styles'

export default function NavigationComponent() {

  const router = useRouter()

  const pathArray = router.asPath.split('/')

  return (
    <Navigatie>
        {pathArray.map((path,i)=>{
            if(i===0){
                return(
                    <Link href='/' key={i}>
                        <Path>Home</Path>
                    </Link>
                )
            }else if(i===1){
                return(
                    <Link href={`/${path}`} key={i}>
                        <Path><BsChevronRight/>{path}</Path>
                    </Link>
                )
            }else{
                return(
                    <Link href={`/${pathArray[1]}/${pathArray[2]}`} key={i}>
                        <Path><BsChevronRight/>{path}</Path>
                    </Link>
                )
            }
        })}
    </Navigatie>
  )
}
const Navigatie = styled.div`
    align-self: flex-start;
    display: flex;
`
const Path = styled.p`
    font-family: ${fonts.heading};
    font-size: 1.9rem;
    color: ${p=>p.theme.grey1};
    font-weight: 600;
    transition: all .3s;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    margin: .9rem 0;
    cursor: pointer;
    &:hover{
      color: ${p=>p.theme.secondary};
    }
    svg{
      font-size: 1.6rem;
      color: ${p=>p.theme.grey1};
      margin-right: .4rem;
    }
`