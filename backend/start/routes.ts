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

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/administrateurs', 'AdministrateurController.index')
Route.get('/annulationcodes', 'AnnulationCodeController.index')
Route.get('/articles', 'ArticleController.index')

Route.get('/articles/last' ,'ArticleController.last' )

Route.get('/avis', 'AvisController.index')
Route.get('/categories', 'CategorieController.index')
Route.get('/forfaits', 'ForfaitController.index')
Route.get('/histoires', 'HistoireController.index')
Route.get('/horaires', 'HoraireController.index')
Route.get('/images', 'ImageController.index')
Route.get('/newsletters', 'NewsletterController.index')
Route.get('/voitures', 'VoitureController.index')

Route.post('/administrateur', 'AdministrateurController.store')
Route.post('/annulationcode', 'AnnulationCodeController.store')
Route.post('/article', 'ArticleController.store')
Route.post('/avis', 'AvisController.store')
Route.post('/categorie', 'CategorieController.store')
Route.post('/forfait', 'ForfaitController.store')
Route.post('/histoire', 'HistoireController.store')
Route.post('/horaire', 'HoraireController.store')
Route.post('/image', 'ImageController.store')
Route.post('/newsletter/add/', 'NewsletterController.store')
Route.post('/voiture', 'VoitureController.store')

Route.get('/administrateur/show/:id', 'AdministrateurController.show')
Route.get('/annulationcode/show/:id', 'AnnulationCodeController.show')
Route.get('/article/show/:id', 'ArticleController.show')
Route.get('/avis/show/:id', 'AvisController.show')
Route.get('/categorie/show/:id', 'CategorieController.show')
Route.get('/forfait/show/:id', 'ForfaitController.show')
Route.get('/histoire/show/:id', 'HistoireController.show')
Route.get('/horaire/show/:id', 'HoraireController.show')
Route.get('/image/show/:id', 'ImageController.show')
Route.get('/newsletter/show/:id', 'NewsletterController.show')
Route.get('/voiture/show/:id', 'VoitureController.show')

Route.get('/admin/administrateur/delete/:id', 'AdministrateurController.destroy')
Route.get('/admin/annulationcode/delete/:id', 'AnnulationCodeController.destroy')
Route.get('/admin/article/delete/:id', 'ArticleController.destroy')
Route.get('/admin/avis/delete/:id', 'AvisController.destroy')
Route.get('/admin/categorie/delete/:id', 'CategorieController.destroy')
Route.get('/admin/forfait/delete/:id', 'ForfaitController.destroy')
Route.get('/admin/histoire/delete/:id', 'HistoireController.destroy')
Route.get('/admin/horaire/delete/:id', 'HoraireController.destroy')
Route.get('/admin/image/delete/:id', 'ImageController.destroy')
Route.get('/admin/newsletter/delete/:id', 'NewsletterController.destroy') 
Route.get('/admin/voiture/delete/:id', 'VoitureController.destroy')

Route.get('/forfaits/:type', 'ForfaitController.showByType')

// les routes de willy sinon bb cadum

Route.resource('posts','PostController').middleware({
  store:['auth'],
  update:['auth'],
  destroy:['auth'],
});

Route.post('login','AuthController.login');

Route.post('/api/contact/sendEmail','ContactsController.sendEmail');
Route.get('/api/contact/opening-hours', 'ContactsController.getOpeningHours');
