import {v4 as uuid} from 'uuid'
import {CategoryProps} from '../types'

export default class Category implements CategoryProps{

  id: string;
  type: string;
  parent: string | null;
  displayName: string;
  link: string;

  constructor(type:string, displayName: string, link:string, parent?: string){
    this.id = uuid();
    this.type = type
    this.parent = parent || null
    this.displayName = displayName
    this.link = link
  }
}