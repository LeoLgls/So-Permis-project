// app/Models/Administrateur.ts

import { Ozone } from '@adonisjs/ozone'

export default class Administrateur extends Ozone {
  @Ozone.Attribute.Primary()
  public _id: Ozone.Types.Id

  @Ozone.Attribute()
  public email: string

  @Ozone.Attribute()
  public password: string

  // Ajoutez d'autres champs au besoin
}
