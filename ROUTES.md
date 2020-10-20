| **URL**     | **HTTP Verb** | **Action** | **Description**             |
| ----------- | ------------- | -------------- | ---------------------- |
| /api/cookbooks     | GET           |    index            | get all cookbooks        |
| /api/cookbooks/addCookbook/     | POST          |    create            | create a new fruit     |
| /api/cookbooks/book  | GET           |    show            | get a single cookbook by title if title passed in body, get a single cookbook by year if cookbook passed in body, get it by both if both passed in body     |
| /cookbooks/books/:cookbookTitle | PUT           |    update            | update a cookbook's title (find by title)  |
| /cookbooks/books/:cookbookTitle | DELETE        |    destroy            | destroy a single (find by title) |
| /authors/ | GET       |    index           | get all authors |
| /authors/author/:firstName | GET       |    show          | get one author by first name|
| /authors/author/ | POST       |    create          | create a new author (without list of cookbooks) |
| /authors/author/:id | POST       |    update         | update an author by id |
| /authors/author/:id | POST       |    update         | update an author by id |
