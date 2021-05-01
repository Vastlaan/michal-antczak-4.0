import {ProductProps} from '../types'
import {v4 as uuid} from 'uuid'

export default class Product implements ProductProps{

  id: string;
  category: string;     
  group: string;        // actual product's family includes all variations of colors and sizes
  displayName: string;  // usually the same as group
  price: number;
  color: string;        // hex value
  size: string;
  image: string;
  stock: number;
  isPromoted: boolean;
  isNew: boolean;
  discount: number | null;

  constructor(category:string, group: string, displayName: string, price: number, color: string, image:string, size:string, stock: number, isPromoted?: boolean, isNew?: boolean, discount?: number){
    this.id = uuid();
    this.category = category
    this.group = group
    this.displayName = displayName
    this.price = price
    this.color= color
    this.image= image
    this.size=size
    this.stock= stock
    this.isPromoted= isPromoted || false
    this.isNew = isNew || false
    this.discount = discount || null
  }
}

