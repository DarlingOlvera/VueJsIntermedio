
export interface RouteLink{
    name: string;
    path: string;
    title: string;
}

export const routerLinks: RouteLink[] = [
    {path:'/', name:'home', title:'Inicio'},
    {path:'/about', name:'about', title:'Sobre'},
    {path:'/characters', name:'characters', title:'Personajes'},
]

