import { Imenu } from "./interface"


export const Menu: Imenu[] = [
  {
    path: '/',
    Titulo: 'Home'
  },

  {
    path: '/Login',
    Titulo: 'Login'
  },

  {
    path: '/Profile',
    Titulo: 'Profile'
  },

  {
    path: '/Blog',
    Titulo: 'Blog'
  },
  {
    path: '/Blog/:id',
    Titulo: 'Blog_detail'
  }
];