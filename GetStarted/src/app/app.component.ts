import { Component  } from '@angular/core'
 
@Component({
 selector:'app-root ', 
 template:'<div> \
              <h1> Welcome to {{pageTitle}}!! </h1> \
                   ....Started Files.... \
            </div>'
})

export class AppComponent{
  
  pageTitle: string = "Coorte management product";

}