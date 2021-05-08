import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {MdSearch} from 'react-icons/md'
import ProductSmall from '../../product_small'
import { respond} from '../../../styles'
import {ProductProps} from '../../../types'

export default function SearchBoxComponent() {

  const [products, setProducts] = useState<{products: ProductProps[]}>()
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([])
  const [searchString, setSearchString] = useState("")

  useEffect(()=>{
    let isCancelled = false;
    fetch('/api/get_products').then(json=> !isCancelled && json.json()).then(data=>!isCancelled && setProducts(data)).catch(e=>!isCancelled && console.error(e))
    return ()=>{isCancelled=true}
  },[])

  useEffect(()=>{
    if(products){
      const filtered = []
      const temp = products.products.filter(prod=>prod.displayName.toLowerCase().includes(searchString.toLowerCase()))
      temp.forEach(item=>{
        if(!filtered.some(filteredItem=>filteredItem.displayName === item.displayName)){
          filtered.push(item)
        }
      })
      setFilteredProducts(filtered)
    }
  },[searchString])

  

  return (
    <>
      <SearchBox>
        <MdSearch/>
        <input type="text" value={searchString} onChange={(e)=>setSearchString(e.target.value)}/>
      </SearchBox>
      {filteredProducts.length > 0 && searchString.length > 0 ? <ResultsContainer><SearchResults>
        
        {filteredProducts.map((prod,i)=><ProductSmall key={i} item={prod} />)}  
      </SearchResults></ResultsContainer>: null}
    </>
  )
}
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${p=>p.theme.grey1};
  padding: 0 0 0 .9rem;
  transition: all .3s;
  width: 25rem;
  
  ${()=>respond('s','width: 30rem;')}
  ${()=>respond('m','width: 25rem;')}

  &:hover{
    svg{
      color: ${p=>p.theme.grey4};
    }
    
  }

  svg{
    font-size: 1.9rem;
    color: ${p=>p.theme.grey4};
    margin-right: .9rem;
    transition: all .3s;
    cursor: pointer;
  }

  input{
    height: 100%;
    flex:1;
    padding: .4rem 1.4rem;

    &:active, :focus{
      outline: none;
      box-shadow: 0 0 0 transparent;
    }
  }
`
const ResultsContainer = styled.div`
  background-color:${p=>p.theme.grey1};
  border-bottom: 1px solid ${p=>p.theme.grey4};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 60vh;
  overflow-y: scroll;
  z-index: 99;  
`
const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  ${()=>respond('m','flex-direction: row; flex-wrap: wrap;')}

`