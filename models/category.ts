
export default class Category{

  id: number;
  type: string;
  parent: string | null;
  displayName: string;
  link: string;

  constructor(type:string, displayName: string, link:string, parent?: string){
    this.id = Math.random() * 1000000;
    this.type = type
    this.parent = parent || null
    this.displayName = displayName
    this.link = link
  }
}

export const categories = [
  new Category('men', 'men','/'), 
  new Category("men_half_shoes", "half shoes",'/', "men"),
  new Category("men_sandals", "sandals",'/', "men"),
  new Category("boots", "boots",'/', "men"),
  new Category("men_sport_shoes", "sport shoes",'/', "men"),

  new Category('women', 'women','/'),
  new Category("women_half_shoes", "half shoes",'/', "women"),
  new Category("women_high_boots", "high boots",'/', "women"),
  new Category("women_ballerinas", "ballerinas",'/', "women"),
  new Category("women_pumps", "pumps",'/', "women"),
  new Category("women_sport_shoes", "sport shoes",'/', "women"),

  new Category('kids', 'kids','/'),
  new Category("kids_half_shoes", "half shoes",'/', "kids"),
  new Category("kids_sport_shoes", "sport shoes", '/',"kids"),
  new Category("kids_sandals", "sandals",'/', "kids"),
]