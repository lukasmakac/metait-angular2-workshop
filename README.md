## Angular 2 workshop

### Prerekvizity

Budeme potřebovat:

 * [git](https://git-scm.com/)
 * [nodejs](https://nodejs.org/en/) - doporučenou verzi nodeJS - 6.9.X nebo větší
 * rozumný editor s podporou TypeScriptu, doporučujeme [Webstorm](https://www.jetbrains.com/webstorm/download/)

Pro náš projekt použijeme [Angular CLI](http://cli.angular.io). Ten potřebujeme mít nainstalovaný globálně:

```
npm install -g @angular/cli
```

Správnost instalace můžete ověřit příkazem níže (na windows budete muset zavřít a znovu otevřít terminál)

```
ng --help
```

Měl by vám vypsat nápovědu k použití příkazu.

Nástroje máme připravené, naklonujte si tento repozitář a poté ve složce projektu spuťte instalaci závislostí

```
git clone https://bitbucket.org/angular_cz/devfest-angular2-workshop

cd devfest-angular2-workshop
npm install
```

A to je vše. Pokud si chcete ověřit, že je vše nainstalované správně, můžete ve složce projektu spustit příkaz

```
ng serve
```

Ten zbuilduje projekt a zpřístupní ho na adrese [http://localhost:4200](http://localhost:4200)

###Pokud vše proběhlo bez chyb, jste připravení. Těšíme se na workshopu.

Objeví-li se během instalace nějaký problém, napište na [gdgbrno@gug.cz](mailto:gdgbrno@gug.cz), poradíme vám jak dál.
