import {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {Context} from '../../../store'
import {MdPinDrop, MdSearch} from 'react-icons/md'
import ProductSmall from '../../product_small'
import {FlexRow, LinkSmall, respond} from '../../../styles'
import {ProductProps} from '../../../types'

export default function SearchBoxComponent() {

  const [products, setProducts] = useState<{products: ProductProps[]}>()
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([])
  const [searchString, setSearchString] = useState("")

  useEffect(()=>{
    fetch('/api/get_products').then(json=>json.json()).then(data=>setProducts(data)).catch(e=>console.error(e))
    
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
      {filteredProducts.length > 0 && searchString.length > 0 ? <SearchResults>
        {filteredProducts.map(prod=><ProductSmall item={prod} />)}  
      </SearchResults>: null}
    </>
  )
}
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${p=>p.theme.grey1};
  padding: 0 0 0 .9rem;
  transition: all .3s;

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
    padding: .4rem 1.4rem;

    &:active, :focus{
      outline: none;
      box-shadow: 0 0 0 transparent;
    }
  }
`
const SearchResults = styled.div`
  display: flex;
  background-color:${p=>p.theme.grey1};
  border-bottom: 1px solid ${p=>p.theme.grey4};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 99;

  ${()=>respond('m','flex-direction: row; flex-wrap: wrap;')}

`