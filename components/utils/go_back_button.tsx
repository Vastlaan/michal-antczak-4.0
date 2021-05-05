import styled from 'styled-components'
import {useRouter} from 'next/router'
import {MdArrowBack} from 'react-icons/md'

export default function GoBack() {

  const router = useRouter()
  return (
      <Back onClick={()=>router.back()}>
        <MdArrowBack/>
        Go Back
      </Back>
  )
}
const Back = styled.div`
  margin: 0 auto 1.4rem 0;
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  color: ${p=>p.theme.primary};
  cursor: pointer;
  transition: all .1s;

  svg{
    font-size: 2.7rem;
    border: 2px solid ${p=>p.theme.primary};
    border-radius: 50%;
    margin-right: 1.4rem;
    transition: all .1s;
  }

  &:hover{
    color: ${p=>p.theme.grey3};
     svg{

      border: 2px solid ${p=>p.theme.grey3};

    }
  }
`