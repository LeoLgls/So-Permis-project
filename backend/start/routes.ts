/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/api/contact/sendEmail','ContactsController.sendEmail');
Route.get('/api/contact/opening-hours', 'ContactsController.getOpeningHours');

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.group(() => {

  Route.get('/articles', 'ArticleController.index')
  Route.get('/forfaits', 'ForfaitController.index')
  Route.get('/newsletter', 'NewsletterController.index')
  
}).middleware('auth');

Route.get('/administrateurs', 'AdministrateurController.index')

Route.get('/articles/last' ,'ArticleController.last' )

Route.get('/avis', 'AvisController.index')

Route.get('/categories', 'CategorieController.index')

//forfaits route using he ForfaitController.showByType with the type in param

Route.get('/forfaits/:type', 'ForfaitController.showByType')
//can you show me an exemple request
//http://localhost:3333/forfaits/PERMIS%20B%20EXPRESS

Route.get('/histoires', 'HistoireController.index')

Route.get('/images', 'ImageController.index')

Route.get('/voitures', 'VoitureController.index')

Route.get('/annulation' , 'AnnulationCodeController.index')

Route.post('/login', 'AuthController.login');