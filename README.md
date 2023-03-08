## Run the Application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Create a single-page "Star Wars" application using [SWAPI](https://swapi.dev/documentation)[ ](https://swapi.dev/documentation) that satisﬁes the following business requirements:

### Scenario 1: Show home page

- When the user opens the application
- Then the user should see a list of "Star Wars" movies

### Scenario 2: Navigate to movie details page from home page

- Given the user has opened the home page
- When the user clicks on a movie name
- Then the user should be redirected to the movie details page

### Scenario 3: Show movie details page

- When the user opens the movie details page
- Then the movie title, producer, director, and release date should be displayed
- And the opening crawl of the movie should be shown
- And a list of characters should be displayed

### Scenario 4: Navigate to character details page from movie details page

- Given the user has opened the movie details page
- When the user clicks on a character name
- Then the user should be redirected to the character details page

### Scenario 5: Show character details page

- When the user opens the character details page
- Then the character's personal data should be displayed
- And a list of movies in which the character appeared should be shown

### Scenario 6: Navigate to movie details from character details page

- Given the user has opened the character details page
- When the user clicks on a movie name
- Then the user should be redirected to the movie details page

## Technical requirements:

- Use [Angular](https://angular.io/).
- Use [Angular](https://angular.io/guide/routing-overview)[ ](https://angular.io/guide/routing-overview)[Routing](https://angular.io/guide/routing-overview).
- Show spinner(s) during data loading.
- Avoid extra requests: don't request the data from the API if you have already loaded it.
- Use [Angular](https://material.angular.io/)[ ](https://material.angular.io/)[Material](https://material.angular.io/), [Bootstrap](https://getbootstrap.com/), or any other library to set up basic styles.
- Use any other libraries if you need them.
- The application should support the latest version of Google Chrome.

Would be a plus:

- Use [NgRx](https://ngrx.io/)[ ](https://ngrx.io/)or similar libraries for state management.
- Create a mobile-friendly (responsive) design.
