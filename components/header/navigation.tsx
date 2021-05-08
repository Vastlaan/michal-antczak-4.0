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
                        <Path><BsChevronRight/>{path.substring(0, 16)}</Path>
                    </Link>
                )
            }else if(i===2){
                return(
                    <Link href={`/${pathArray[1]}/${pathArray[2]}`} key={i}>
                        <Path><BsChevronRight/>{path.split('_').join(" ")}</Path>
                    </Link>
                )
            }else{
                return(
                    <Path key={i}><BsChevronRight/>{path.split('%20').join(" ")}</Path>
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
    color: ${p=>p.theme.secondary};
    font-weight: 600;
    transition: all .3s;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    margin: .9rem 0;
    cursor: pointer;
    &:hover{
      color: ${p=>p.theme.primary};
    }
    svg{
      font-size: 1.6rem;
      color: ${p=>p.theme.secondary};
      margin-right: .4rem;
    }
`